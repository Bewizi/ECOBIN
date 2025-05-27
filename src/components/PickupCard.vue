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
import { PickupData } from "~/services/pickup-store";
import PickUpDetails from "~/views/PickUpDetails.vue";

// Define props to receive pickup data
interface Props {
  pickupData?: PickupData;
}

// Use withDefaults to provide default values
const props = defineProps<Props>();

const handleClick = (component: any) => {
  $navigateTo(component);
};

// Helper function to format date
const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};

// Helper function to format time
const formatTime = (time: Date) => {
  return time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

// Helper function to get waste type icon
const getWasteTypeIcon = (requestType: string) => {
  const iconMap: { [key: string]: string } = {
    "Household Waste": "&#xf1b8;",
    "E-Waste": "&#xf538;",
    "Garden Waste": "&#xf4d8;",
    "Bulk Items": "&#xf468;",
    "Organic Waste": "&#xf4d8;",
    "Electronic Waste": "&#xf538;",
    "Medical Waste": "&#xf0fa;",
  };
  return iconMap[requestType] || "&#xf1b8;"; // Default to household waste icon
};

// Helper function to get waste type color
const getWasteTypeColor = (requestType: string) => {
  const colorMap: { [key: string]: string } = {
    "Household Waste": "text-green-500",
    "E-Waste": "text-blue-500",
    "Garden Waste": "text-green-600",
    "Bulk Items": "text-orange-500",
    "Organic Waste": "text-green-400",
    "Electronic Waste": "text-blue-500",
    "Medical Waste": "text-red-500",
  };
  return colorMap[requestType] || "text-green-500"; // Default to green
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
            <Span
              class="fa text-green-500"
              :class="getWasteTypeColor(pickupData.requestType)"
              text="&#xf1b8;"
            />
            <Span text=" " />
            <Span text=" " />
            <Span
              :text="pickupData.requestType.replace(' Waste', '')"
              class="text-black text-sm"
            />
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
            :text="formatDate(pickupData.pickupDate)"
          />
        </FormattedString>
      </Label>

      <StackLayout>
        <Label fontSize="14">
          <FormattedString>
            <Span class="fa" text="&#xf017;" />
            <Span text=" " />
            <Span text=" " />
            <Span
              class="text-[#575E6C] font-medium"
              :text="formatTime(pickupData.pickupTime)"
            />
          </FormattedString>
        </Label>
      </StackLayout>
    </FlexboxLayout>

    <StackLayout class="bg-[#EFF5F0] p-2 rounded-md text-[#1D3D23] mt-5">
      <FlexboxLayout class="items-center">
        <Label class="fa mr-2" text="&#xf3c5;" />
        <Label :text="pickupData.pickupAddress" />
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
