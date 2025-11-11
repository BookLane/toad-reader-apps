# Guide Complet - Toad Reader Apps: Tenants, Builds & Déploiement

## Table des Matières

1. [Introduction](#introduction)
2. [Prérequis](#prérequis)
3. [Configuration Initiale](#configuration-initiale)
4. [Système de Tenants](#système-de-tenants)
5. [Création d'un Nouveau Tenant](#création-dun-nouveau-tenant)
6. [Configuration du Tenant](#configuration-du-tenant)
7. [Changement de Tenant Actif](#changement-de-tenant-actif)
8. [Développement Local](#développement-local)
9. [Gestion des Versions](#gestion-des-versions)
10. [Builds des Applications](#builds-des-applications)
11. [Déploiement (Push Updates)](#déploiement-push-updates)
12. [Soumission aux Stores](#soumission-aux-stores)
13. [Workflow Complet de Publication](#workflow-complet-de-publication)
14. [Traductions](#traductions)
15. [Rollback](#rollback)
16. [Troubleshooting](#troubleshooting)

---

## Introduction

Toad Reader Apps est une application multi-tenant Expo (React Native) qui permet de gérer plusieurs clients/marques à partir d'une seule base de code. Chaque tenant possède sa propre configuration, assets (logos, icônes), branding et paramètres backend.

### Architecture Multi-Tenant

- **Base de code unique** partagée entre tous les tenants
- **Configurations spécifiques** par tenant dans `tenants/<tenant-name>/`
- **Système de switch** qui copie les fichiers du tenant actif à la racine du projet
- **Support multi-plateforme**: iOS, Android et Web

---

## Prérequis

### Logiciels Requis

```bash
# Node.js version 14
node --version  # Doit retourner v14.x.x

# npm (inclus avec Node.js)
npm --version

# EAS CLI (Expo Application Services)
npm install -g eas-cli

# Expo CLI
npm install -g expo-cli
```

### Comptes Nécessaires

1. **Compte Expo** (https://expo.dev)
   - Accès à l'organisation du projet
   - Permissions pour build et submit

2. **Apple Developer Account** (pour iOS)
   - Apple Developer Program membership ($99/an)
   - Accès App Store Connect

3. **Google Play Console** (pour Android)
   - Compte développeur Google Play ($25 unique)

### Outils Optionnels

- **Android Studio** (pour émulateur Android)
- **Xcode** (pour simulateur iOS, macOS uniquement)
- **Sentry Account** (monitoring d'erreurs)
- **Amplitude Account** (analytics)

---

## Configuration Initiale

### 1. Cloner le Projet

```bash
git clone https://github.com/BookLane/toad-reader-apps/blob/expo-upgrade/
cd toad-reader-apps
```

### 2. Installer les Dépendances

```bash
npm install
```

**Note**: Requiert Node.js 14. Si vous avez plusieurs versions de Node, utilisez `nvm`:

```bash
nvm install 14
nvm use 14
npm install
```

### 3. Se Connecter à Expo

```bash
eas login
# Entrez vos identifiants Expo
```

### 4. Vérifier la Configuration EAS

```bash
eas whoami
# Doit afficher votre nom d'utilisateur Expo
```

---

## Système de Tenants

### Qu'est-ce qu'un Tenant?

Un tenant représente une instance spécifique de l'application avec:
- Sa propre identité visuelle (logos, couleurs, splash screen)
- Ses propres identifiants d'app stores (bundle ID iOS, package Android)
- Sa configuration backend (serveurs, API endpoints)
- Ses propres credentials Sentry, Amplitude, etc.

### Structure d'un Tenant

Chaque tenant est stocké dans `tenants/<tenant-name>/` avec la structure suivante:

```
tenants/
└── <tenant-name>/
    ├── app.json                    # Configuration Expo complète
    ├── translationModifier.js      # Modifications des traductions
    ├── assets/
    │   ├── icons/
    │   │   ├── logo.png           # Logo principal (Android)
    │   │   ├── logo_ios.png       # Logo iOS
    │   │   ├── logo_android_fg.png # Logo Android foreground (adaptive icon)
    │   │   ├── logo_android_bg.png # Logo Android background (adaptive icon)
    │   │   ├── favicon.png        # Favicon web
    │   │   ├── sm_bw.png          # Petite icône noir & blanc (notifications)
    │   │   ├── enhanced-logo.png  # Logo amélioré
    │   │   ├── login-logo.png     # Logo de la page de connexion
    │   │   └── splash-tablet.png  # Image du splash screen
    │   └── images/
    │       └── ...                # Autres assets spécifiques
    └── favicon.ico                # Favicon legacy
```

### Tenants Existants

Pour voir la liste des tenants disponibles:

```bash
ls -la tenants/
```

Exemples de tenants:
- `toadreader` - Application principale Toad Reader
- `biblemesh` - Application Bible Mesh
- `biblearc` - Application Bible Arc
- `zondervan` - Application Zondervan
- etc.

---

## Création d'un Nouveau Tenant

### Méthode 1: Création Interactive via le Script

```bash
npm run change-tenant <nouveau-tenant-name>
```

Le script détectera que le tenant n'existe pas et proposera:
```
This tenant does not exist.
If you would like to create this tenant from a copy of an existing tenant,
enter the existing tenant and hit ENTER. Otherwise, just hit ENTER.
```

**Entrez le nom d'un tenant existant** à copier (ex: `toadreader`):
```bash
toadreader
```

Le script va:
1. Créer le répertoire `tenants/<nouveau-tenant-name>/`
2. Copier tous les fichiers depuis `tenants/toadreader/`
3. Automatiquement changer vers le nouveau tenant

### Méthode 2: Création Manuelle

```bash
# 1. Créer le répertoire du tenant
mkdir tenants/<nouveau-tenant-name>

# 2. Copier depuis un tenant existant
cp -R tenants/toadreader/* tenants/<nouveau-tenant-name>/

# 3. Changer vers le nouveau tenant
npm run change-tenant <nouveau-tenant-name>
```

---

## Configuration du Tenant

### Fichier app.json

Le fichier `app.json` contient toute la configuration Expo. Après création, éditez:

```bash
nano tenants/<tenant-name>/app.json
# ou
code tenants/<tenant-name>/app.json
```

#### Sections Importantes à Configurer

##### 1. Informations Générales

```json
{
  "expo": {
    "name": "Nom de l'App",
    "slug": "nom-app-slug",
    "description": "Description de l'application",
    "owner": "nom-organisation-expo",
    "version": "1.0.0",
    "orientation": "portrait",
    "primaryColor": "#232222"
  }
}
```

**Champs à modifier**:
- `name`: Nom affiché sous l'icône de l'app
- `slug`: Identifiant URL-friendly (minuscules, tirets)
- `description`: Description de l'app
- `owner`: Organisation Expo propriétaire
- `version`: Version sémantique (MAJOR.MINOR.PATCH)

##### 2. Configuration iOS

```json
{
  "ios": {
    "bundleIdentifier": "com.company.appname",
    "buildNumber": "1",
    "icon": "./assets/icons/logo_ios.png",
    "supportsTablet": true,
    "infoPlist": {
      "UIBackgroundModes": ["audio"]
    }
  }
}
```

**Champs critiques**:
- `bundleIdentifier`: UNIQUE, format reverse-DNS (ex: `com.toadreader.books`)
- `buildNumber`: Incrémenté à chaque soumission App Store
- `icon`: Chemin vers l'icône iOS (1024x1024px recommandé)

##### 3. Configuration Android

```json
{
  "android": {
    "package": "com.company.appname",
    "versionCode": 1000,
    "icon": "./assets/icons/logo.png",
    "adaptiveIcon": {
      "foregroundImage": "./assets/icons/logo_android_fg.png",
      "backgroundImage": "./assets/icons/logo_android_bg.png"
    },
    "permissions": [
      "CAMERA",
      "READ_EXTERNAL_STORAGE",
      "WRITE_EXTERNAL_STORAGE"
    ]
  }
}
```

**Champs critiques**:
- `package`: UNIQUE, identifiant Android (ex: `com.toadreader.demo`)
- `versionCode`: Entier incrémenté à chaque publication (ex: 1000, 1001, 1002...)
- `adaptiveIcon`: Icônes pour Android 8+ (foreground + background)

**Convention versionCode**: `MMNNPP` où:
- `MM`: Version majeure (52 pour Expo 52)
- `NN`: Version mineure (00-99)
- `PP`: Version patch (00-99)
- Exemple: version 52.0.3 → versionCode 5203

##### 4. Configuration Web

```json
{
  "web": {
    "favicon": "./assets/icons/favicon.png"
  }
}
```

##### 5. Updates EAS (Over-The-Air)

```json
{
  "updates": {
    "fallbackToCacheTimeout": 0,
    "url": "https://u.expo.dev/<project-id>"
  }
}
```

**Obtenir un nouveau Project ID**:
```bash
# Dans le répertoire du projet
eas project:init
# Cela va créer un nouveau projectId et l'afficher
```

##### 6. Plugins et Intégrations

```json
{
  "plugins": [
    [
      "@sentry/react-native/expo",
      {
        "organization": "votre-org-sentry",
        "project": "nom-projet-sentry"
      }
    ],
    [
      "expo-build-properties",
      {
        "android": {
          "compileSdkVersion": 35,
          "targetSdkVersion": 35,
          "buildToolsVersion": "35.0.0"
        }
      }
    ]
  ]
}
```

##### 7. Configuration Extra (Backend & Features)

```json
{
  "extra": {
    "SENTRY_DSN": "https://...",
    "AMPLITUDE_API_KEY": "...",
    "DEV_DATA_ORIGIN_OVERRIDE": "192.168.1.45",
    "IDPS": {
      "21": {
        "name": "Nom du Tenant",
        "domain": "books.example.com",
        "authMethod": "NONE_OR_EMAIL",
        "devAuthMethod": "NONE_OR_EMAIL",
        "readingSessionsOn": 1,
        "sketchingOn": 1,
        "useEnhancedReader": true,
        "useAudiobooks": true
      }
    },
    "eas": {
      "projectId": "<uuid-from-eas-project-init>"
    }
  }
}
```

**Configuration IDP** (Identity Provider):
- `name`: Nom affiché du service
- `domain`: Domaine backend principal
- `authMethod`: Méthode d'authentification production
- `devAuthMethod`: Méthode d'authentification développement
- Feature flags: `readingSessionsOn`, `sketchingOn`, etc.

**DEV_DATA_ORIGIN_OVERRIDE**:
- Adresse IP de votre serveur de développement local
- Format: `"192.168.x.x"` (sans http://)
- Trouvez votre IP: `ifconfig` (macOS/Linux) ou `ipconfig` (Windows)

### Assets du Tenant

#### Spécifications des Icônes

Créez et placez les assets suivants dans `tenants/<tenant-name>/assets/icons/`:

| Fichier | Dimensions | Format | Usage |
|---------|-----------|--------|-------|
| `logo.png` | 1024x1024px | PNG transparent | Logo principal Android |
| `logo_ios.png` | 1024x1024px | PNG | Icône iOS App Store |
| `logo_android_fg.png` | 432x432px | PNG transparent | Foreground adaptive icon |
| `logo_android_bg.png` | 432x432px | PNG | Background adaptive icon |
| `favicon.png` | 48x48px | PNG | Favicon web |
| `sm_bw.png` | 96x96px | PNG transparent | Icône notifications |
| `splash-tablet.png` | 2048x2732px | PNG | Splash screen (ratio iPad) |
| `login-logo.png` | Variable | PNG | Logo page de connexion |
| `enhanced-logo.png` | Variable | PNG | Logo amélioré (usage interne) |

#### Création des Icônes

**Outils recommandés**:
- **En ligne**: https://appicon.co/ (génération automatique)
- **Local**: Adobe Illustrator, Figma, Sketch
- **Adaptive Icons Android**: https://romannurik.github.io/AndroidAssetStudio/

**Conseils**:
- Utilisez des designs simples et lisibles à petite taille
- Logo Android foreground: marges de sécurité de 15-20%
- Splash screen: testez sur différentes tailles d'écran
- PNG avec transparence pour tous les logos sauf background

### Fichier translationModifier.js

Ce fichier permet de modifier les traductions par tenant:

```javascript
// tenants/<tenant-name>/translationModifier.js

// Version simple (pas de modification)
const translationModifier = str => str

// Version avec modifications
const translationModifier = str => {
  // Remplacer "Toad Reader" par le nom de votre tenant
  return str.replace(/Toad Reader/g, 'Mon App')
}

export default translationModifier
```

---

## Changement de Tenant Actif

### Commande de Base

```bash
npm run change-tenant <tenant-name>
```

### Ce que Fait le Script

Le script `scripts/changeTenant.sh` effectue les opérations suivantes:

1. **Validation**: Vérifie que le tenant existe
2. **Suppression**: Efface les fichiers du tenant actuel à la racine:
   - `app.json`
   - `assets/`
   - `translationModifier.js`
3. **Copie**: Copie les fichiers du nouveau tenant depuis `tenants/<tenant-name>/`
4. **Assets standard**: Copie le contenu de `standard-assets/` vers `assets/`
5. **Traductions**: Met à jour `src/utils/translations/current.json` avec la langue du tenant

### Vérification

```bash
# Afficher le tenant actif
cat app.json | grep "name"

# Vérifier les assets
ls -la assets/icons/

# Vérifier la version
cat app.json | grep "version"
```

### Fichiers Ignorés par Git

Les fichiers suivants sont dans `.gitignore` et ne sont jamais commités:
- `/app.json`
- `/assets/*`
- `/translationModifier.js`

**Important**: Seuls les fichiers dans `tenants/` sont versionnés. Les fichiers à la racine sont générés.

---

## Développement Local

### 1. Configurer l'IP du Serveur Backend

Éditez le tenant actif:

```bash
nano tenants/<tenant-actif>/app.json
```

Modifiez `DEV_DATA_ORIGIN_OVERRIDE`:

```json
{
  "extra": {
    "DEV_DATA_ORIGIN_OVERRIDE": "192.168.1.45"
  }
}
```

**Trouvez votre IP locale**:
```bash
# macOS/Linux
ifconfig | grep "inet "

# Windows
ipconfig
```

### 2. Recharger le Tenant

Après modification de `app.json`:

```bash
npm run change-tenant <tenant-name>
```

**Important**: Toujours relancer `change-tenant` après modification du fichier dans `tenants/`!

### 3. Démarrer le Serveur de Développement

```bash
# Démarrer Metro Bundler (mode offline)
npm start

# Dans un autre terminal, lancer l'app
npm run android  # Pour Android
npm run ios      # Pour iOS
```

**Mode offline**: Les commandes utilisent `--offline` pour éviter de télécharger des mises à jour depuis Expo.

### 4. Développement sur Appareil Physique

**Étapes**:
1. Assurez-vous que votre appareil et ordinateur sont sur le même réseau WiFi
2. Installez **Expo Go** depuis l'App Store/Play Store
3. Lancez `npm start`
4. Scannez le QR code avec:
   - iOS: Appareil photo natif
   - Android: App Expo Go

**Note**: En mode offline, vous devrez peut-être saisir manuellement l'URL: `exp://<votre-ip>:8081`

---

## Gestion des Versions

### Système de Versionnement

Cette app utilise le **Semantic Versioning** (SemVer):

```
MAJOR.MINOR.PATCH

Exemple: 52.0.3
- MAJOR: 52 (version Expo SDK)
- MINOR: 0 (nouvelles fonctionnalités)
- PATCH: 3 (corrections de bugs)
```

### Quand Incrémenter la Version?

| Type de changement | Incrément | Exemple |
|-------------------|----------|---------|
| Nouvelle build store | MINOR ou PATCH | 52.0.0 → 52.0.1 |
| Nouvelles fonctionnalités | MINOR | 52.0.3 → 52.1.0 |
| Corrections de bugs | PATCH | 52.0.3 → 52.0.4 |
| Mise à jour Expo SDK | MAJOR | 52.0.3 → 53.0.0 |

### Mettre à Jour la Version

#### iOS (version + buildNumber)

```json
{
  "ios": {
    "bundleIdentifier": "com.example.app",
    "buildNumber": "2"  // Incrémenter à chaque soumission App Store
  },
  "version": "52.0.3"  // Incrémenter selon SemVer
}
```

**Règles iOS**:
- `version`: Affiché aux utilisateurs (SemVer)
- `buildNumber`: Compteur interne, doit toujours augmenter

#### Android (version + versionCode)

```json
{
  "android": {
    "package": "com.example.app",
    "versionCode": 5203  // Incrémenter à chaque publication Play Store
  },
  "version": "52.0.3"  // Même que iOS
}
```

**Règles Android**:
- `version`: Affiché aux utilisateurs (SemVer)
- `versionCode`: Entier unique, doit toujours augmenter

**Convention versionCode**: Correspondance avec version SemVer
- Version `52.0.3` → versionCode `5203`
- Version `52.1.15` → versionCode `5215`
- Version `53.0.0` → versionCode `5300`

### Workflow de Version

```bash
# 1. Mettre à jour la version dans le tenant
nano tenants/<tenant>/app.json
# Éditer: "version": "52.0.4"
# Éditer iOS: "buildNumber": "3"
# Éditer Android: "versionCode": 5204

# 2. Recharger le tenant
npm run change-tenant <tenant>

# 3. Vérifier
cat app.json | grep -A 2 "version"
```

### Lister les Versions de Tous les Tenants

```bash
npm run list-versions
```

Affiche un tableau avec les versions de chaque tenant.

---

## Builds des Applications

### Vue d'Ensemble

Les builds sont créés via **EAS Build** (Expo Application Services). Il existe 3 profils:

1. **Staging**: Builds de test (backend staging)
2. **Beta**: Builds de test (backend production)
3. **Production**: Builds finales pour publication

### Configuration EAS (eas.json)

Le fichier `eas.json` à la racine définit les profils:

```json
{
  "build": {
    "staging": {
      "distribution": "internal",
      "channel": "staging",
      "env": {
        "channel": "staging"
      }
    },
    "beta": {
      "distribution": "internal",
      "channel": "beta",
      "env": {
        "channel": "beta"
      }
    },
    "production": {
      "channel": "production",
      "env": {
        "channel": "production"
      }
    }
  }
}
```

### Avant de Builder

**Checklist obligatoire**:

1. ✅ Version mise à jour dans `tenants/<tenant>/app.json`
   - `version` (iOS & Android)
   - `buildNumber` (iOS uniquement)
   - `versionCode` (Android uniquement)

2. ✅ Tenant rechargé:
   ```bash
   npm run change-tenant <tenant>
   ```

3. ✅ Credentials configurés (premier build uniquement)

### Build Android

#### Staging

```bash
npm run build-android-staging
```

- Distribution: Internal (pas publié sur Play Store)
- Backend: Serveur staging
- Sortie: Fichier `.apk` ou `.aab`

#### Beta

```bash
npm run build-android-beta
```

- Distribution: Internal
- Backend: Production
- Utilisation: Tests bêta avec backend réel

#### Production

```bash
npm run build-android-production
```

- Distribution: Store (prêt pour Google Play)
- Backend: Production
- Format: `.aab` (Android App Bundle)

### Build iOS

#### Staging

```bash
npm run build-ios-staging
```

- Distribution: Internal (Ad-Hoc ou Development)
- Backend: Serveur staging

#### Beta

```bash
npm run build-ios-beta
```

- Distribution: Internal
- Backend: Production
- Utilisation: Tests avec TestFlight

#### Production

```bash
npm run build-ios-production
```

- Distribution: Store (App Store)
- Backend: Production
- Format: `.ipa` signé pour distribution

### Build Multi-Plateforme

Pour builder iOS et Android simultanément:

```bash
npm run build-apps-production
```

Équivalent à:
```bash
eas build --platform all --profile production
```

### Processus de Build

1. **Confirmation**: Le script demande confirmation
   ```
   Did you update the version number and rerun change-tenant? (y/N)
   ```

2. **Upload**: Le code est uploadé vers les serveurs EAS

3. **Build distant**: EAS construit l'app dans le cloud
   - Android: ~15-20 minutes
   - iOS: ~20-30 minutes

4. **Récupération**: Le build est disponible sur expo.dev

### Monitoring du Build

**Dashboard Expo**:
```
https://expo.dev/accounts/<owner>/projects/<slug>/builds
```

**CLI**:
```bash
eas build:list
```

### Télécharger le Build

**Via Dashboard**:
- Connectez-vous à expo.dev
- Naviguez vers votre projet → Builds
- Cliquez sur le build → Download

**Via CLI**:
```bash
# Télécharger le dernier build Android production
eas build:download --platform android --profile production

# Télécharger le dernier build iOS production
eas build:download --platform ios --profile production
```

### Gestion des Credentials

#### Premier Build iOS

EAS va demander:
```
? Generate a new Apple Distribution Certificate? (Y/n)
? Generate a new Apple Provisioning Profile? (Y/n)
```

Répondez **Yes** pour tout. EAS gérera automatiquement les certificats.

**Alternative (gestion manuelle)**:
```bash
eas credentials
```

#### Premier Build Android

EAS va demander:
```
? Generate a new Android Keystore? (Y/n)
```

Répondez **Yes**. EAS créera et stockera le keystore de manière sécurisée.

**Important**: Ne perdez JAMAIS le keystore Android. Impossible de mettre à jour l'app sans lui!

---

## Déploiement (Push Updates)

### Qu'est-ce qu'un Update?

Les **EAS Updates** permettent de pousser des changements JavaScript/assets sans rebuild:
- Corrections de bugs
- Modifications d'interface
- Mises à jour de contenu

**Limitations**:
- ❌ Pas pour changements natifs (permissions, packages natifs, config Expo)
- ❌ Pas pour changements de version
- ✅ Uniquement pour code JS/TypeScript et assets

### Branches d'Update

Le projet utilise 3 branches:
1. **staging**: Environnement de test (backend staging)
2. **beta**: Tests bêta (backend production)
3. **production**: Utilisateurs finaux

### Push to Staging

```bash
npm run push-apps-to-staging
```

- Met à jour les apps sur la branche `staging`
- Les utilisateurs avec app staging reçoivent l'update au prochain lancement

### Push to Beta

```bash
npm run push-apps-to-beta
```

- Met à jour les apps sur la branche `beta`
- Pour les testeurs bêta

### Push to Production

```bash
npm run push-apps-to-production
```

**⚠️ Attention**: Met à jour TOUS les utilisateurs production du tenant actif!

**Confirmation requise**:
```
About to push apps to production for books.example.com.
Are you sure? (y/N)
```

### Push Multi-Tenants

#### Apps (tous les tenants)

```bash
npm run push-apps-to-production-all-tenants
```

- Pousse updates production pour TOUS les tenants
- Utilise le script `scripts/pushAppsToProductionAllTenants.sh`
- Tenant par tenant, avec confirmation

#### Web (tous les tenants)

```bash
npm run push-web-to-production-all-tenants
```

### Déploiement Web

#### Push Web to Staging

```bash
npm run push-web-to-staging
```

1. Build web: `npx expo export:web`
2. Copie overrides: `cp -r web-build-overrides/* web-build`
3. Upload vers serveur staging
4. Script: `scripts/pushWebToStaging.js`

#### Push Web to Beta

```bash
npm run push-web-to-beta
```

Similaire à staging, mais vers environnement beta.

#### Push Web Staging/Beta to Production

```bash
# Promouvoir staging vers production
npm run push-web-staging-to-production

# Promouvoir beta vers production
npm run push-web-beta-to-production
```

Copie directement les builds existants vers production (sans rebuild).

### Vérifier l'Update

Après un push:

```bash
# Vérifier dans le dashboard Expo
https://expo.dev/accounts/<owner>/projects/<slug>/updates

# Ou via CLI
eas update:list --branch production
```

### Workflow Typique

**Scénario**: Bug mineur détecté en production

```bash
# 1. Corriger le bug dans le code
nano src/components/...

# 2. Tester localement
npm start

# 3. Changer vers le tenant concerné
npm run change-tenant <tenant>

# 4. Pousser en staging pour test
npm run push-apps-to-staging

# 5. Tester sur app staging

# 6. Si OK, pousser en production
npm run push-apps-to-production
```

---

## Soumission aux Stores

### Google Play Store (Android)

#### Méthode Manuelle (Recommandée)

1. **Build l'app**:
   ```bash
   npm run build-android-production
   ```

2. **Télécharger le .aab**:
   ```bash
   eas build:download --platform android --profile production
   ```

3. **Google Play Console**:
   - Allez sur https://play.google.com/console
   - Sélectionnez votre app
   - Production → Créer une nouvelle version
   - Uploadez le fichier `.aab`
   - Remplissez les notes de version
   - Envoyer pour révision

4. **Délai de publication**: 1-3 jours (révision Google)

#### Via CLI (Non utilisé)

```bash
# Ce script affiche juste les instructions
npm run submit-android-production
```

### Apple App Store (iOS)

#### Via EAS Submit

```bash
npm run submit-ios-production
```

**Ce que fait la commande**:
1. Demande confirmation
2. Récupère le dernier build iOS production
3. Upload vers App Store Connect via API
4. Soumet pour révision

**Prérequis**:
- App Store Connect API Key configuré dans EAS
- Build iOS production récent et valide

#### Méthode Manuelle Alternative

1. **Build l'app**:
   ```bash
   npm run build-ios-production
   ```

2. **Télécharger le .ipa**:
   ```bash
   eas build:download --platform ios --profile production
   ```

3. **Upload via Transporter** (app macOS):
   - Ouvrir Transporter
   - Glisser-déposer le `.ipa`
   - Soumettre

4. **App Store Connect**:
   - https://appstoreconnect.apple.com
   - My Apps → Sélectionner l'app
   - Version → Sélectionner le build uploadé
   - Remplir métadonnées et screenshots
   - Soumettre pour révision

5. **Délai de publication**: 1-2 jours (révision Apple)

### Métadonnées Store

**À préparer avant soumission**:

#### Google Play
- 📸 Screenshots (téléphone + tablette)
- 📝 Description courte (80 caractères)
- 📝 Description longue (4000 caractères)
- 🖼️ Feature graphic (1024x500px)
- 📱 Icône haute résolution (512x512px)
- 🎬 Vidéo promo (optionnelle)

#### Apple App Store
- 📸 Screenshots (tous les appareils requis: iPhone, iPad)
- 📝 Description (4000 caractères)
- 🏷️ Mots-clés (100 caractères, séparés par virgules)
- 📞 Support URL
- 🌐 Marketing URL (optionnel)
- 🔒 Informations de confidentialité

### Checklist Pré-Soumission

- [ ] Version incrémentée correctement
- [ ] buildNumber/versionCode incrémenté
- [ ] Testé sur appareils réels (iOS et Android)
- [ ] Testé fonctionnalités principales
- [ ] Vérifié connexion backend production
- [ ] Screenshots à jour
- [ ] Description et métadonnées complètes
- [ ] Notes de version rédigées
- [ ] Credentials valides et à jour

---

## Workflow Complet de Publication

### Scénario: Publier une Nouvelle Version (52.0.4)

#### 1. Préparer le Code

```bash
# S'assurer d'être sur la branche principale
git checkout master
git pull origin master

# Créer une branche de release (optionnel)
git checkout -b release/52.0.4
```

#### 2. Mettre à Jour la Version

```bash
# Éditer le tenant
nano tenants/toadreader/app.json

# Mettre à jour:
# - "version": "52.0.4"
# - "buildNumber": "5" (iOS)
# - "versionCode": 5204 (Android)
```

#### 3. Recharger le Tenant

```bash
npm run change-tenant toadreader
```

#### 4. Tester Localement

```bash
# Lancer l'app
npm start

# Dans un autre terminal
npm run ios
npm run android

# Vérifier fonctionnalités principales
```

#### 5. Commit et Push

```bash
git add tenants/toadreader/app.json
git commit -m "Bump version to 52.0.4"
git push origin release/52.0.4

# Créer PR et merger dans master
```

#### 6. Builder pour Production

```bash
# S'assurer d'être sur master avec la dernière version
git checkout master
git pull origin master

# Recharger le tenant
npm run change-tenant toadreader

# Builder les deux plateformes
npm run build-apps-production

# OU séparément:
# npm run build-android-production
# npm run build-ios-production
```

**Attendre la fin des builds** (~20-30 minutes)

#### 7. Tester les Builds

**Android**:
```bash
# Télécharger et installer sur appareil de test
eas build:download --platform android --profile production
```

**iOS**:
```bash
# Via TestFlight
# 1. Soumettre le build à TestFlight
# 2. Attendre traitement Apple (~10 minutes)
# 3. Inviter des testeurs
# 4. Tester sur vrais appareils
```

#### 8. Soumettre aux Stores

**Android**:
```bash
# Télécharger le .aab
eas build:download --platform android --profile production

# Upload manuel via Google Play Console
# https://play.google.com/console
```

**iOS**:
```bash
# Soumission automatique
npm run submit-ios-production

# OU manuel via App Store Connect
# https://appstoreconnect.apple.com
```

#### 9. Remplir les Métadonnées

**Google Play Console**:
- Notes de version
- Captures d'écran (si nouvelles fonctionnalités)
- Description mise à jour

**App Store Connect**:
- What's New (notes de version)
- Screenshots (si nécessaire)
- Description mise à jour

#### 10. Envoyer pour Révision

- **Google Play**: Cliquer "Envoyer pour révision" → 1-3 jours
- **App Store**: Cliquer "Soumettre pour révision" → 1-2 jours

#### 11. Publication

Une fois approuvé:
- **Android**: Publication automatique ou manuelle selon configuration
- **iOS**: Publication automatique ou manuelle selon choix

#### 12. Surveiller

```bash
# Monitoring via Sentry
https://sentry.io/organizations/<org>/projects/<project>/

# Analytics via Amplitude
https://analytics.amplitude.com/

# Feedback utilisateurs sur stores
```

#### 13. Update Post-Release (si nécessaire)

Si bug mineur détecté:
```bash
# Corriger le code
# ...

# Pousser update OTA (pas de nouvelle soumission store)
npm run push-apps-to-production
```

---

## Traductions

### Système de Traduction

L'app utilise **inline-i18n** pour l'internationalisation.

### Fichiers de Traduction

```
src/utils/translations/
├── en.json           # Anglais
├── es.json           # Espagnol
├── fr.json           # Français
├── ...
├── current.json      # Langue active (généré)
├── translations.csv  # Format CSV pour édition
└── auto-translated/  # Traductions automatiques
```

### Workflow de Traduction

#### 1. Extraire les Strings

```bash
npm run translate
```

**Ce que fait cette commande**:
1. Scanne tout le code pour `i("string")`
2. Génère/met à jour les fichiers JSON de langue
3. Convertit JSON → CSV pour faciliter l'édition

#### 2. Éditer les Traductions

```bash
# Ouvrir le CSV dans Excel/Google Sheets
open src/utils/translations/translations.csv

# Ou éditer directement les JSON
nano src/utils/translations/fr.json
```

#### 3. Convertir CSV → JSON

```bash
npm run translate-convert-csv-to-json
```

#### 4. Tester

```bash
# Le fichier current.json est automatiquement mis à jour
# lors du changement de tenant selon LANGUAGE_CODE
npm run change-tenant <tenant>

npm start
```

### Configuration de la Langue par Tenant

Dans `app.json` du tenant:

```json
{
  "extra": {
    "LANGUAGE_CODE": "fr"
  }
}
```

Langues disponibles: `en`, `es`, `fr`, `de`, etc.

### Modifier les Traductions par Tenant

Utilisez `translationModifier.js`:

```javascript
// tenants/mon-tenant/translationModifier.js

const translationModifier = str => {
  // Remplacer terminologie spécifique
  return str
    .replace(/book/gi, 'document')
    .replace(/library/gi, 'collection')
    .replace(/Toad Reader/g, 'Mon App')
}

export default translationModifier
```

---

## Rollback

### Rollback Applications (EAS Update)

En cas de problème après un push production:

```bash
npm run rollback-apps
```

**Équivalent à**:
```bash
eas update:republish --branch production
```

**Ce que fait la commande**:
- Liste les updates précédents sur la branche production
- Vous demande de sélectionner lequel republier
- Republie cet update (devient le dernier)

**Exemple**:
```
? Which update would you like to republish?
  52.0.4 (current)
❯ 52.0.3
  52.0.2
  52.0.1
```

### Rollback Web

```bash
npm run rollback-web
```

Exécute le script `scripts/rollBackWeb.js` qui:
1. Liste les versions web déployées
2. Permet de sélectionner une version précédente
3. La remet en production

### Alternative: Rollback Manuel

#### Apps
```bash
# Republier un update spécifique par son ID
eas update:republish --group <update-group-id>

# Voir l'historique
eas update:list --branch production
```

#### Web
Restaurer depuis backup serveur ou redéployer une version précédente:
```bash
# Checkout version précédente
git checkout <commit-sha>

# Recharger tenant
npm run change-tenant <tenant>

# Redéployer
npm run push-web-to-production
```

---

## Troubleshooting

### Problème: "This tenant does not exist"

**Cause**: Le tenant n'est pas dans `tenants/`

**Solution**:
```bash
# Lister les tenants disponibles
ls tenants/

# Créer le tenant s'il n'existe pas
npm run change-tenant <nouveau-nom>
# Puis choisir un tenant à copier
```

### Problème: "Invalid tenant dir contents"

**Cause**: Le répertoire tenant manque de fichiers requis (`app.json`, `assets/`, `translationModifier.js`)

**Solution**:
```bash
# Vérifier contenu
ls tenants/<tenant>/

# Recréer depuis un tenant valide
rm -rf tenants/<tenant>
npm run change-tenant <tenant>
# Sélectionner tenant source valide
```

### Problème: Build EAS échoue avec "Invalid bundle identifier"

**Cause**: `bundleIdentifier` (iOS) ou `package` (Android) mal formaté ou en conflit

**Solution**:
```bash
nano tenants/<tenant>/app.json

# Vérifier format:
# iOS: "bundleIdentifier": "com.company.appname"
# Android: "package": "com.company.appname"
# Doivent être uniques et en reverse-DNS

npm run change-tenant <tenant>
```

### Problème: "Did you update version and rerun change-tenant?"

**Cause**: Rappel de sécurité avant build/push

**Solution**:
```bash
# 1. Vérifier version dans tenant
cat tenants/<tenant>/app.json | grep version

# 2. Si besoin, mettre à jour
nano tenants/<tenant>/app.json

# 3. Recharger
npm run change-tenant <tenant>

# 4. Relancer la commande
```

### Problème: Update OTA ne s'applique pas

**Causes possibles**:
- App pas connectée à Internet
- App en premier plan (redémarrage requis)
- Mauvaise branche (staging vs production)

**Solutions**:
```bash
# Vérifier le bon update a été poussé
eas update:list --branch production

# Forcer l'update sur l'app
# → Fermer complètement l'app
# → Relancer
# → Attendre 10-30 secondes
```

### Problème: "No development build found"

**Cause**: Tentative de build development sans configuration

**Solution**:
```bash
# Utiliser un profil valide: staging, beta, ou production
npm run build-android-staging
npm run build-ios-beta
```

### Problème: iOS build échoue - "Missing provisioning profile"

**Cause**: Credentials iOS manquants ou expirés

**Solution**:
```bash
# Regénérer les credentials
eas credentials

# Sélectionner:
# → iOS
# → Provisioning Profile
# → Remove and regenerate

# Rebuild
npm run build-ios-production
```

### Problème: Android build échoue - "Keystore not found"

**Cause**: Keystore Android manquant (généralement premier build)

**Solution**:
```bash
# Laisser EAS générer un nouveau keystore
# Répondre 'y' quand demandé:
# "? Generate a new Android Keystore? (Y/n)"

# Si keystore existant à importer
eas credentials
# → Android
# → Keystore
# → Upload
```

### Problème: "Version code must be incremented"

**Cause**: `versionCode` (Android) ou `buildNumber` (iOS) pas incrémenté

**Solution**:
```bash
nano tenants/<tenant>/app.json

# Android: Incrémenter "versionCode"
# iOS: Incrémenter "buildNumber"

npm run change-tenant <tenant>
npm run build-android-production
```

### Problème: "Module not found" après npm install

**Cause**: Cache ou node_modules corrompus

**Solution**:
```bash
# Nettoyer et réinstaller
rm -rf node_modules
npm cache clean --force
npm install

# Si problème persiste
rm -rf node_modules package-lock.json
npm install
```

### Problème: Expo version mismatch

**Cause**: Version expo-cli différente de celle du projet

**Solution**:
```bash
# Vérifier version projet
cat package.json | grep "expo"

# Mettre à jour CLI globalement
npm install -g expo-cli@latest
npm install -g eas-cli@latest

# Ou utiliser npx pour forcer version locale
npx expo start
```

### Problème: DEV_DATA_ORIGIN_OVERRIDE ne fonctionne pas

**Cause**: IP incorrecte, firewall, ou tenant pas rechargé

**Solution**:
```bash
# 1. Vérifier votre IP locale
ifconfig | grep "inet "

# 2. Mettre à jour dans tenant
nano tenants/<tenant>/app.json
# "DEV_DATA_ORIGIN_OVERRIDE": "192.168.x.x"

# 3. IMPORTANT: Recharger tenant
npm run change-tenant <tenant>

# 4. Redémarrer Metro
npm start

# 5. Vérifier firewall autorise port 8081 et votre backend
```

### Problème: Build prend trop de temps

**Normal**: Les builds EAS prennent 15-30 minutes

**Accélération**:
- Builds Android: Généralement plus rapides
- Builds iOS: Utilisent `resourceClass: "m-medium"` (défini dans `eas.json`)
- Upgrade vers `m-large` possible (coût $$):
  ```json
  {
    "build": {
      "production": {
        "ios": {
          "resourceClass": "m-large"
        }
      }
    }
  }
  ```

### Problème: Push web échoue

**Causes**:
- Credentials serveur manquants
- Scripts `pushWebTo*.js` mal configurés

**Solution**:
```bash
# Vérifier scripts existent
ls scripts/pushWebTo*.js

# Vérifier credentials dans scripts
# (dépend de votre infrastructure serveur)

# Test build local
npx expo export:web
ls web-build/
```

### Support

**Ressources officielles**:
- Expo Docs: https://docs.expo.dev/
- EAS Docs: https://docs.expo.dev/eas/
- Forums Expo: https://forums.expo.dev/

**Logs utiles**:
```bash
# Logs build EAS
eas build:list
eas build:view <build-id>

# Logs runtime app
npx react-native log-android
npx react-native log-ios

# Logs Metro bundler
# Visibles dans le terminal où vous avez lancé `npm start`
```

---

## Résumé des Commandes Principales

### Gestion Tenant
```bash
npm run change-tenant <tenant-name>     # Changer de tenant actif
npm run list-versions                   # Lister versions de tous tenants
```

### Développement
```bash
npm install                             # Installer dépendances
npm start                               # Démarrer Metro (offline)
npm run ios                             # Lancer sur iOS (offline)
npm run android                         # Lancer sur Android (offline)
```

### Builds
```bash
npm run build-android-staging           # Build Android staging
npm run build-android-beta              # Build Android beta
npm run build-android-production        # Build Android production
npm run build-ios-staging               # Build iOS staging
npm run build-ios-beta                  # Build iOS beta
npm run build-ios-production            # Build iOS production
npm run build-apps-production           # Build iOS + Android production
```

### Déploiement Updates
```bash
npm run push-apps-to-staging            # Push apps → staging
npm run push-apps-to-beta               # Push apps → beta
npm run push-apps-to-production         # Push apps → production
npm run push-web-to-staging             # Push web → staging
npm run push-web-to-beta                # Push web → beta
```

### Soumission Stores
```bash
npm run submit-android-production       # Instructions Android
npm run submit-ios-production           # Soumettre iOS automatiquement
```

### Traductions
```bash
npm run translate                       # Extraire strings + JSON→CSV
npm run translate-convert-csv-to-json   # CSV→JSON après édition
npm run translate-convert-json-to-csv   # JSON→CSV pour édition
```

### Rollback
```bash
npm run rollback-apps                   # Rollback apps (EAS update)
npm run rollback-web                    # Rollback web
```

### Multi-Tenants
```bash
npm run push-apps-to-production-all-tenants   # Push apps tous tenants
npm run push-web-to-production-all-tenants    # Push web tous tenants
```

---

## Conclusion

Ce guide couvre l'ensemble du workflow de gestion des tenants, builds et déploiements pour Toad Reader Apps.

**Points clés à retenir**:

1. **Toujours** recharger le tenant après modification: `npm run change-tenant <tenant>`
2. **Toujours** incrémenter versions avant build/soumission
3. **Tester** en staging/beta avant production
4. Les fichiers à la racine (`app.json`, `assets/`, `translationModifier.js`) sont **générés** - ne jamais les éditer directement
5. Seuls les fichiers dans `tenants/` sont versionnés dans git

**Workflow type**:
```
Créer/éditer tenant → change-tenant → tester local → build → tester build → soumettre → update OTA si besoin
```

Pour toute question ou problème non couvert, consultez la documentation Expo officielle ou les ressources indiquées dans la section Support.

Bonne publication! 🚀
