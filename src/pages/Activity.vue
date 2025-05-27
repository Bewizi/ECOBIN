<script setup lang="ts">
import { LineChart } from "@nativescript-community/ui-chart/charts/LineChart";
import { LineDataSet } from "@nativescript-community/ui-chart/data/LineDataSet";
import { LineData } from "@nativescript-community/ui-chart/data/LineData";
import { XAxisPosition } from "@nativescript-community/ui-chart/components/XAxis";
import { LegendForm } from "@nativescript-community/ui-chart/components/Legend";
import RequestPickupViews from "~/views/RequestPickupViews.vue";
import {
  DockLayout,
  Label,
  FlexboxLayout,
  FormattedString,
  ScrollView,
  Span,
  StackLayout,
  TabView,
  TabViewItem,
  Button,
  GridLayout,
} from "@nativescript/core";
import { onMounted, ref } from "nativescript-vue";

import BottomTabs from "~/components/BottomTabs.vue";
import { navigate } from "~/utils/navigation";

const navigateToRequestPickup = () => {
  navigate(RequestPickupViews, {
    transition: {
      name: "slideLeft",
      duration: 300,
      curve: "easeIn",
    },
  });
};

const selectedTabIndex = ref(0);

// Sample data - replace with your actual data
const weeklyData = [
  { x: 0, y: 5, label: "Week 1" },
  { x: 1, y: 7, label: "Week 2" },
  { x: 2, y: 6, label: "Week 3" },
  { x: 3, y: 8, label: "Week 4" },
];

const monthlyData = [
  { x: 0, y: 23, label: "Jan" },
  { x: 1, y: 18, label: "Feb" },
  { x: 2, y: 25, label: "Mar" },
  { x: 3, y: 22, label: "Apr" },
  { x: 4, y: 30, label: "May" },
];

const allTimeData = [
  { x: 0, y: 45, label: "Q1" },
  { x: 1, y: 52, label: "Q2" },
  { x: 2, y: 38, label: "Q3" },
  { x: 3, y: 61, label: "Q4" },
];

const onChartLoaded = (args: any) => {
  const chart = args.object as LineChart;
  setupChart(chart);
};

const setupChart = (chart: LineChart) => {
  // Basic chart configuration
  chart.backgroundColor = "white";
  chart.drawGridBackgroundEnabled = false;
  chart.description.enabled = false;

  // Disable interactions for cleaner look
  chart.dragEnabled = false;
  chart.scaleEnabled = false;
  chart.pinchZoomEnabled = false;
  chart.doubleTapToZoomEnabled = false;
  chart.highlightPerTapEnabled = false;

  // Configure X-axis
  const xAxis = chart.xAxis;
  xAxis.position = XAxisPosition.BOTTOM;
  xAxis.drawGridLines = false;
  xAxis.drawAxisLine = true;
  xAxis.textColor = "#747C8D";
  xAxis.textSize = 12;
  xAxis.granularity = 1;
  xAxis.labelCount = 4;

  // Configure left Y-axis
  const leftAxis = chart.axisLeft;
  leftAxis.drawGridLines = true;
  leftAxis.drawAxisLine = false;
  leftAxis.textColor = "#747C8D";
  leftAxis.textSize = 12;
  leftAxis.granularity = 1;
  leftAxis.axisMinimum = 0;

  // Disable right Y-axis
  const rightAxis = chart.axisRight;
  rightAxis.enabled = false;

  // Disable legend
  const legend = chart.legend;
  legend.enabled = false;

  // Set initial data based on selected tab
  updateChartData(chart);
};

const updateChartData = (chart: LineChart) => {
  let data;
  let dataLabel;

  switch (selectedTabIndex.value) {
    case 0: // Week
      data = weeklyData;
      dataLabel = "Weekly Recycling (kg)";
      break;
    case 1: // Month
      data = monthlyData;
      dataLabel = "Monthly Recycling (kg)";
      break;
    case 2: // All Time
      data = allTimeData;
      dataLabel = "Quarterly Recycling (kg)";
      break;
    default:
      data = weeklyData;
      dataLabel = "Weekly Recycling (kg)";
  }

  // Create dataset
  const dataSet = new LineDataSet(data, dataLabel);

  // Style the line chart to match the green theme
  dataSet.color = "#3FA55A";
  dataSet.lineWidth = 3;
  dataSet.drawCirclesEnabled = true;
  dataSet.circleColor = "#3FA55A";
  dataSet.circleRadius = 6;
  dataSet.circleHoleRadius = 3;
  dataSet.circleColor = "white";
  dataSet.drawValuesEnabled = false; // Hide values on points for cleaner look
  dataSet.mode = "LINEAR"; // Smooth line

  // Optional: Add fill under the line
  dataSet.drawFilledEnabled = true;
  dataSet.fillColor = "#3FA55A";
  dataSet.fillAlpha = 30;

  // Create chart data
  const lineData = new LineData([dataSet]);

  // Set data to chart
  chart.data = lineData;

  // Animate chart appearance
  // chart.animateX(800);

  // Refresh chart
  chart.invalidate();
};

