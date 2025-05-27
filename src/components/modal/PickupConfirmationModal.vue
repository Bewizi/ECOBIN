<script setup lang="ts">
import { StackLayout } from "@nativescript/core";

import { ref, computed, $closeModal } from "nativescript-vue";
import { navigate } from "~/utils/navigation";
import Home from "~/pages/Home.vue";

const props = defineProps({
  pickupAddress: String,
  pickupDate: Date,
  pickupTime: Date,
  additionalNote: String,
  requestType: String,
});

const formattedDateTime = computed(() => {
  if (props.pickupDate && props.pickupTime) {
    return `${props.pickupDate.toLocaleDateString()}, ${props.pickupTime.toLocaleTimeString(
      [],
      {
        hour: "2-digit",
        minute: "2-digit",
      }
    )}`;
  }
  return "";
});

const navigateToHome = () => {
  navigate(Home, {
    clearHistory: true,
    animated: true,
    transition: {
      name: "slideLeft",
      duration: 300,
      curve: "easeInOut",
    },
  });
  $closeModal();
};
</script>

<template>
  <Page actionBarHidden="true">
    <StackLayout class="modal-container">
      <!-- Handle indicator -->
      <Label class="w-12 h-1 bg-gray-300 rounded-full mb-4 mx-auto" />

      <!-- Title -->
      <Label
        fontSize="28"
        class="font-bold mb-2 text-center text-black"
        text="Pickup Request Confirmed"
      />

      <!-- Message -->
      <Label
        fontSize="16"
        class="mb-6 text-center text-[#585E6D]"
        text="Thanks! Your request has been successfully submitted. Here are the details"
        textWrap="true"
      />

      <!-- Details -->
      <StackLayout class="mb-6">
        <Label
          fontSize="18"
          lineHeight="5"
          class="mb text-black"
          :text="'📍 ' + pickupAddress"
          textWrap="true"
        />
        <Label
          class="text-lg mb-4 text-black"
          :text="'📅 ' + formattedDateTime"
          textWrap="true"
        />
        <Label class="text-lg mb-4 text-black" :text="'🗑️ ' + requestType" />
        <Label
          fontSize="18"
          lineHeight="5"
          v-if="additionalNote"
          class="mb-4 text-black"
          :text="'📝 ' + additionalNote"
        />
      </StackLayout>

      <!-- Action Button -->
      <Button
        class="w-full bg-[#54B469] text-white rounded-lg py-3"
        text="Go to Dashboard"
        @tap="navigateToHome"
      />
    </StackLayout>
  </Page>
</template>

<style scoped>
.modal-container {
  background-color: white;
  padding: 20;
  border-radius: 20;
  width: 100%;
  margin-top: 20;
}
</style>
