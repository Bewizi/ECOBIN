<script setup lang="ts">
import { FlexboxLayout, StackLayout } from "@nativescript/core";
import { computed, ref } from "nativescript-vue";

const days = ref([
  { id: 1, day: "Sun", date: "04", active: false },
  { id: 2, day: "Mon", date: "05", active: false },
  { id: 3, day: "Tue", date: "06", active: false },
  { id: 4, day: "Wed", date: "07", active: false },
  { id: 5, day: "Thu", date: "08", active: true },
  { id: 6, day: "Fri", date: "09", active: false },
  { id: 7, day: "Sat", date: "10", active: false },
]);

const activeDay = computed(() => {
  return days.value.find((day) => day.active);
});

const setActiveDay = (id: number) => {
  activeDay.value;
  days.value.forEach((day) => {
    day.active = day.id === id;
  });
};
</script>

<template>
  <FlexboxLayout class="justify-between items-center mb-5">
    <StackLayout
      v-for="day in days"
      :key="day.id"
      class="text-center text-[#1D3D23]"
      :class="
        day.active
          ? 'bg-[#EFF5F0] font-medium rounded-full p-2 w-[80px] h-[80px] grid items-center transition-all duration-300'
          : 'text-[#B3BCCE]'
      "
      @tap="setActiveDay(day.id)"
    >
      <Label :text="day.day"></Label>
      <Label :text="day.date"></Label>
    </StackLayout>
  </FlexboxLayout>
</template>

<style scoped></style>