// Watch for tab changes and update chart
const onTabChanged = (args: any) => {
  selectedTabIndex.value = args.newIndex;
  const chart = args.object.parent.getViewById("wasteChart") as LineChart;
  if (chart && chart.nativeView) {
    updateChartData(chart.nativeView as LineChart);
  }
};
</script>

<template>
  <Page actionBarHidden="true" enableSwipeBackNavigation="true">
    <DockLayout>
      <BottomTabs />

      <ScrollView>
        <StackLayout class="pt-10 px-5">
          <!-- Header -->
          <StackLayout class="mb-10">
            <Label
              fontSize="32"
              class="font-semibold text-[#1C202A] mb-2"
              text="Your Waste Activity"
            />
            <Label
              fontSize="16"
              class="text-[#575E6C]"
              text="Here's how you're helping the planet"
            />
          </StackLayout>

          <!-- Stats Cards -->
          <FlexboxLayout class="justify-between mb-10 gap-4 items-center">
            <StackLayout class="bg-[#F5F7FA] rounded-2xl p-8">
              <Label class="text-[#575E6C] mb-4" fontSize="16">
                <FormattedString>
                  <Span class="fa" text="&#xf1f8;" />
                  <Span text="   Total Recycled" />
                </FormattedString>
              </Label>
              <Label fontSize="20" class="text-black">
                <FormattedString>
                  <Span text="23KG " />
                  <Span
                    fontSize="14"
                    class="text-[#747C8D]"
                    text="this month"
                  />
                </FormattedString>
              </Label>
            </StackLayout>

            <StackLayout class="bg-[#F5F7FA] rounded-2xl p-8">
              <Label class="text-[#575E6C]" fontSize="16">
                <FormattedString>
                  <Span class="fa" text="&#xf00c;" />
                  <Span text="   Pickups Completed" />
                </FormattedString>
              </Label>
              <Label text="4 pickups" fontSize="20" class="text-black mt-2" />
            </StackLayout>
          </FlexboxLayout>

          <!-- CO2 Saved Card -->
          <StackLayout class="bg-[#F5F7FA] rounded-2xl p-8 mb-10">
            <Label class="mb-2" fontSize="16">
              <FormattedString>
                <Span class="fa text-[#575E6C]" text="&#xf06c;" />
                <Span
                  text="   CO2 Saved"
                  fontSize="20"
                  class="text-[#575E6C]"
                />
              </FormattedString>
            </Label>
            <Label
              fontSize="16"
              class="text-black"
              text="18 kg of CO₂ emissions"
            />
          </StackLayout>

          <!-- Pickup Summary -->
          <StackLayout>
            <Label
              fontSize="24"
              class="text-black mb-5"
              text="Pickup Summary"
            />

            <TabView
              height="400"
              backgroundColor="#F5F7FA"
              tabBackgroundColor="#3FA55A"
              tabTextFontSize="16"
              tabTextColor="#FFFFFF"
              androidSelectedTabHighlightColor="#ffffff"
              v-model:selectedIndex="selectedTabIndex"
              @selectedIndexChange="onTabChanged"
            >
              <TabViewItem title="Week">
                <GridLayout backgroundColor="#F5F7FA">
                  <StackLayout padding="20">
                    <LineChart
                      id="wasteChart"
                      height="280"
                      backgroundColor="white"
                      @loaded="onChartLoaded"
                    />
                    <Label
                      text="Weekly waste recycling progress"
                      textAlignment="center"
                      class="mt-4 text-[#747C8D]"
                      fontSize="14"
                    />
                  </StackLayout>
                </GridLayout>
              </TabViewItem>

              <TabViewItem title="Month">
                <GridLayout backgroundColor="#F5F7FA">
                  <StackLayout padding="20">
                    <LineChart
                      height="280"
                      backgroundColor="white"
                      @loaded="onChartLoaded"
                    />
                    <Label
                      text="Monthly recycling trends"
                      textAlignment="center"
                      class="mt-4 text-[#747C8D]"
                      fontSize="14"
                    />
                  </StackLayout>
                </GridLayout>
              </TabViewItem>

              <TabViewItem title="All Time">
                <GridLayout backgroundColor="#F5F7FA">
                  <StackLayout padding="20">
                    <LineChart
                      height="280"
                      backgroundColor="white"
                      @loaded="onChartLoaded"
                    />
                    <Label
                      text="Long-term recycling impact"
                      textAlignment="center"
                      class="mt-4 text-[#747C8D]"
                      fontSize="14"
                    />
                  </StackLayout>
                </GridLayout>
              </TabViewItem>
            </TabView>
          </StackLayout>

          <!-- Request Pickup Button -->
          <Button
            class="bg-[#3FA55A] text-white rounded-full p-4 mt-10"
            text="Request Pickup"
            fontSize="18"
            @tap="navigateToRequestPickup"
          />
        </StackLayout>
      </ScrollView>
    </DockLayout>
  </Page>
</template>

<style scoped>
/* Additional styles if needed */
</style>
