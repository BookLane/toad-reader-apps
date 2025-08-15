# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Setup

### Initial Setup
1. `npm i` (requires Node 14)
2. Configure tenant: `npm run change-tenant toadreader`
3. Update server IP in `tenants/toadreader/app.json` → `DEV_DATA_ORIGIN_OVERRIDE`

### Development Commands
- `npm start` - Start Expo development server (offline mode)
- `npm run android` - Start Android development (offline)
- `npm run ios` - Start iOS development (offline)

### Build Commands
- `npm run build-android-staging` - Build Android staging
- `npm run build-android-beta` - Build Android beta  
- `npm run build-android-production` - Build Android production
- `npm run build-ios-staging` - Build iOS staging
- `npm run build-ios-beta` - Build iOS beta
- `npm run build-ios-production` - Build iOS production
- `npm run build-apps-production` - Build both platforms for production

### Deployment Commands
- `npm run push-apps-to-staging` - Deploy app updates to staging
- `npm run push-apps-to-beta` - Deploy app updates to beta
- `npm run push-apps-to-production` - Deploy app updates to production
- `npm run push-web-to-staging` - Deploy web build to staging
- `npm run push-web-to-beta` - Deploy web build to beta

### Translation Commands
- `npm run translate` - Generate translation files
- `npm run translate-convert-csv-to-json` - Convert CSV translations to JSON
- `npm run translate-convert-json-to-csv` - Convert JSON translations to CSV

## Architecture

### Multi-Tenant System
This app uses a tenant-based configuration system:
- Base configuration in root directory
- Tenant-specific configs in `tenants/<tenant-name>/`
- Use `npm run change-tenant <tenant>` to switch active tenant
- Script copies tenant files (app.json, assets, translationModifier.js) to root

### Technology Stack
- **Expo 52** - React Native framework with new architecture enabled
- **Redux + Redux Persist** - State management with persistence
- **Eva Design System** - UI component library with custom theming
- **WebView-based EPUB reader** - Core reading functionality
- **Multi-platform** - iOS, Android, and Web support

### Component Architecture
```
src/components/
├── basic/          # Reusable UI components
├── major/          # Complex feature components  
├── screens/        # Top-level screen components
└── routers/        # Platform-specific routing
```

### State Management
- **Redux store** with domain-specific reducers in `src/redux/reducers/`
- **Custom middleware** for sync operations (`patchMiddleware`)
- **Persistence** via Redux Persist with AsyncStorage
- **Custom hooks** in `src/hooks/` for component state logic

### Key Features
- **EPUB reading** with highlights, notes, and annotations
- **Multi-language support** via inline-i18n
- **Classroom/educational tools** for instructors and students
- **Audiobook support** with background audio
- **Offline functionality** with local storage
- **Analytics** via Amplitude and Sentry error tracking

## Important Development Notes

### Before Building/Deploying
- Always update version number in tenant's app.json
- Run `npm run change-tenant <tenant>` after version updates
- Confirm updates when prompted by build/deploy scripts

### Platform-Specific Code
- Use `.web.js` extensions for web-specific implementations
- Platform checks via `Platform.OS` for conditional logic
- WebView vs web DOM differences handled in major components

### Tenant Configuration
- Each tenant has separate branding, features, and server endpoints
- `IDPS` object in app.json defines authentication and feature flags
- `DEV_DATA_ORIGIN_OVERRIDE` must be updated for local development

### State Structure
Key Redux state slices:
- `books` - EPUB metadata and content
- `library` - User's book collection
- `currentBookId` - Active reading session
- `highlights` - User annotations and notes
- `userDataByBookId` - Reading progress and bookmarks
- `displaySettings` - Reader preferences
- `accounts` - User authentication state

### Custom Utilities
- `src/utils/toolbox.js` - Cross-platform helper functions
- `src/utils/syncUserData.js` - Server synchronization
- `src/utils/epubDownloader.js` - EPUB file management
- `src/utils/parseEpub.js` - EPUB content parsing

## Testing

No test framework is currently configured. Consider adding Jest and React Native Testing Library for component testing.