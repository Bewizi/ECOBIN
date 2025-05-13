<script setup>
import {
  Button,
  FlexboxLayout,
  FormattedString,
  Span,
  StackLayout,
} from "@nativescript/core";
import { $navigateTo } from "nativescript-vue";
import RequestPickupViews from "~/views/RequestPickupViews.vue";

const navigateToView = (component) => {
  $navigateTo(component);
};
</script>

<template>
  <StackLayout class="mt-10">
    <FlexboxLayout class="justify-between items-center mb-5">
      <StackLayout>
        <Button
          class="bg-[#F6F7F9] p-4 rounded-xl"
          width="200"
          @tap="navigateToView(RequestPickupViews)"
        >
          <FormattedString>
            <Span class="fa text-[#2A9B4A] text-xl" text="&#xf1f8;" />
            <Span text="   " />
            <Span text="   " />
            <Span
              class="font-medium text-lg text-[#575E6C]"
              text="Request Pickup"
            />
          </FormattedString>
        </Button>
      </StackLayout>

      <StackLayout>
        <Button class="bg-[#F6F7F9] p-4 rounded-xl" width="200">
          <FormattedString>
            <Span class="fa text-[#2A9B4A] text-xl" text="&#xf073;"></Span>
            <Span text="   " />
            <Span text="   " />
            <Span
              class="font-medium text-lg text-[#575E6C]"
              text="Schedule Pickup"
            />
          </FormattedString>
        </Button>
      </StackLayout>
    </FlexboxLayout>

    <FlexboxLayout class="items-center justify-between">
      <StackLayout>
        <Button class="bg-[#F6F7F9] p-4 rounded-xl" width="200">
          <FormattedString>
            <Span class="fa text-[#2A9B4A] text-xl" text="&#xf3c5;"></Span>
            <Span text="  " />
            <Span text="  " />
            <Span
              class="font-medium text-lg text-[#575E6C]"
              text="Dropoff Points"
            />
          </FormattedString>
        </Button>
      </StackLayout>

      <StackLayout>
        <Button class="bg-[#F6F7F9] p-4 rounded-xl" width="200">
          <FormattedString>
            <Span class="fa text-[#2A9B4A] text-xl" text="&#xf1da;"></Span>
            <Span text="  " />
            <Span text="  " />
            <Span
              class="font-medium text-lg text-[#575E6C]"
              text="View History"
            />
          </FormattedString>
        </Button>
      </StackLayout>
    </FlexboxLayout>
  </StackLayout>
</template>

<style lang="scss" scoped></style>
