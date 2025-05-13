<script setup lang="ts">
import { $navigateTo } from "nativescript-vue";
import Home from "~/pages/Home.vue";

const completeSetup = () => {
  $navigateTo(Home, { clearHistory: true });
};

const skipForNow = () => {
  $navigateTo(Home, { clearHistory: true });
};
</script>

<template>
  <Page actionBarHidden="true">
    <StackLayout class="p-8">
      <!-- Success Icon -->
      <Label text="✓" class="text-[#54B469] text-6xl text-center mb-6" />

      <Label
        text="Success! You're Almost There 🎉"
        class="text-3xl font-bold text-center mb-4"
        textWrap="true"
      />

      <Label
        text="Thanks for signing up. Let's set up your account so we can tailor your EcoBin experience to you!"
        class="text-gray-600 text-center mb-8"
        textWrap="true"
      />

      <Button
        text="Complete Setup"
        class="bg-[#54B469] text-white p-4 rounded mb-4"
        @tap="completeSetup"
      />

      <Button
        text="Skip for Now"
        class="bg-transparent text-[#54B469] p-4"
        @tap="skipForNow"
      />
    </StackLayout>
  </Page>
</template>
