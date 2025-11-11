# Plan de Migration - Expo SDK 52 → 54

## Table des Matières

1. [Vue d'Ensemble](#vue-densemble)
2. [Préparation](#préparation)
3. [Évaluation des Risques](#évaluation-des-risques)
4. [Plan de Migration](#plan-de-migration)
5. [Étape 1: Backup](#étape-1-backup)
6. [Étape 2: Création Branche de Test](#étape-2-création-branche-de-test)
7. [Étape 3: Mise à Jour des Dépendances](#étape-3-mise-à-jour-des-dépendances)
8. [Étape 4: Breaking Changes](#étape-4-breaking-changes)
9. [Étape 5: Tests](#étape-5-tests)
10. [Étape 6: Migration des Tenants](#étape-6-migration-des-tenants)
11. [Étape 7: Déploiement](#étape-7-déploiement)
12. [Rollback](#rollback)
13. [Checklist Finale](#checklist-finale)

---

## Vue d'Ensemble

### État Actuel
- **SDK Expo**: 52.0.0
- **React Native**: 0.76.9
- **Node**: 14 (⚠️ ancien)
- **Tenants**: 13 applications différentes

### Objectif
- **SDK Expo**: 54.0.0
- **React Native**: Version compatible SDK 54
- **Node**: 18+ (recommandé)

### Durée Estimée
- **Préparation**: 2-4 heures
- **Migration technique**: 1-2 jours
- **Tests**: 2-3 jours
- **Déploiement progressif**: 1 semaine
- **Total**: ~2 semaines

---

## Préparation

### 1. Documentation à Consulter

**Officielles Expo**:
- [Expo SDK 53 Changelog](https://blog.expo.dev/expo-sdk-53-is-now-available-7f21b2e7fc9d)
- [Expo SDK 54 Changelog](https://blog.expo.dev/expo-sdk-54-is-now-available-...)
- [React Native 0.77 Breaking Changes](https://reactnative.dev/blog/2025/01/15/0.77-stable)

**Packages critiques à vérifier**:
- expo-av (audio/video)
- @sentry/react-native
- react-native-webview
- expo-notifications
- @ui-kitten/components

### 2. Vérifier Compatibilité Packages

Créer un tableau de compatibilité:

| Package | Version Actuelle | Version SDK 54 | Breaking Changes |
|---------|------------------|----------------|------------------|
| expo | 52.0.0 | 54.0.0 | À vérifier |
| react-native | 0.76.9 | 0.77.x | À vérifier |
| expo-av | ~15.0.2 | ? | Audio mode changes? |
| @sentry/react-native | ~6.10.0 | ? | Sentry SDK update |
| react-native-webview | 13.12.5 | ? | EPUB reader impact |

### 3. Environnement de Développement

```bash
# Mettre à jour Node.js (recommandé: 18 LTS)
nvm install 18
nvm use 18

# Mettre à jour CLI
npm install -g expo-cli@latest
npm install -g eas-cli@latest

# Vérifier versions
node --version    # devrait être >= 18
expo --version
eas --version
```

---

## Évaluation des Risques

### Risques Élevés 🔴

1. **EPUB Reader (WebView)**
   - Impact: Fonctionnalité principale
   - Mitigation: Tests exhaustifs sur multiples appareils
   - Rollback: Facile via EAS Update

2. **Audio Background (Audiobooks)**
   - Impact: Fonctionnalité critique
   - Mitigation: Tests iOS + Android sur vraie app
   - Rollback: Possible mais nécessite rebuild

3. **Multi-Tenant System**
   - Impact: 13 apps à tester
   - Mitigation: Migration progressive tenant par tenant
   - Rollback: Par tenant individuellement

### Risques Moyens 🟡

1. **Redux Persist**
   - Impact: Perte potentielle de données utilisateur
   - Mitigation: Tests de migration de storage
   - Rollback: Backup des données

2. **Notifications Push**
   - Impact: Perte temporaire de notifications
   - Mitigation: Tests avec Expo Notifications
   - Rollback: Reconfiguration

3. **Analytics (Amplitude/Sentry)**
   - Impact: Perte temporaire de tracking
   - Mitigation: Vérifier compatibilité SDK
   - Rollback: Facile

### Risques Faibles 🟢

1. **UI Components (@ui-kitten)**
2. **Traductions (inline-i18n)**
3. **Routing (react-router)**

---

## Plan de Migration

### Phase 1: Préparation (Jour 1)
1. Backup complet
2. Créer branche `expo-sdk-54-migration`
3. Documentation des versions actuelles
4. Communication aux équipes

### Phase 2: Migration Technique (Jours 2-3)
1. Mise à jour package.json
2. Mise à jour des tenants
3. Résolution des breaking changes
4. Tests unitaires

### Phase 3: Tests (Jours 4-6)
1. Tests locaux (Expo Go)
2. Builds de développement
3. Tests sur appareils réels
4. Tests des 13 tenants

### Phase 4: Déploiement Progressif (Jours 7-14)
1. Tenant de test (toadreader staging)
2. 2-3 tenants beta
3. Tous les tenants staging
4. Production progressive

---

## Étape 1: Backup

### Backup du Code

```bash
# 1. S'assurer que tout est commité
git status
git add .
git commit -m "Pre-migration backup - SDK 52"

# 2. Créer un tag de version
git tag -a sdk-52-backup -m "Backup avant migration SDK 54"
git push origin sdk-52-backup

# 3. Créer une archive locale
cd ..
tar -czf toad-reader-apps-sdk52-backup-$(date +%Y%m%d).tar.gz toad-reader-apps/
```

### Backup EAS Builds

```bash
# Télécharger les derniers builds fonctionnels
eas build:list --limit 20

# Pour chaque tenant important, télécharger:
eas build:download --platform android --profile production --latest
eas build:download --platform ios --profile production --latest

# Organiser dans un dossier
mkdir -p backups/eas-builds-sdk52/{blf,ghp,toadreader,...}
# Déplacer les builds téléchargés
```

### Backup Configuration

```bash
# Copier les configurations critiques
cp package.json package.json.sdk52.backup
cp package-lock.json package-lock.json.sdk52.backup
cp eas.json eas.json.sdk52.backup

# Backup de tous les tenants
cp -R tenants/ tenants.sdk52.backup/
```

---

## Étape 2: Création Branche de Test

```bash
# Créer et basculer sur nouvelle branche
git checkout -b expo-sdk-54-migration

# Vérifier
git branch
```

---

## Étape 3: Mise à Jour des Dépendances

### 3.1. Vérifier les Versions Cibles

```bash
# Consulter les versions recommandées pour SDK 54
npx expo install --check

# Voir les packages à mettre à jour
npm outdated
```

### 3.2. Mettre à Jour Expo CLI

```bash
# Mettre à jour globalement
npm install -g expo-cli@latest
npm install -g eas-cli@latest
```

### 3.3. Mettre à Jour package.json

**Avant de modifier**, consulter: https://github.com/expo/expo/blob/main/CHANGELOG.md

```bash
# Utiliser l'outil officiel Expo
npx expo install expo@54.0.0

# Puis mettre à jour toutes les dépendances Expo
npx expo install --fix
```

**Ou manuellement**, éditer `package.json`:

```json
{
  "dependencies": {
    "expo": "~54.0.0",
    "react-native": "0.77.x",

    "@expo/vector-icons": "~15.0.0",
    "@react-native-async-storage/async-storage": "2.0.0",
    "@react-native-community/netinfo": "12.0.0",
    "expo-av": "~16.0.0",
    "expo-camera": "~17.0.0",
    "expo-device": "~8.0.0",
    "expo-image": "~3.0.0",
    "expo-notifications": "~1.0.0",

    "@sentry/react-native": "~7.0.0",

    "react": "18.3.1",
    "react-native-webview": "13.x.x"
  }
}
```

### 3.4. Réinstaller

```bash
# Nettoyer
rm -rf node_modules package-lock.json

# Réinstaller
npm install

# Vérifier
npm list expo
npm list react-native
```

### 3.5. Mettre à Jour eas.json

Vérifier si changements nécessaires dans `eas.json`:

```json
{
  "build": {
    "production": {
      "env": {
        "EXPO_SDK_VERSION": "54.0.0"
      }
    }
  }
}
```

### 3.6. Mettre à Jour Tous les Tenants

**Script pour automatiser** (créer `scripts/updateTenantsSdk54.sh`):

```bash
#!/bin/bash

TENANTS=(biblearc biblemesh blf bridge ghp homeschool kmk langham nehemias poiema toadreader truth78 zondervan)

for tenant in "${TENANTS[@]}"; do
  echo "Updating tenant: $tenant"

  # Mettre à jour version (optionnel, peut rester en 52.x.x pour l'instant)
  # sed -i '' 's/"version": "52\./"version": "54./' "tenants/$tenant/app.json"

  echo "✓ $tenant updated"
done

echo ""
echo "All tenants updated!"
```

Exécuter:
```bash
chmod +x scripts/updateTenantsSdk54.sh
./scripts/updateTenantsSdk54.sh
```

---

## Étape 4: Breaking Changes

### 4.1. React Native 0.77 Changes

**À vérifier**:

1. **Nouvelle Architecture** (si activée):
   - Vérifier `expo-build-properties`
   - Tester Turbo Modules

2. **Hermes obligatoire**:
   - Vérifier performance
   - Tester debugger

3. **Suppression de PropTypes**:
   - Chercher dans le code: `import PropTypes from 'prop-types'`
   - Migrer vers TypeScript ou retirer

```bash
# Trouver usages PropTypes
grep -r "PropTypes" src/
```

### 4.2. Expo AV Changes (Audio/Video)

**Audio Background - À vérifier**:

```javascript
// Ancien (SDK 52)
await Audio.setAudioModeAsync({
  staysActiveInBackground: true,
})

// Nouveau (SDK 54) - peut avoir changé
// Consulter: https://docs.expo.dev/versions/v54.0.0/sdk/av/
```

**Test requis**:
- Audio continue en arrière-plan
- Contrôles lock screen
- Notifications audio

### 4.3. Expo Notifications Changes

Vérifier API changes:

```bash
# Tester notifications
npx expo install expo-notifications
```

### 4.4. WebView Changes

**Critique pour EPUB reader**:

```bash
# Vérifier version compatible
npm info react-native-webview versions

# Override si nécessaire dans package.json
"overrides": {
  "react-native-webview": "13.x.x"
}
```

### 4.5. Sentry SDK Update

```bash
# Mettre à jour Sentry
npm install @sentry/react-native@~7.0.0

# Vérifier configuration
cat app.json | grep -A 5 "@sentry/react-native/expo"
```

### 4.6. Chercher Deprecations

```bash
# Chercher console.warn de deprecation
# Lancer l'app et surveiller console

# Chercher imports obsolètes
grep -r "from 'expo-constants'" src/
grep -r "from 'expo-permissions'" src/  # Si présent, obsolète
```

---

## Étape 5: Tests

### 5.1. Tests Locaux (Expo Go)

```bash
# 1. Nettoyer cache
npx expo start -c

# 2. Tester sur simulateur
npm run ios
npm run android

# 3. Tester sur appareil physique via Expo Go
npx expo start
# Scanner QR code
```

**Fonctionnalités à tester**:
- [ ] Authentification
- [ ] Affichage bibliothèque
- [ ] Ouverture d'un EPUB
- [ ] Navigation dans EPUB
- [ ] Highlights et notes
- [ ] Audio/Audiobook
- [ ] Audio en arrière-plan
- [ ] Téléchargement de livres
- [ ] Mode hors ligne
- [ ] Notifications
- [ ] Synchronisation

### 5.2. Build de Développement

```bash
# Changer vers un tenant de test
npm run change-tenant toadreader

# Build development
eas build --platform android --profile development
eas build --platform ios --profile development

# Installer sur appareil
# Android: télécharger APK
# iOS: via TestFlight ou profil ad-hoc
```

### 5.3. Tests Spécifiques

**Test 1: EPUB Reader (WebView)**

```bash
# Tester différents EPUBs:
- EPUB 2
- EPUB 3
- EPUB avec images
- EPUB avec audio
- EPUB avec JavaScript (si supporté)
```

**Test 2: Audio Background**

```bash
# iOS:
1. Lancer audiobook
2. Verrouiller écran → Audio continue?
3. Control Center → Contrôles présents?
4. Appel téléphonique → Audio pause/reprend?

# Android:
1. Lancer audiobook
2. Bouton Home → Audio continue?
3. Notification → Contrôles présents?
4. Appel téléphonique → Audio pause/reprend?
```

**Test 3: Téléchargement & Offline**

```bash
1. Télécharger un livre
2. Activer mode avion
3. Ouvrir livre → Fonctionne?
4. Annotations → Sauvegardées localement?
5. Désactiver mode avion → Sync fonctionne?
```

**Test 4: Notifications**

```bash
1. Activer notifications
2. Déclencher notification (depuis backend)
3. Notification reçue?
4. Clic sur notification → Ouvre app?
```

**Test 5: Performance**

```bash
# Mesurer avec Hermes
- Temps de démarrage app
- Temps d'ouverture EPUB
- Fluidité navigation
- Mémoire utilisée
```

### 5.4. Tests Automatisés (Optionnel mais Recommandé)

Créer des tests basiques:

```bash
# Installer Jest et React Native Testing Library
npm install --save-dev @testing-library/react-native jest

# Créer __tests__/smoke.test.js
```

```javascript
// __tests__/smoke.test.js
import { render } from '@testing-library/react-native';
import App from '../App';

describe('Smoke Tests SDK 54', () => {
  it('App renders without crashing', () => {
    const { getByText } = render(<App />);
    expect(getByText).toBeDefined();
  });
});
```

```bash
# Exécuter
npm test
```

---

## Étape 6: Migration des Tenants

### 6.1. Stratégie de Migration Progressive

**Phase 1: Tenant de Test (Jour 1)**
- `toadreader` (staging)

**Phase 2: Tenants Beta (Jours 2-3)**
- `ghp`
- `nehemias`

**Phase 3: Tenants Production Faible Utilisation (Jours 4-6)**
- `langham`
- `truth78`
- `bridge`
- `poiema`

**Phase 4: Tenants Production Haute Utilisation (Jours 7-10)**
- `blf`
- `biblemesh`
- `biblearc`
- `zondervan`
- `homeschool`
- `kmk`

### 6.2. Processus par Tenant

Pour chaque tenant:

```bash
# 1. Changer vers le tenant
npm run change-tenant <tenant>

# 2. Vérifier app.json spécifique
cat app.json | grep -E "version|versionCode|buildNumber"

# 3. Incrémenter versions
# iOS: buildNumber
# Android: versionCode
# Version générale

# 4. Build staging
npm run build-android-staging
npm run build-ios-staging

# 5. Tests sur staging (24-48h)

# 6. Si OK, build production
npm run build-android-production
npm run build-ios-production

# 7. Soumettre aux stores (ou distribuer en interne)

# 8. Surveiller analytics/Sentry 48h
```

### 6.3. Template de Notes de Version

Préparer pour chaque tenant:

```markdown
## Version 54.0.0 - Migration SDK Expo 54

### Améliorations
- ✨ Mise à jour vers Expo SDK 54
- 🚀 Performance améliorée avec Hermes
- 🎵 Audio en arrière-plan optimisé
- 📱 Support Android 15 (API 35) complet
- 🔧 Support pages mémoire 16 ko (Android)

### Corrections
- 🐛 Corrections mineures de stabilité

### Technique
- React Native 0.77
- Expo SDK 54
- Hermes engine activé

### Notes
Cette mise à jour améliore la performance et la compatibilité avec les dernières versions d'iOS et Android.
```

---

## Étape 7: Déploiement

### 7.1. Déploiement Staging

```bash
# Pour chaque tenant
npm run change-tenant <tenant>

# Pusher sur staging
npm run push-apps-to-staging

# Surveillance
# - Analytics Amplitude
# - Erreurs Sentry
# - Feedback utilisateurs staging
```

### 7.2. Déploiement Beta

```bash
npm run push-apps-to-beta

# Tests beta (2-3 jours minimum)
```

### 7.3. Déploiement Production

**Checklist pré-production**:
- [ ] Tests staging OK (pas d'erreurs critiques)
- [ ] Tests beta OK (feedback positif)
- [ ] Analytics normales
- [ ] Sentry: pas de nouvelles erreurs
- [ ] Documentation mise à jour
- [ ] Équipe support informée
- [ ] Plan de rollback prêt

```bash
# Production
npm run push-apps-to-production

# Soumettre aux stores si rebuild nécessaire
npm run build-android-production
npm run build-ios-production
npm run submit-ios-production
# Android: manuel via Play Console
```

### 7.4. Surveillance Post-Déploiement

**Pendant 7 jours** après déploiement:

1. **Sentry** (quotidien):
   - Nouvelles erreurs?
   - Taux d'erreur augmenté?
   - Crashs?

2. **Amplitude** (quotidien):
   - Utilisateurs actifs normal?
   - Sessions normales?
   - Rétention OK?

3. **Stores** (quotidien):
   - Nouveaux avis négatifs?
   - Taux de crash Store normal?

4. **Support** (quotidien):
   - Tickets liés à la mise à jour?

---

## Rollback

### Scénario 1: Problème Pendant Développement

**Simple - Revenir à la branche précédente**:

```bash
# Abandonner la migration
git checkout master

# Supprimer la branche de migration
git branch -D expo-sdk-54-migration

# Restaurer node_modules
rm -rf node_modules package-lock.json
npm install
```

### Scénario 2: Problème Après Staging Deploy

**OTA Update Rollback**:

```bash
# Republier la dernière version stable SDK 52
npm run rollback-apps

# Ou manuellement
eas update:republish --branch staging
```

### Scénario 3: Problème Après Production Deploy (Critique)

**Option A - Rollback OTA (si possible)**:

```bash
# Republier dernière version stable
npm run rollback-apps

# Vérifier immédiatement
eas update:list --branch production
```

**Option B - Rebuild SDK 52 (si changements natifs)**:

```bash
# 1. Revenir au code SDK 52
git checkout sdk-52-backup

# 2. Pour chaque tenant affecté
npm run change-tenant <tenant>

# 3. Incrémenter version (importante: supérieure à SDK 54!)
# Exemple: si SDK 54 était 54.0.0, utiliser 54.0.1 avec code SDK 52
# Éditer tenants/<tenant>/app.json

# 4. Rebuild d'urgence
npm run build-android-production
npm run build-ios-production

# 5. Soumettre en urgence
npm run submit-ios-production
# Android: manuel avec option "Publication d'urgence"

# 6. Communication utilisateurs
# Email/notification explicative
```

**Option C - Dual Deploy (Avancé)**:

Maintenir deux versions en parallèle:
- Builds SDK 52 pour utilisateurs problématiques
- Builds SDK 54 pour nouveaux utilisateurs

Nécessite gestion de branches Git complexe.

---

## Checklist Finale

### Avant Migration

- [ ] Backup complet effectué (code + builds)
- [ ] Tag Git créé (`sdk-52-backup`)
- [ ] Documentation lue (Expo SDK 53, 54 changelogs)
- [ ] Node.js 18+ installé
- [ ] Expo CLI & EAS CLI à jour
- [ ] Équipe informée du planning
- [ ] Plan de rollback documenté

### Pendant Migration

- [ ] Branche `expo-sdk-54-migration` créée
- [ ] `package.json` mis à jour
- [ ] `node_modules` réinstallés proprement
- [ ] Breaking changes identifiés et corrigés
- [ ] Tests locaux passés (Expo Go)
- [ ] Builds dev créés et testés
- [ ] Tenant test (toadreader staging) déployé
- [ ] Tests 48h OK sur tenant test

### Avant Production

- [ ] 3+ tenants testés en beta
- [ ] Aucune erreur critique Sentry
- [ ] Analytics normales
- [ ] Feedback beta positif
- [ ] Notes de version rédigées
- [ ] Équipe support briefée
- [ ] Plan de surveillance défini

### Après Production

- [ ] Tous les tenants migrés progressivement
- [ ] Surveillance 7 jours active
- [ ] Pas d'erreurs critiques
- [ ] Analytics stables
- [ ] Stores OK (pas de crashs rapportés)
- [ ] Documentation projet mise à jour
- [ ] Tag Git final créé (`sdk-54-stable`)

---

## Ressources

### Documentation Officielle

- [Expo SDK 54 Docs](https://docs.expo.dev/versions/v54.0.0/)
- [React Native 0.77 Docs](https://reactnative.dev/docs/0.77/getting-started)
- [EAS Build Guide](https://docs.expo.dev/build/introduction/)
- [EAS Update Guide](https://docs.expo.dev/eas-update/introduction/)

### Outils

- [Expo Upgrade Helper](https://github.com/expo/expo/blob/main/packages/expo/CHANGELOG.md)
- [React Native Upgrade Helper](https://react-native-community.github.io/upgrade-helper/)
- [Can I Use - React Native](https://caniuse.com/)

### Support

- [Expo Forums](https://forums.expo.dev/)
- [Expo Discord](https://chat.expo.dev/)
- [Stack Overflow - Expo](https://stackoverflow.com/questions/tagged/expo)

---

## Conclusion

Cette migration est **faisable mais requiert prudence**. La clé du succès:

1. ✅ **Tests exhaustifs** avant production
2. ✅ **Migration progressive** tenant par tenant
3. ✅ **Surveillance active** post-déploiement
4. ✅ **Plan de rollback prêt** en cas de problème

**Timeline réaliste**: 2-3 semaines pour migration complète et sûre.

**Alternative**: Rester sur SDK 52 est viable à court/moyen terme si pas de features critiques dans SDK 54. Google Play exige API 35 (déjà en place), pas de pression immédiate pour SDK 54.

Bon courage! 🚀
