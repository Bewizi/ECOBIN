<script setup lang="ts">
import { $navigateTo, ref } from "nativescript-vue";
import {
  DockLayout,
  FlexboxLayout,
  FormattedString,
  Image,
  Label,
  StackLayout,
} from "@nativescript/core";
import SignUp from "~/Auth/SignUp.vue";
import { OnboardingSlide } from "~/types";

const currentSlide = ref(0);

const slides = ref<OnboardingSlide[]>([
  {
    title: {
      title1: "Smart Waste\n",
      title2: "Management at\n",
      title3: "Your Fingertips",
    },
    description: {
      desOne: "Schedule pickups, track collections,\n",
      desTwo: "and keep your environment clean\n",
      desThree: "effortlessly",
    },

    image: "~/assets/images/Waste-management-pana.png",
  },
  {
    title: {
      title1: "Pickups Made Simple",
      title2: "",
      title3: "",
    },
    description: {
      desOne: "Select pickup times, track your\n",
      desTwo: "your waste status, and enjoy a cleaner\n",
      desThree: "space — all in a few taps.",
    },

    image: "~/assets/images/Waste-management-cuate.png",
  },
  {
    title: {
      title1: "Join the Green\n",
      title2: "Movement",
      title3: "",
    },
    description: {
      desOne: "Recycling right and proper disposal\n",
      desTwo: "help build a healthier planet for\n",
      desThree: "everyone",
    },

    image: "~/assets/images/Waste-management.png",
  },
]);

const goToNextSlide = () => {
  if (currentSlide.value < slides.value.length - 1) {
    currentSlide.value++;
  } else {
    navigateToSignup();
  }
};

const navigateToSignup = () => {
  // Navigation logic
  $navigateTo(SignUp, {
    transition: {
      name: "fade",
      duration: 300,
    },
    clearHistory: true,
  });
};
</script>

<template>
  <Page actionBarHidden="true">
    <StackLayout class="px-8 pt-5">
      <FlexboxLayout class="justify-between">
        <!-- Logo -->
        <Image src="~/assets/images/Logo.png" width="100" stretch="aspectFit" />

        <!-- Skip button -->
        <Label fontSize="20" class="text-[#575E6C]" @tap="navigateToSignup">
          <FormattedString>
            <Span text="Skip" />
            <Span text=" " />
            <Span text=" " />
            <Span class="fa" text="&#xf061;" />
          </FormattedString>
        </Label>
      </FlexboxLayout>

      <!-- Slide Content -->
      <DockLayout class="rounded-xl bg-[#F2F4F7] mt-10">
        <StackLayout dock="top" class="px-5 pt-8">
          <Label
            fontSize="36"
            lineHeight="5"
            class="font-medium text-black mb-4"
            textWrap="true"
          >
            <FormattedString>
              <Span :text="slides[currentSlide]?.title?.title1" />
              <Span :text="slides[currentSlide]?.title?.title2" />
              <Span :text="slides[currentSlide]?.title?.title3" />
            </FormattedString>
          </Label>

          <Label
            fontSize="16"
            lineHeight="5"
            class="text-[#575E6C] font-medium"
            textWrap="true"
          >
            <FormattedString>
              <Span :text="slides[currentSlide]?.description?.desOne" />
              <Span :text="slides[currentSlide]?.description?.desTwo" />
              <Span :text="slides[currentSlide]?.description?.desThree" />
            </FormattedString>
          </Label>

          <!-- Progress Dots -->
          <FlexboxLayout class="space-x-2 mt-4">
            <Label
              v-for="(_, index) in slides"
              :key="index"
              :class="[
                ' rounded-full transition-all duration-300 ease-in-out',
                index === currentSlide
                  ? 'bg-[#54B469] h-2 w-10'
                  : 'bg-gray-300 h-2 w-5',
              ]"
            />
          </FlexboxLayout>
        </StackLayout>

        <StackLayout dock="bottom" stretchLastChild="true" class="mt-36">
          <Image
            dock="bottom"
            :src="slides[currentSlide].image"
            stretch="aspectFit"
          />
        </StackLayout>
      </DockLayout>

      <!-- Get Started Button -->
      <Button
        text="Get Started"
        class="bg-[#54B469] text-white rounded-lg p-4 m-8"
        @tap="goToNextSlide"
      />
    </StackLayout>
  </Page>
</template>
