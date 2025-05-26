<script setup lang="ts">
import {
  Button,
  DatePicker,
  GridLayout,
  ListPicker,
  TextView,
  TimePicker,
} from "@nativescript/core";
import {
  DockLayout,
  FlexboxLayout,
  FormattedString,
  Page,
  StackLayout,
} from "@nativescript/core";
import BottomTabs from "~/components/BottomTabs.vue";
import * as geolocation from "@nativescript/geolocation";
import { CoreTypes } from "@nativescript/core";

import { colors } from "~/utils/colors";

import { ref } from "nativescript-vue";
import { createPopupView } from "~/utils/helper";
import { usePopover } from "~/composables/usePopover";

const { createPopover, showPopover, hidePopover, popoverVisible } =
  usePopover();

const formData = ref({
  pickupAddress: "",
  pickupDate: new Date(),
  pickupTime: new Date(),
  additionalDate: "",
});

const fetchCurrentLocation = async () => {
  try {
    const isEnabled = await geolocation.isEnabled();
    if (!isEnabled) {
      await geolocation.enableLocationRequest();
    }

    const location = await geolocation.getCurrentLocation({
      desiredAccuracy: CoreTypes.Accuracy.high,
      updateDistance: 10,
      maximumAge: 5000,
      timeout: 20000,
    });

    console.log("Current Location:", location);

    // Optional: use a reverse geocoding API to get address from coordinates
    formData.value.pickupAddress = `Lat: ${location.latitude}, Lon: ${location.longitude}`;
  } catch (error) {
    console.error("Error fetching current location:", error);
  }
};

// Create the popover once when component mounts
const popupView = createPopupView("red", 200, 100);
createPopover(popupView);

const togglePopover = () => {
  if (popoverVisible.value) {
    hidePopover();
  } else {
    showPopover();
  }
};

const handleConfirmPickup = () => {
  // Handle the pickup confirmation logic here
  console.log("Pickup confirmed with data:", formData.value);
};
</script>

<template>
  <Page actionBarHidden="true">
    <DockLayout stretchLastChild="true">
      <BottomTabs />

      <ScrollView>
        <StackLayout class="pt-10 px-4">
          <StackLayout class="mb-10">
            <Label
              fontSize="24"
              class="text-[#1C202A] font-medium mb-4"
              text="Pickup Details"
            />

            <Label
              fontSize="18"
              class="text-[#575E6C] font-medium"
              textWrap="true"
              lineHeight="5"
            >
              <FormattedString>
                <Span text="Let us know where and when to pick up your \n " />
                <Span text="waste. This helps us plan accordingly. " />
              </FormattedString>
            </Label>
          </StackLayout>

          <!-- Form -->
          <!-- PickUp Address -->
          <StackLayout class="mb-3">
            <Label
              text="Pickup Address"
              class="text-black mb-3.5"
              fontSize="20"
            />
            <TextField
              v-model="formData.pickupAddress"
              hint="Enter your pickup address"
              fontSize="16"
              class="p-4 border-2 border-[#C1C8D6] rounded-xl placeholder:text-[#7E8798] placeholder:text-[16px]"
            />
            <Label
              v-if="!formData.pickupAddress"
              text="Please enter a valid address."
              class="text-red-500 mt-2"
            />
            <Label
              v-if="formData.pickupAddress"
              text="Address looks good!"
              class="text-green-500 mt-2"
            />

            <!-- Change Location -->
            <Label
              :class="`${colors.Text} mt-2 `"
              fontSize="16"
              text="Change Location"
              @tap="fetchCurrentLocation"
            />
            <!-- Change Location -->
          </StackLayout>
          <!-- PickUp Address -->

          <!-- PICKUP DATE -->
          <StackLayout class="mb-3">
            <Label text="Pickup Date" fontSize="20" class="mb-3.5 text-black" />
            <FlexboxLayout
              class="space-x-5 p-4 border-2 border-[#C1C8D6] rounded-xl"
            >
              <Label class="fa text-black" text="&#xf073;" fontSize="20" />

              <DatePicker
                day="9"
                month="10"
                year="2023"
                format="dd/MM/yyyy"
                :minDate="new Date()"
                :maxDate="
                  new Date(new Date().setFullYear(new Date().getFullYear() + 1))
                "
                v-model="formData.pickupDate"
                class="flex-grow"
              />
            </FlexboxLayout>
          </StackLayout>
          <!-- PICKUP DATE -->

          <!-- PICKUP TIME -->
          <StackLayout class="mb-3">
            <Label text="Pickup Time" fontSize="20" class="mb-3.5 text-black" />
            <TimePicker
              hour="9"
              minute="41"
              format="HH:mm"
              :minTime="new Date()"
              :maxTime="new Date(new Date().setHours(23, 59, 59, 999))"
              :interval="15"
              v-model="formData.pickupTime"
              class="w-full flex-grow border-2 border-[#C1C8D6] rounded-xl"
            />
          </StackLayout>
          <!-- PICKUP TIME -->

          <!-- ADDITIONAL DATE -->
          <StackLayout class="mb-10">
            <Label
              text="Additional Date"
              fontSize="20"
              class="mb-3.5 text-black"
            />
            <TextView
              height="100"
              editable="true"
              v-model="formData.additionalDate"
              multiline="true"
              hint="Select additional date"
              fontSize="24"
              class="w-full placeholder:text-black placeholder:text-[16px] border-2 border-[#C1C8D6] rounded-xl p-4"
            />
          </StackLayout>
          <!-- ADDITIONAL DATE -->

          <!-- Form -->

          <Button
            :class="`${colors.button.secondary}`"
            @tap="handleConfirmPickup"
            text="Confirm Pickup"
          ></Button>
        </StackLayout>
      </ScrollView>
    </DockLayout>
  </Page>
</template>

<style scoped></style>
