import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CookieConsentBannerProps, CookieConsentState } from './CookieConsentBanner.types';

const { height } = Dimensions.get('window');

const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({
  message = "We use cookies to enhance your browsing experience and analyze our traffic. By clicking 'Accept', you consent to our use of cookies.",
  acceptButtonText = 'Accept',
  declineButtonText = 'Decline',
  settingsButtonText = 'Settings',
  onAccept,
  onDecline,
  onSettings,
  containerStyle,
  messageStyle,
  buttonStyle,
  buttonTextStyle,
  position = 'bottom',
  backgroundColor = '#2c3e50',
  textColor = '#ffffff',
  acceptButtonColor = '#27ae60',
  declineButtonColor = '#e74c3c',
  settingsButtonColor = '#95a5a6',
  showDeclineButton = true,
  showSettingsButton = false,
  storageKey = 'cookie_consent',
  autoHide = true,
}) => {
  const [state, setState] = useState<CookieConsentState>({
    visible: false,
    consent: null,
  });

  const [slideAnim] = useState(
    new Animated.Value(position === 'bottom' ? height : -height)
  );

  useEffect(() => {
    checkConsentStatus();
  }, []);

  useEffect(() => {
    if (state.visible) {
      showBanner();
    } else {
      hideBanner();
    }
  }, [state.visible]);

  const checkConsentStatus = async () => {
    try {
      const consentStatus = await AsyncStorage.getItem(storageKey);
      if (!consentStatus) {
        setState({ visible: true, consent: 'pending' });
      } else {
        setState({
          visible: false,
          consent: consentStatus as 'accepted' | 'declined',
        });
      }
    } catch (error) {
      console.error('Error checking consent status:', error);
      setState({ visible: true, consent: 'pending' });
    }
  };

  const showBanner = () => {
    Animated.spring(slideAnim, {
      toValue: 0,
      useNativeDriver: true,
      tension: 65,
      friction: 11,
    }).start();
  };

  const hideBanner = () => {
    Animated.timing(slideAnim, {
      toValue: position === 'bottom' ? height : -height,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const saveConsent = async (consent: 'accepted' | 'declined') => {
    try {
      await AsyncStorage.setItem(storageKey, consent);
      if (autoHide) {
        setState({ visible: false, consent });
      }
    } catch (error) {
      console.error('Error saving consent:', error);
    }
  };

  const handleAccept = () => {
    saveConsent('accepted');
    onAccept?.();
  };

  const handleDecline = () => {
    saveConsent('declined');
    onDecline?.();
  };

  const handleSettings = () => {
    onSettings?.();
  };

  if (!state.visible) {
    return null;
  }

  const positionStyle = position === 'bottom' ? styles.bottom : styles.top;

  return (
    <Animated.View
      style={[
        styles.container,
        positionStyle,
        { backgroundColor, transform: [{ translateY: slideAnim }] },
        containerStyle,
      ]}
    >
      <View style={styles.content}>
        <Text style={[styles.message, { color: textColor }, messageStyle]}>
          {message}
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              styles.acceptButton,
              { backgroundColor: acceptButtonColor },
              buttonStyle,
            ]}
            onPress={handleAccept}
            activeOpacity={0.8}
          >
            <Text style={[styles.buttonText, buttonTextStyle]}>
              {acceptButtonText}
            </Text>
          </TouchableOpacity>

          {showDeclineButton && (
            <TouchableOpacity
              style={[
                styles.button,
                styles.declineButton,
                { backgroundColor: declineButtonColor },
                buttonStyle,
              ]}
              onPress={handleDecline}
              activeOpacity={0.8}
            >
              <Text style={[styles.buttonText, buttonTextStyle]}>
                {declineButtonText}
              </Text>
            </TouchableOpacity>
          )}

          {showSettingsButton && (
            <TouchableOpacity
              style={[
                styles.button,
                styles.settingsButton,
                { backgroundColor: settingsButtonColor },
                buttonStyle,
              ]}
              onPress={handleSettings}
              activeOpacity={0.8}
            >
              <Text style={[styles.buttonText, buttonTextStyle]}>
                {settingsButtonText}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  bottom: {
    bottom: 0,
    paddingBottom: Platform.OS === 'ios' ? 40 : 20,
  },
  top: {
    top: 0,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
  },
  content: {
    flex: 1,
  },
  message: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 10,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  acceptButton: {
    flex: 1,
  },
  declineButton: {
    flex: 1,
  },
  settingsButton: {
    flex: 1,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default CookieConsentBanner;
