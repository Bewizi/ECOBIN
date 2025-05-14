<script lang="ts" setup>
import { $navigateTo } from "nativescript-vue";
import Home from "~/pages/Home.vue";
import Activity from "~/pages/Activity.vue";
import Requests from "~/pages/Requests.vue";
import { FlexboxLayout } from "@nativescript/core";
import Profile from "@/pages/Profile.vue";

const navigateToPage = (component: any) => {
  $navigateTo(component, {
    animated: true,
    transition: {
      name: "slide",
      duration: 300,
      curve: "easeInOut",
    },
    clearHistory: true,
  });
};
</script>

<template>
  <FlexboxLayout class="px-10 py-3 justify-between h-[100px]" dock="bottom">
    <!-- NAVIGATE TO HOME PAGE -->
    <FlexboxLayout
      class="flex-col items-center justify-center"
      @tap="navigateToPage(Home)"
    >
      <Label class="fa text-[#54B469] mb-1" text="&#xf015;" />
      <Label class="text-center text-lg font-medium text-black" text="Home" />
    </FlexboxLayout>
    <!-- NAVIGATE TO HOME PAGE -->

    <!-- NAVIGATE TO ACTIVITY PAGE -->
    <FlexboxLayout
      class="flex-col items-center justify-center"
      @tap="navigateToPage(Activity)"
    >
      <Label class="fa mb-1 text-[#575E6C]" text="&#xf201;" />
      <Label
        class="text-center text-lg font-medium text-black"
        text=" Activity"
      />
    </FlexboxLayout>
    <!-- NAVIGATE TO ACTIVITY PAGE -->

    <!-- NAVIGATE TO REQUEST PAGE -->
    <FlexboxLayout
      class="flex-col items-center justify-center"
      @tap="navigateToPage(Requests)"
    >
      <Label class="fa mb-1 text-[#575E6C]" text="&#xf1f8; " />
      <Label
        class="text-center text-lg font-medium text-black"
        text=" Requests"
      />
    </FlexboxLayout>
    <!-- NAVIGATE TO REQUEST PAGE -->

    <!-- NAVIGATE TO PROFILE PAGE -->
    <FlexboxLayout
      class="flex-col items-center justify-center"
      @tap="navigateToPage(Profile)"
    >
      <Label class="fa mb-1 text-[#575E6C]" text="&#xf007;" />

      <Label
        class="text-center text-lg font-medium text-black"
        text=" Profile"
      />
    </FlexboxLayout>
    <!-- NAVIGATE TO PROFILE PAGE -->
  </FlexboxLayout>
</template>

<style scoped></style>
