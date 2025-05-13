<script setup lang="ts">
import { GridLayout } from "@nativescript/core";
import {
  DockLayout,
  FlexboxLayout,
  FormattedString,
  Page,
  StackLayout,
} from "@nativescript/core";
import BottomTabs from "~/components/BottomTabs.vue";
import CardView from "~/components/CardView.vue";
</script>

<template>
  <Page actionBarHidden="true">
    <DockLayout stretchLastChild="true">
      <BottomTabs />

      <ScrollView>
        <StackLayout class="pt-10 px-4">
          <Label
            textWrap="true"
            fontSize="24px"
            class="text-[#1C202A] font-medium mb-4"
            lineHeight="5"
          >
            <FormattedString>
              <Span text="What type of waste would\n " />
              <Span text="you like us to pick up? " />
            </FormattedString>
          </Label>

          <Label
            fontSize="18px"
            class="text-[#575E6C] font-medium"
            textWrap="true"
            lineHeight="5"
          >
            <FormattedString>
              <Span text="Choose the waste category below. This helps\n " />
              <Span text="us prepare the right team and equipment. " />
            </FormattedString>
          </Label>
        </StackLayout>
      </ScrollView>
    </DockLayout>
  </Page>
</template>

<style scoped></style>
