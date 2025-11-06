export interface CookieConsentBannerProps {
  /**
   * The message to display in the banner
   * @default "We use cookies to enhance your browsing experience and analyze our traffic. By clicking 'Accept', you consent to our use of cookies."
   */
  message?: string;

  /**
   * Text for the accept button
   * @default "Accept"
   */
  acceptButtonText?: string;

  /**
   * Text for the decline button
   * @default "Decline"
   */
  declineButtonText?: string;

  /**
   * Text for the settings/customize button (optional)
   */
  settingsButtonText?: string;

  /**
   * Callback when user accepts cookies
   */
  onAccept?: () => void;

  /**
   * Callback when user declines cookies
   */
  onDecline?: () => void;

  /**
   * Callback when user clicks settings/customize
   */
  onSettings?: () => void;

  /**
   * Custom styles for the banner container
   */
  containerStyle?: object;

  /**
   * Custom styles for the message text
   */
  messageStyle?: object;

  /**
   * Custom styles for buttons
   */
  buttonStyle?: object;

  /**
   * Custom styles for button text
   */
  buttonTextStyle?: object;

  /**
   * Position of the banner
   * @default "bottom"
   */
  position?: 'top' | 'bottom';

  /**
   * Background color of the banner
   * @default "#2c3e50"
   */
  backgroundColor?: string;

  /**
   * Text color
   * @default "#ffffff"
   */
  textColor?: string;

  /**
   * Accept button color
   * @default "#27ae60"
   */
  acceptButtonColor?: string;

  /**
   * Decline button color
   * @default "#e74c3c"
   */
  declineButtonColor?: string;

  /**
   * Settings button color
   * @default "#95a5a6"
   */
  settingsButtonColor?: string;

  /**
   * Show decline button
   * @default true
   */
  showDeclineButton?: boolean;

  /**
   * Show settings button
   * @default false
   */
  showSettingsButton?: boolean;

  /**
   * AsyncStorage key to store consent status
   * @default "cookie_consent"
   */
  storageKey?: string;

  /**
   * Auto-hide after user interaction
   * @default true
   */
  autoHide?: boolean;
}

export interface CookieConsentState {
  visible: boolean;
  consent: 'accepted' | 'declined' | 'pending' | null;
}
