<script setup lang="ts">
import { FlexboxLayout } from "@nativescript/core";

defineProps<{
  className?: string;
}>();
</script>

<template>
  <StackLayout class="bg-[#F6F7F9] px-6 rounded-lg mb-5 p-4">
    <FlexboxLayout :class="className || 'justify-between items-center'">
      <slot />
    </FlexboxLayout>
  </StackLayout>
</template>

<style scoped></style>
