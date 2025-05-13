<script setup lang="ts">
import { CheckBox } from "@nativescript-community/ui-checkbox";
import {
  Button,
  DockLayout,
  FormattedString,
  Label,
  Page,
  StackLayout,
} from "@nativescript/core";
import { $navigateBack, ref } from "nativescript-vue";
import { HouseHoldItems } from "~/types";

const items = ref<HouseHoldItems[]>([
  {
    id: 1,
    icons: "\uf015",
    text: "Food wrappers",
  },
  {
    id: 2,
    icons: "\uf71e",
    text: "Used tissues or napkins",
  },
  {
    id: 3,
    icons: "\uf71e",
    text: "Damaged household items",
  },
  {
    id: 4,
    icons: "\uf553",
    text: "Old clothes or fabrics",
  },
  {
    id: 5,
    icons: "\uf015",
    text: "All kind of household waste",
  },
]);
</script>

<template>
  <Page actionBarHidden="true">
    <DockLayout stretchLastChild:true>
      <Button
        dock="bottom"
        class="bg-[#54B469] shadow-none rounded-md"
        height="65"
      >
        <FormattedString>
          <Span text="Next" class="text-white text-lg font-medium" />
        </FormattedString>
      </Button>

      <StackLayout class="px-5 pt-10" dock="top">
        <Label
          class="fa mb-5 font-extrabold text-2xl text-black"
          text="&#xf060;"
          @tap="$navigateBack"
        />
        <StackLayout class="mb-10">
          <Label
            class="text-4xl font-medium text-[#1C202A] mb-2"
            text="Household Waste Details"
          />
          <Label
            textWrap="true"
            class="text-[#575E6C]"
            fontSize="16"
            lineHeight="5"
          >
            <FormattedString>
              <Span text="Help us understand what you're disposing of\n" />
              <Span text="so we can come prepared with the right tools\n " />
              <Span text="and team" />
            </FormattedString>
          </Label>
        </StackLayout>

        <StackLayout
          v-for="householdItems in items"
          :key="householdItems.id"
          class="mb-8"
        >
          <CheckBox boxType="circle" checked="false">
            <FormattedString>
              <Span class="fa text-xl" :text="householdItems.icons" />
              <Span text="   " />
              <Span
                class="text-xl font-medium text-black"
                :text="householdItems.text"
              />
            </FormattedString>
          </CheckBox>
        </StackLayout>
      </StackLayout>
    </DockLayout>
  </Page>
</template>

<style scoped></style>
