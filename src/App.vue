<script lang="ts" setup>
import OnboardingSlides from "./components/onboarding/OnboardingSlides.vue";
import { Frame } from "@nativescript/core";
import Home from "./pages/Home.vue";
import Profile from "./pages/Profile.vue";
</script>

<template>
  <Frame>
    <!-- <SignUp /> -->
    <!-- <SuccessModal /> -->
    <!-- <Profile /> -->
    <OnboardingSlides />
  </Frame>
</template>

<style scoped></style>
