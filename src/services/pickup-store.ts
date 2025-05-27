import { ref, reactive } from "nativescript-vue";

export interface PickupData {
  id?: string;
  pickupAddress: string;
  pickupDate: Date;
  pickupTime: Date;
  additionalNote: string;
  requestType: string;
  status: "pending" | "confirmed" | "completed";
  createdAt: Date;
}

// Global reactive state for pickup requests
export const pickupStore = reactive({
  pickups: [] as PickupData[],

  // Add new pickup
  addPickup(pickup: Omit<PickupData, "id" | "status" | "createdAt">) {
    const newPickup: PickupData = {
      ...pickup,
      id: Date.now().toString(),
      status: "pending",
      createdAt: new Date(),
    };

    this.pickups.push(newPickup);
    return newPickup;
  },

  // Get all pickups
  getAllPickups() {
    return this.pickups;
  },

  // Get latest pickup
  getLatestPickup() {
    return this.pickups.length > 0
      ? this.pickups[this.pickups.length - 1]
      : null;
  },

  // Get pending pickups
  getPendingPickups() {
    return this.pickups.filter((pickup) => pickup.status === "pending");
  },
});
