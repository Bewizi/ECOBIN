<script setup lang="ts">
import {
  FlexboxLayout,
  FormattedString,
  Label,
  ScrollView,
  Span,
  StackLayout,
} from "@nativescript/core";
import { colors } from "~/utils/colors";
import { navigate } from "~/utils/navigation";
import Home from "./Home.vue";

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
        <Label
          textWrap="true"
          lineHeight="5"
          fontSize="14"
          class="text-[#575E6C]"
        >
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
        <FlexboxLayout class="justify-center items-center my-32">
          <Label
            fontSize="50"
            :class="`fa ${colors.bgGray} rounded-[100%] p-10`"
            text="&#xf007;"
          />
        </FlexboxLayout>
        <!-- Add your setup form components here -->

        <StackLayout>
          <Button
            text="Skip for Now"
            :class="`${colors.button.primary}`"
            @tap="navigate(Home)"
          />
          <Button text="Upload Photo" :class="`${colors.button.secondary}`" />
        </StackLayout>

        <StackLayout
          orientation="horizontal"
          :class="`space-x-6 ${colors.bgLightGreen} p-4 rounded-xl ${colors.textBritishGreen}`"
        >
          <FlexboxLayout class="items-center">
            <Label fontSize="20" class="fa" text="&#xf06a;" />
          </FlexboxLayout>
          <StackLayout>
            <Label fontSize="24" class="font-medium mb-2" text="Kindly note" />
            <Label fontSize="14" lineHeight="5" textWrap="true">
              <FormattedString>
                <Span text="You can always update your photo later \n" />
                <Span text="from settings." />
              </FormattedString>
            </Label>
          </StackLayout>
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<style scoped></style>
