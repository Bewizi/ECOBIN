<script lang="ts" setup>
import OnboardingSlides from "./components/onboarding/OnboardingSlides.vue";
import { Frame, RootLayout } from "@nativescript/core";
</script>

<template>
  <RootLayout>
    <Frame>
      <OnboardingSlides />
    </Frame>
  </RootLayout>
</template>

<style scoped></style>
