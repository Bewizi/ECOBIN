<script setup lang="ts">
import { $navigateTo, ref } from "nativescript-vue";
import { CategoryWastes } from "~/types";
import CardView from "./CardView.vue";
import Home from "~/pages/Home.vue";
import HouseHoldWaste from "~/components/household-waste/index.vue";

const handleClick = (component: any) => {
  $navigateTo(component);
};

const category = ref<CategoryWastes[]>([
  {
    id: 1,
    title: "Household Waste",
    description: {
      text: "Everyday non-recyclable items like\n",
      subtext: "food wrappers, tissues, etc",
    },
    images: "~/assets/images/Household-Waste.png",
    clicked: () => handleClick(HouseHoldWaste),
  },
  {
    id: 2,
    title: "Recyclables ",
    description: {
      text: "Plastic bottles, cans, glass, paper,\n",
      subtext: "and other recyclable items.",
    },
    images: "~/assets/images/Recyclables-Waste.png",
    clicked: () => handleClick(Home),
  },
  {
    id: 3,
    title: "Organic Waste ",
    description: {
      text: "Food scraps, garden waste — \n",
      subtext: "great for composting!",
    },
    images: "~/assets/images/Organic-Waste.png",
    clicked: () => handleClick(Home),
  },
  {
    id: 4,
    title: "Electronic Waste",
    description: {
      text: "Food scraps, garden waste — \n",
      subtext: "great for composting!",
    },
    images: "~/assets/images/Electronic-Waste.png",
    clicked: () => handleClick(Home),
  },
  {
    id: 5,
    title: "Medical Waste",
    description: {
      text: "Used masks, gloves, syringes. Must \n",
      subtext: "be safely handled.",
    },
    images: "~/assets/images/Medical-Waste.png",
    clicked: () => handleClick(Home),
  },
]);
</script>

<template>
  <CardView
    v-for="categories in category"
    :key="categories.id"
    @tap="categories.clicked"
  >
    <StackLayout class="">
      <Label
        textWrap="true"
        :text="categories.title"
        class="text-2xl font-medium text-[#1C202A] mb-2"
      >
      </Label>
      <Label
        textWrap="true"
        class="text-[#575E6C]"
        fontSize="16"
        lineHeight="5"
      >
        <FormattedString>
          <Span :text="categories.description.text" />
          <Span :text="categories.description.subtext" />
        </FormattedString>
      </Label>
    </StackLayout>

    <StackLayout class="">
      <Image stretch="aspectFill" :src="categories.images" width="100" />
    </StackLayout>
  </CardView>
</template>

<style scoped></style>
