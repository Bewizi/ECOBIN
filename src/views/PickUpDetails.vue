<script setup lang="ts">
import { computed } from "nativescript-vue";
import { pickupStore } from "~/services/pickup-store";
import PickupCard from "~/components/PickupCard.vue";
import {
  FlexboxLayout,
  FormattedString,
  Label,
  Page,
  StackLayout,
} from "@nativescript/core";

const allPickups = computed(() => pickupStore.getAllPickups());
</script>

<template>
  <Page actionBarHidden="true">
    <StackLayout class="px-5 pt-10">
      <FlexboxLayout class="justify-between items-center mb-5">
        <Label fontSize="24" class="font-bold text-black" text="Waste Pickup" />

        <!-- Edit button -->
        <Label fontSize="16" class="text-[#575E6C]">
          <FormattedString>
            <Span class="fa" text="&#xf304;" />
            <Span text="  " />
            <Span text="  " />
            <Span text="Edit" />
          </FormattedString>
        </Label>
        <!-- Edit button -->
      </FlexboxLayout>
      <StackLayout class="border-2 border-gray-600 px-6 rounded-lg py-4">
        <!-- Address -->
        <FlexboxLayout className="justify-between items-center mb-5">
          <Label
            fontSize="20"
            class="text-[#575E6C] font-medium"
            textWrap="true"
            text="Address:"
          />

          <StackLayout>
            <Label
              fontSize="14"
              class="text-black"
              textWrap="true"
              textAlignment="right"
            >
              <FormattedString>
                <Span text="03, Adekunmi Estate,\n" />
                <Span text="Ojota, Lagos" />
              </FormattedString>
            </Label>
          </StackLayout>
        </FlexboxLayout>
        <!-- Address -->

        <!-- Date -->
        <FlexboxLayout className="justify-between items-center mb-5">
          <Label
            fontSize="20"
            class="text-[#575E6C] font-medium"
            text="Date:"
          />

          <StackLayout>
            <Label
              fontSize="14"
              class="text-black"
              textWrap="true"
              textAlignment="right"
            >
              <FormattedString>
                <Span text="10th May, 2025." />
              </FormattedString>
            </Label>
          </StackLayout>
        </FlexboxLayout>
        <!-- Date -->

        <!-- Time -->
        <FlexboxLayout className="justify-between items-center mb-5">
          <Label
            fontSize="20"
            class="text-[#575E6C] font-medium"
            text="Time:"
          />

          <StackLayout>
            <Label
              fontSize="14"
              class="text-black"
              textWrap="true"
              textAlignment="right"
            >
              <FormattedString>
                <Span class="fa" text="&#xf017;" />
                <Span text=" " />
                <Span text=" " />
                <Span text="12pm" />
              </FormattedString>
            </Label>
          </StackLayout>
        </FlexboxLayout>
        <!-- Time -->

        <!-- Waste Type -->
        <FlexboxLayout className="justify-between items-center">
          <Label
            fontSize="20"
            class="text-[#575E6C] font-medium"
            text="Waste Type:"
          />

          <StackLayout>
            <Label
              fontSize="14"
              class="text-black"
              textWrap="true"
              textAlignment="right"
            >
              <FormattedString>
                <Span text="Household Waste" />
              </FormattedString>
            </Label>
          </StackLayout>
        </FlexboxLayout>
      </StackLayout>
      <!-- Waste Type -->

      <!-- Or show all  pickups -->
      <StackLayout>
        <Label
          fontSize="20"
          v-if="allPickups.length > 0"
          text="All Pickups"
          class="font-semibold mb-3 text-black"
        />
        <PickupCard
          v-for="pickup in allPickups"
          :key="pickup.id"
          :pickupData="pickup"
        />
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<style scoped></style>
