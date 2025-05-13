<script setup lang="ts">
import {
  DatePicker,
  FlexboxLayout,
  FormattedString,
  Label,
  Span,
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
    <FlexboxLayout class="justify-between items-center mb-5">
      <StackLayout>
        <Label
          class="text-black text-lg font-semibold"
          text="Upcoming Pickup"
          fontSize="20"
        ></Label>
      </StackLayout>
      <StackLayout orientation="horizontal">
        <Label
          text="Type:"
          fontSize="16"
          class="text-[#575E6C] font-medium mr-2"
        ></Label>
        <Label class="bg-[#EFF5F0] rounded-xl text-center py-2" width="100">
          <FormattedString>
            <Span class="fa text-green-500" text="&#xf1b8;" />
            <Span text=" " />
            <Span text=" " />
            <Span text="Houshold" class="text-black text-sm" />
          </FormattedString>
        </Label>
      </StackLayout>
    </FlexboxLayout>

    <FlexboxLayout class="justify-between items-center">
      <Label fontSize="14">
        <FormattedString>
          <Span class="fa" text="&#xf073;" />
          <Span text=" " />
          <Span text=" " />
          <Span
            class="text-[#575E6C] font-medium"
            text="Thursday, 8th May 2025"
          />
        </FormattedString>
      </Label>

      <StackLayout>
        <Label fontSize="14">
          <FormattedString>
            <Span class="fa" text="&#xf017;" />
            <Span text=" " />
            <Span text=" " />
            <Span class="text-[#575E6C] font-medium" text="12pm" />
          </FormattedString>
        </Label>
      </StackLayout>
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
