<script setup lang="ts">
import { FlexboxLayout, StackLayout } from "@nativescript/core";
import { $closeModal, $navigateTo } from "nativescript-vue";
import Home from "~/pages/Home.vue";

// defineProps({
//   completeSetup: {
//     type: Function,
//     required: true,
//   },
//   skipForNow: {
//     type: Function,
//     required: true,
//   },
// });

// completeSetup($navigateTo(Home, { clearHistory: true }))

const completeSetup = () => {
  $navigateTo(Home, { clearHistory: true });
  $closeModal();
};

const skipForNow = () => {
  $navigateTo(Home, { clearHistory: true });
  $closeModal();
};
</script>

<template>
  <StackLayout class="px-8 py-10 bg-white rounded-xl w-full">
    <!-- Success Icon -->
    <StackLayout>
      <Label
        fontSize="26"
        text="&#xf00c;"
        width="50"
        height="50"
        class="fa bg-[#54B469] text-white rounded-full text-center mb-6"
      />
    </StackLayout>

    <Label
      fontSize="24"
      text="Success! You're Almost There 🎉"
      class="font-bold text-center mb-4 text-black"
      textWrap="true"
    />

    <Label
      fontSize="14"
      text="Thanks for signing up. Let's set up your account so we can tailor your EcoBin experience to you!"
      class="text-[#585E6D] text-center mb-8"
      textWrap="true"
    />

    <Button
      text="Skip for Now"
      fontSize="14"
      class="bg-transparent font-medium border-2 border-[#54B469] mb-4 rounded-xl text-[#54B469] p-4 shadow-none"
      @tap="skipForNow"
    />

    <Button
      text="Complete Setup"
      fontSize="14"
      class="bg-[#54B469] font-medium text-white p-4 rounded-xl"
      @tap="completeSetup"
    />
  </StackLayout>
</template>
