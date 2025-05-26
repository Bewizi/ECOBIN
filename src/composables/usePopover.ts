import { ref } from "nativescript-vue";
import { View, getRootLayout } from "@nativescript/core";

export function usePopover() {
  const popoverVisible = ref(false);
  let popoverView: View | null = null;

  const createPopover = (view: View) => {
    popoverView = view;
  };

  const showPopover = (options?: any) => {
    if (!popoverView) return;

    return getRootLayout()
      .open(popoverView, {
        shadeCover: {
          color: "#000",
          opacity: 0.7,
          tapToClose: true,
        },
        animation: {
          enterFrom: {
            opacity: 0,
            translateY: 500,
            duration: 500,
          },
          exitTo: {
            opacity: 0,
            duration: 300,
          },
        },
        ...options,
      })
      .then(() => {
        popoverVisible.value = true;
      });
  };

  const hidePopover = () => {
    if (!popoverView) return;

    return getRootLayout()
      .close(popoverView)
      .then(() => {
        popoverVisible.value = false;
      });
  };

  return {
    createPopover,
    showPopover,
    hidePopover,
    popoverVisible,
  };
}
