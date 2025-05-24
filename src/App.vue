<script lang="ts" setup>
import OnboardingSlides from "./components/onboarding/OnboardingSlides.vue";
import { Frame } from "@nativescript/core";
import Setup from "./pages/Setup.vue";
import Profile from "./pages/Profile.vue";
import Activity from "./pages/Activity.vue";
</script>

<template>
  <Frame>
    <Activity />
  </Frame>
</template>

<style scoped></style>
