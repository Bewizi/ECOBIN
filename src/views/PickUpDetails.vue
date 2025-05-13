<script setup lang="ts">
import {
  FlexboxLayout,
  FormattedString,
  Label,
  Page,
  ScrollView,
  StackLayout,
} from "@nativescript/core";
import CardView from "~/components/CardView.vue";
</script>

<template>
  <Page actionBarHidden="true">
    <StackLayout class="px-5 pt-10">
      <Label text="Waste Pickup" />
      <CardView class="border-2 border-gray-600">
        <FlexboxLayout className="justify-between items-center">
          <StackLayout>
            <Label textWrap="true" text="Address" />
          </StackLayout>
          <StackLayout>
            <Label textWrap="true">
              <FormattedString>
                <Span text="03, Adekunmi Estate,\n" />
                <Span text="Ojota, Lagos" />
              </FormattedString>
            </Label>
          </StackLayout>
        </FlexboxLayout>
      </CardView>
    </StackLayout>
  </Page>
</template>

<style scoped></style>
