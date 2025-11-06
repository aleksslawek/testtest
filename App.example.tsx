import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';
import CookieConsentBanner from './CookieConsentBanner';

/**
 * Example App showing how to use the CookieConsentBanner component
 */
const App: React.FC = () => {
  const handleAccept = () => {
    console.log('User accepted cookies');
    // Add your analytics initialization here
    // Example: Analytics.initialize();
  };

  const handleDecline = () => {
    console.log('User declined cookies');
    // Handle declined cookies (e.g., disable analytics)
  };

  const handleSettings = () => {
    console.log('User wants to customize cookie settings');
    // Open a modal or navigate to settings screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <Text style={styles.title}>Cookie Consent Banner Example</Text>
        <Text style={styles.description}>
          Scroll down to see the cookie consent banner at the bottom of the screen.
        </Text>
      </View>

      {/* Basic Usage */}
      <CookieConsentBanner onAccept={handleAccept} onDecline={handleDecline} />

      {/* Advanced Usage with Custom Styling */}
      {/*
      <CookieConsentBanner
        message="This website uses cookies to ensure you get the best experience on our website. Learn more about our privacy policy."
        acceptButtonText="I Agree"
        declineButtonText="No Thanks"
        settingsButtonText="Customize"
        showSettingsButton={true}
        position="bottom"
        backgroundColor="#1a1a1a"
        textColor="#ffffff"
        acceptButtonColor="#4CAF50"
        declineButtonColor="#f44336"
        settingsButtonColor="#2196F3"
        onAccept={handleAccept}
        onDecline={handleDecline}
        onSettings={handleSettings}
        containerStyle={{
          borderTopWidth: 1,
          borderTopColor: '#333',
        }}
        messageStyle={{
          fontSize: 13,
          fontWeight: '400',
        }}
      />
      */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    lineHeight: 24,
  },
});

export default App;
