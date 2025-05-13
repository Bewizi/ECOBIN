<script setup lang="ts">
import {
  FlexboxLayout,
  FormattedString,
  Label,
  StackLayout,
} from "@nativescript/core";
</script>

<template>
  <StackLayout class="bg-[#F6F7F9] px-4 py-10 mt-10 rounded-xl">
    <FlexboxLayout class="justify-between items-center">
      <StackLayout>
        <Label class="text-2xl mb-2 text-black" text="Your Waste Activity" />
        <Label textWrap="true" fontSize="16" lineHeight="5">
          <FormattedString class="font-medium text-[#575E6C]">
            <Span text="Great job! You’ve recycled\n " />
            <Span class="text-[#54B469]" text="23kg " />
            <Span text="this month! " />
          </FormattedString>
        </Label>
      </StackLayout>
      <Label class="fa text-6xl text-[#5A9E59]" text="&#xf012;" />
    </FlexboxLayout>
  </StackLayout>
</template>

<style scoped></style>
