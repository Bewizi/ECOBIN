<script lang="ts" setup>
import {
  DockLayout,
  FlexboxLayout,
  FormattedString,
  ScrollView,
} from "@nativescript/core";
import BottomTabs from "~/components/BottomTabs.vue";
import DateSelector from "~/components/DateSelector.vue";
import PickupCard from "~/components/PickupCard.vue";
import QuickActions from "~/components/QuickActions.vue";
import WasteActivity from "~/components/WasteActivity.vue";
</script>

<template>
  <Page actionBarHidden="true">
    <DockLayout stretchLastChild="true">
      <BottomTabs />

      <ScrollView>
        <StackLayout class="px-6 pt-10">
          <!-- Use FlexboxLayout for horizontal alignment -->
          <FlexboxLayout justifyContent="space-between" alignItems="center">
            <!-- Left side: greeting texts -->
            <StackLayout>
              <Label
                fontSize="28"
                text="Good Morning,"
                textWrap="true"
                class="mb-2 font-bold text-black"
              />
              <Label
                fontSize="16"
                lineHeight="5"
                textWrap="true"
                class="text-gray-600"
              >
                <FormattedString>
                  <Span text="It’s sunny 🌞️, perfect day to take\n" />
                  <Span text="out your bin!" />
                </FormattedString>
              </Label>
            </StackLayout>

            <!-- Right side: profile -->
            <Label text="profile" class="text-2xl" />
          </FlexboxLayout>

          <!-- Date Selector -->
          <StackLayout class="rounded-md mt-5">
            <Label text="Next Pickup" class="text-black font-medium text-xl" />

            <DateSelector />

            <StackLayout class="bg-[#EFF5F0] p-2 rounded-md text-[#1D3D23]">
              <FlexboxLayout class="items-center gap-2">
                <Label class="fa mr-2" text="&#xf05a;" />
                <Label
                  text="Your next pickup is scheduled for Thursday, 9 AM"
                />
              </FlexboxLayout>
            </StackLayout>
            <!-- Date Selector -->

            <!-- PickupCard -->
            <PickupCard />
            <!-- PickupCard -->

            <!-- QuickActions -->
            <QuickActions />
            <!-- QuickActions -->

            <WasteActivity />
          </StackLayout>
        </StackLayout>
      </ScrollView>
    </DockLayout>
  </Page>
</template>

<style>
/* .info {
    font-size: 20;
  } */
</style>
