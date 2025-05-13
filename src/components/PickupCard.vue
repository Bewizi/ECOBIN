<script setup lang="ts">
import {
  DatePicker,
  FlexboxLayout,
  StackLayout,
  WrapLayout,
} from "@nativescript/core";
import { $navigateTo } from "nativescript-vue";
import Requests from "~/pages/Requests.vue";
import PickUpDetails from "~/views/PickUpDetails.vue";

const handleClick = (component: any) => {
  $navigateTo(component);
};
</script>

<template>
  <StackLayout
    class="bg-white shadow-lg mt-8 p-4 rounded-lg border-2 border-[#E6EAF2]"
  >
    <FlexboxLayout class="justify-between">
      <Label
        class="text-black text-lg font-semibold mb-5"
        text="Upcoming Pickup"
      ></Label>
      <WrapLayout>
        <Label text="Type:" class="text-[#575E6C] font-medium mr-2"></Label>
        <WrapLayout class="bg-[#EFF5F0] px-2 py-1 rounded-xl">
          <Label class="fa mr-2 text-green-500" text="&#xf1b8;"></Label>
          <Label text="Recycle" class="text-black text-sm"></Label>
        </WrapLayout>
      </WrapLayout>
    </FlexboxLayout>

    <FlexboxLayout class="justify-between items-center">
      <WrapLayout>
        <Label class="fa mr-2" text="&#xf073;"></Label>
        <Label
          class="text-[#575E6C] font-medium"
          text="Thursday, 8th May 2025"
        ></Label>
      </WrapLayout>

      <WrapLayout>
        <Label class="fa mr-2" text="&#xf017;"></Label>
        <Label class="text-[#575E6C] font-medium" text="12pm"></Label>
      </WrapLayout>
    </FlexboxLayout>

    <StackLayout class="bg-[#EFF5F0] p-2 rounded-md text-[#1D3D23] mt-5">
      <FlexboxLayout class="items-center">
        <Label class="fa mr-2" text="&#xf3c5;" />
        <Label text="10 block, Majek Estate, Ibafo. Lagos state Nigeria" />
      </FlexboxLayout>
    </StackLayout>

    <Button
      @tap="handleClick(PickUpDetails)"
      text="View Details"
      class="bg-[#54B469] text-white font-semibold rounded-xl mt-5"
    ></Button>
  </StackLayout>
</template>

<style scoped></style>
