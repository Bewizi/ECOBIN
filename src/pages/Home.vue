<script lang="ts" setup>
import { ref } from "nativescript-vue";
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
import { computed } from "nativescript-vue";
import { pickupStore } from "~/services/pickup-store";
// This would typically come from your app's state management or API
// Get the latest pickup or all pending pickups
const latestPickup = computed(() => pickupStore.getLatestPickup());
const pendingPickups = computed(() => pickupStore.getPendingPickups());
const allPickups = computed(() => pickupStore.getAllPickups());
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
              <FlexboxLayout class="items-center space-x-2">
                <Label class="fa" text="&#xf05a;" />
                <Label
                  text="Your next pickup is scheduled for Thursday, 9 AM"
                />
              </FlexboxLayout>
            </StackLayout>
            <!-- Date Selector -->

            <!-- PickupCard -->
            <PickupCard v-if="latestPickup" :pickupData="latestPickup" />
            <!-- PickupCard -->

            <!-- Or show all pending pickups -->
            <!-- <StackLayout class="mt-5">
              <Label
                v-if="pendingPickups.length > 0"
                text="Pending Pickups"
                class="text-lg font-semibold mb-3"
              />
              <PickupCard
                v-for="pickup in pendingPickups"
                :key="pickup.id"
                :pickupData="pickup"
              />
            </StackLayout> -->

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
