<script setup lang="ts">
import {
  FlexboxLayout,
  FormattedString,
  GridLayout,
  Label,
  ScrollView,
  Span,
  StackLayout,
} from "@nativescript/core";
import { colors } from "~/utils/colors";

// Add your setup logic here
</script>

<template>
  <Page actionBarHidden="true">
    <ScrollView>
      <StackLayout class="px-5 py-10">
        <Label
          fontSize="24"
          class="text-black mb-5"
          text="Add a profile Picture"
        />
        <Label textWrap="true" lineHeight="5" class="text-[#575E6C]">
          <FormattedString>
            <Span
              text="Your photo helps us personalize your experience and \n "
            />
            <Span
              text="allows our pickup team to easily identify you. You \n"
            />
            <Span text="can skip this for now." />
          </FormattedString>
        </Label>

        <!-- Add your setup form components here -->
        <FlexboxLayout class="justify-center items-center">
          <Label
            fontSize="50"
            class="fa bg-[#E7EAF0] rounded-[100%] p-10"
            text="&#xf007;"
          />
        </FlexboxLayout>
        <!-- Add your setup form components here -->

        <StackLayout>
          <Button text="Skip for Now" :class="`${colors.button.primary}`" />
          <Button
            text="Upload Photo"
            :class="`${colors.button.secondary}`"
          ></Button>
        </StackLayout>

        <StackLayout class="bg-[#EFF5F0] p-4">
          <FlexboxLayout class="space-x-6">
            <Label text="i" />
          </FlexboxLayout>
          <StackLayout <Label text="Note" />
          <Label>
            <FormattedString>
              <Span text="You can" />
            </FormattedString>
          </Label>
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<style scoped></style>
