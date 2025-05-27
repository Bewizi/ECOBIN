import { $showModal } from "nativescript-vue";
import PickupConfirmationModal from "~/components/modal/PickupConfirmationModal.vue";
import { PickupFormData } from "~/types";

/**
 * Opens a modal for pickup confirmation with the provided form data.
 * The modal displays the pickup address, date, time, and any additional notes.
 *
 *
 */

export const pickupModal = (formData: PickupFormData) => {
  $showModal(PickupConfirmationModal, {
    props: {
      pickupAddress: formData.pickupAddress,
      pickupDate: formData.pickupDate,
      pickupTime: formData.pickupTime,
      additionalNote: formData.additionalNote,
      requestType: formData.requestType,
    },
    fullscreen: true,
    animated: true,
    stretched: true,
    context: {
      shadeCover: {
        colors: "#000",
        opacity: 0.7,
        tapToCLose: true,
      },
      animation: {
        entrerFrom: {
          translateY: 1000,
          duration: 300,
        },
        exitTo: {
          translateY: 1000,
          duration: 300,
        },
      },
    },
  });
};
