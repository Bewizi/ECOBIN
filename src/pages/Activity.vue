<script setup lang="ts">
import {
  DockLayout,
  FlexboxLayout,
  Label,
  ScrollView,
  StackLayout,
  WrapLayout,
} from "@nativescript/core";
import { $navigateBack } from "nativescript-vue";
import BottomTabs from "~/components/BottomTabs.vue";
</script>

<template>
  <Page actionBarHidden="true" enableSwipeBackNavigation="true">
    <DockLayout>
      <BottomTabs />

      <ScrollView>
        <StackLayout class="pt-10 px-5">
          <!-- Header -->
          <StackLayout class="mb-10">
            <Label
              fontSize="32"
              class="font-semibold text-[#1C202A] mb-2"
              text="Your Waste Activity"
            >
            </Label>
            <Label
              fontSize="16"
              class="text-[#575E6C]"
              text="Here’s how you’re helping the planet"
            ></Label>
          </StackLayout>
          <!-- Header -->

          <StackLayout>
            <!-- Edit Profile -->
            <FlexboxLayout class="justify-between mb-10 gap-4 items-center">
              <StackLayout class="bg-[#F5F7FA] rounded-2xl p-8">
                <!-- icon -->
                <Label class="text-[#575E6C] mb-4" fontSize="16 ">
                  <FormattedString>
                    <Span class="fa" text="&#xf1f8;" />
                    <Span text="  " />
                    <Span text=" " />
                    <Span text="Total Recycled" />
                  </FormattedString>
                </Label>
                <!-- icon -->

                <!-- text -->
                <Label fontSize="20" class="text-black">
                  <FormattedString>
                    <Span text="23KG " />
                    <Span
                      fontSize="14"
                      class="text-[#747C8D]"
                      text="this month"
                    />
                  </FormattedString>
                </Label>
                <!-- text -->
              </StackLayout>

              <StackLayout class="bg-[#F5F7FA] rounded-2xl p-8">
                <!-- icon -->
                <Label class="text-[#575E6C]" fontSize="16 ">
                  <FormattedString>
                    <Span class="fa" text="&#xf00c;" />
                    <Span text="  " />
                    <Span text=" " />
                    <Span text="Pickups Completed" />
                  </FormattedString>
                </Label>
                <!-- icon -->

                <!-- text -->
                <Label text="4 pickups" fontSize="20" class="text-black mt-2">
                </Label>
                <!-- text -->
              </StackLayout>
            </FlexboxLayout>
          </StackLayout>
          <!-- Edit Profile -->

          <!-- WASTE SAVE -->
          <StackLayout class="bg-[#F5F7FA] rounded-2xl p-8">
            <Label class="mb-2" fontSize="16">
              <FormattedString>
                <Span class="fa" text="&#xf06c;" />
                <Span text="   " />
                <Span text="   " />
                <Span text="CO2 Saved" fontSize="20" class="text-[#575E6C]" />
              </FormattedString>
            </Label>
            <Label
              fontSize="16"
              class="text-black"
              text="18 kg of CO₂ emissions"
            />
          </StackLayout>
          <!-- WASTE SAVE -->
        </StackLayout>
      </ScrollView>
    </DockLayout>
  </Page>
</template>

<style scoped></style>
