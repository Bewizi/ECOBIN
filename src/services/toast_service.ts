// ~/services/toast.service.ts
import { SnackBar } from "@nativescript-community/ui-material-snackbar";

const snackbar = new SnackBar();

export const Toast = {
  showSuccess(message: string) {
    return snackbar.action({
      message,
      backgroundColor: "#54B469", // Your app's primary color
      textColor: "white",
      actionText: "OK",
      hideDelay: 3000,
    });
  },

  showError(message: string) {
    return snackbar.action({
      message,
      backgroundColor: "#FF5252", // Error color
      textColor: "white",
      actionText: "OK",
      hideDelay: 4000,
    });
  },
};
