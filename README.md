# Cookie Consent Banner for React Native

A customizable, animated cookie consent banner component for React Native applications with TypeScript support.

## Features

- 🎨 Fully customizable styling
- 📱 Responsive design for all screen sizes
- 🎭 Smooth animations (slide in/out)
- 💾 Persistent storage using AsyncStorage
- 📍 Configurable position (top/bottom)
- 🎯 TypeScript support with full type definitions
- ⚙️ Optional settings/customize button
- 🔄 Platform-specific shadows and styling
- 🚀 Easy to integrate

## Installation

### 1. Install Dependencies

This component requires `@react-native-async-storage/async-storage`:

```bash
npm install @react-native-async-storage/async-storage
```

or

```bash
yarn add @react-native-async-storage/async-storage
```

### 2. iOS Setup (if using iOS)

```bash
cd ios && pod install && cd ..
```

### 3. Copy Component Files

Copy the following files to your project:
- `CookieConsentBanner.tsx`
- `CookieConsentBanner.types.ts`

## Basic Usage

```tsx
import React from 'react';
import { SafeAreaView } from 'react-native';
import CookieConsentBanner from './CookieConsentBanner';

const App = () => {
  const handleAccept = () => {
    console.log('User accepted cookies');
    // Initialize your analytics or tracking here
  };

  const handleDecline = () => {
    console.log('User declined cookies');
    // Handle declined cookies
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Your app content */}

      <CookieConsentBanner
        onAccept={handleAccept}
        onDecline={handleDecline}
      />
    </SafeAreaView>
  );
};

export default App;
```

## Advanced Usage

```tsx
<CookieConsentBanner
  // Custom message
  message="This website uses cookies to ensure you get the best experience. Learn more about our privacy policy."

  // Button texts
  acceptButtonText="I Agree"
  declineButtonText="No Thanks"
  settingsButtonText="Customize"

  // Show/hide buttons
  showDeclineButton={true}
  showSettingsButton={true}

  // Position
  position="bottom" // or "top"

  // Colors
  backgroundColor="#1a1a1a"
  textColor="#ffffff"
  acceptButtonColor="#4CAF50"
  declineButtonColor="#f44336"
  settingsButtonColor="#2196F3"

  // Callbacks
  onAccept={handleAccept}
  onDecline={handleDecline}
  onSettings={handleSettings}

  // Custom styling
  containerStyle={{
    borderTopWidth: 1,
    borderTopColor: '#333',
  }}
  messageStyle={{
    fontSize: 13,
    fontWeight: '400',
  }}
  buttonStyle={{
    borderRadius: 20,
  }}
  buttonTextStyle={{
    fontWeight: 'bold',
  }}

  // Storage
  storageKey="my_cookie_consent"
  autoHide={true}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `message` | `string` | Default cookie message | The message to display in the banner |
| `acceptButtonText` | `string` | `"Accept"` | Text for the accept button |
| `declineButtonText` | `string` | `"Decline"` | Text for the decline button |
| `settingsButtonText` | `string` | `"Settings"` | Text for the settings button |
| `onAccept` | `() => void` | `undefined` | Callback when user accepts cookies |
| `onDecline` | `() => void` | `undefined` | Callback when user declines cookies |
| `onSettings` | `() => void` | `undefined` | Callback when user clicks settings |
| `containerStyle` | `object` | `undefined` | Custom styles for the banner container |
| `messageStyle` | `object` | `undefined` | Custom styles for the message text |
| `buttonStyle` | `object` | `undefined` | Custom styles for buttons |
| `buttonTextStyle` | `object` | `undefined` | Custom styles for button text |
| `position` | `'top' \| 'bottom'` | `'bottom'` | Position of the banner |
| `backgroundColor` | `string` | `"#2c3e50"` | Background color of the banner |
| `textColor` | `string` | `"#ffffff"` | Text color |
| `acceptButtonColor` | `string` | `"#27ae60"` | Accept button color |
| `declineButtonColor` | `string` | `"#e74c3c"` | Decline button color |
| `settingsButtonColor` | `string` | `"#95a5a6"` | Settings button color |
| `showDeclineButton` | `boolean` | `true` | Show/hide decline button |
| `showSettingsButton` | `boolean` | `false` | Show/hide settings button |
| `storageKey` | `string` | `"cookie_consent"` | AsyncStorage key for consent status |
| `autoHide` | `boolean` | `true` | Auto-hide after user interaction |

## How It Works

1. **First Launch**: The banner automatically appears when the app is opened for the first time
2. **User Interaction**: User can accept, decline, or customize cookie preferences
3. **Persistent Storage**: The user's choice is saved in AsyncStorage
4. **Subsequent Launches**: The banner won't appear again if consent has been given/declined
5. **Animated**: Smoothly slides in from top or bottom with spring animation

## Resetting Consent

To reset the consent (for testing or user request):

```tsx
import AsyncStorage from '@react-native-async-storage/async-storage';

const resetConsent = async () => {
  await AsyncStorage.removeItem('cookie_consent');
  // Reload or restart the app
};
```

## TypeScript Support

The component includes full TypeScript definitions in `CookieConsentBanner.types.ts`. All props are properly typed with JSDoc comments for better IDE support.

## Platform Support

- ✅ iOS
- ✅ Android
- ✅ Web (React Native Web)

## Customization Examples

### Dark Theme
```tsx
<CookieConsentBanner
  backgroundColor="#000000"
  textColor="#ffffff"
  acceptButtonColor="#00ff00"
  declineButtonColor="#ff0000"
/>
```

### Minimal Style
```tsx
<CookieConsentBanner
  showDeclineButton={false}
  showSettingsButton={false}
  acceptButtonText="Got it!"
/>
```

### Top Position
```tsx
<CookieConsentBanner
  position="top"
/>
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.