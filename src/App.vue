<script lang="ts" setup>
import OnboardingSlides from "./components/onboarding/OnboardingSlides.vue";
import { Frame, RootLayout } from "@nativescript/core";
import Setup from "./pages/Setup.vue";
import Profile from "./pages/Profile.vue";
import Activity from "./pages/Activity.vue";
import Requests from "./pages/Requests.vue";
</script>

<template>
  <RootLayout>
    <Frame>
      <Requests />
    </Frame>
  </RootLayout>
</template>

<style scoped></style>
