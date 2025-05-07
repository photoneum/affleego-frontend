import { isAndroid, isIOS } from "./operatingSystems";

const openMailApp = () => {
  // Different platforms need different approaches

  if (isAndroid()) {
    // For Android
    // window.location.href = "intent://#Intent;scheme=googlegmail;package=com.google.android.gm;end";
    // window.location.href = "gmailapp://";
    // window.location.href = "googlegmail://";
    window.location.href = "https://mail.google.com/";
  } else if (isIOS()) {
    // For iOS
    window.location.href = "message://";
  } else {
    // Fallback for desktop
    window.location.href = "mailto:";
  }
};

export default openMailApp;
