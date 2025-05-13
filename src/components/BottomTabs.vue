<script setup lang="ts">
import { $navigateTo } from "nativescript-vue";
import Home from "~/pages/Home.vue";
import Activity from "~/pages/Activity.vue";
import Requests from "~/pages/Requests.vue";
// import { FlexboxLayout, StackLayout } from "@nativescript/core";

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
  <FlexboxLayout dock="bottom" class="px-10 py-3 justify-between h-[100px]">
    <FlexboxLayout class="flex-col items-center justify-center">
      <Label class="fa text-[#54B469] mb-1" text="&#xf015;" />
      <Label
        @tap="navigateToPage(Home)"
        text="Home"
        class="text-center text-lg font-medium text-black"
      />
    </FlexboxLayout>

    <FlexboxLayout class="flex-col items-center justify-center">
      <Label class="fa mb-1 text-[#575E6C]" text="&#xf201;" />
      <Label
        @tap="navigateToPage(Activity)"
        text=" Activity"
        class="text-center text-lg font-medium text-black"
      />
    </FlexboxLayout>
    <FlexboxLayout
      class="flex-col items-center justify-center"
      @tap="navigateToPage(Requests)"
    >
      <Label class="fa mb-1 text-[#575E6C]" text="&#xf1f8; " />
      <Label
        text=" Requests"
        class="text-center text-lg font-medium text-black"
      />
    </FlexboxLayout>
    <FlexboxLayout class="flex-col items-center justify-center">
      <Label class="fa mb-1 text-[#575E6C]" text="&#xf007;" />

      <Label
        text=" Profile"
        class="text-center text-lg font-medium text-black"
      />
    </FlexboxLayout>
  </FlexboxLayout>
</template>

<style scoped></style>
