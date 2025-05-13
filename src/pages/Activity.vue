<script setup lang="ts">
import {
  DockLayout,
  ScrollView,
  StackLayout,
  WrapLayout,
} from "@nativescript/core";
import BottomTabs from "~/components/BottomTabs.vue";
</script>

<template>
  <Page actionBarHidden="true">
    <DockLayout>
      <BottomTabs />

      <ScrollView>
        <StackLayout class="pt-10 px-4">
          <Label
            class="text-4xl font-semibold text-center text-black"
            text="Welcome To Activity Page hi"
          >
          </Label>

          <WrapLayout>
            <Label text="click to go back home" />
            <Label text="wassup" />
            <Label text="youtube" />
          </WrapLayout>
        </StackLayout>
      </ScrollView>
    </DockLayout>
  </Page>
</template>

<style scoped></style>
