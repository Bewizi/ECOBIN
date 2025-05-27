import {
  View,
  StackLayout,
  Label,
  Button,
  getRootLayout,
} from "@nativescript/core";

import Home from "~/pages/Home.vue";
import { $navigateTo } from "nativescript-vue";

export function createConfirmationPopup(data: any): View {
  // Main container with bottom sheet styling
  const layout = new StackLayout();
  layout.backgroundColor = "white";
  layout.padding = 20;
  layout.borderRadius = 20;
  layout.marginTop = 500; // Add some margin at top for rounded corners
  layout.width = require("@nativescript/core").PercentLength.parse("100%");

  // Add handle indicator (like in bottom sheets)
  const handle = new Label();
  handle.className = "w-12 h-1 bg-gray-300 rounded-full mb-4 mx-auto";

  // Title section
  const title = new Label();
  title.text = "Pickup Request Confirmed";
  title.className = "text-xl font-bold mb-2 text-center text-black";

  // Message
  const message = new Label();
  message.text =
    " Thanks! Your request has been successfully submitted. Here are the details";
  message.className = " mb-6 text-center text-[#585E6D]";
  message.fontSize = 16;
  message.textWrap = true;

  // Details grid - now simpler with just values
  const details = new StackLayout();
  details.className = "mb-6";

  const addDetail = (value: string) => {
    const lbl = new Label();
    lbl.text = value;
    lbl.fontSize = 18;
    lbl.textWrap = true;
    lbl.className = "mb-5 text-black";
    details.addChild(lbl);
  };

  addDetail(`📍 ${data.pickupAddress}`);
  addDetail(`📅 ${formatDateTime(data.pickupDate, data.pickupTime)}`);
  addDetail(`🗑️ Household Waste`);
  if (data.additionalDate) {
    addDetail(`📝 ${data.additionalDate}`);
  }

  // Action buttons (like in your second image)
  const buttonContainer = new StackLayout();
  buttonContainer.className = "mt-4";

  const actionButton = new Button();
  actionButton.text = "Go to Dashboard";
  actionButton.className =
    "w-full flex items-center rounded-xl bg-[#54B469] text-white";
  actionButton.fontSize = 20;
  actionButton.on("tap", async () => {
    try {
      // Close the popup first
      await getRootLayout().close(layout);
      // Then navigate to home
      $navigateTo(Home, {
        clearHistory: true, // Optional: clears navigation history
      });
    } catch (error) {
      console.log("Error closing popup or navigating:", error);
      console.error("Navigation error:", error);
    }
  });

  // const closeButton = new Button();
  // closeButton.text = "Go to Dashboard";
  // closeButton.className = "bg-blue-500 text-white";
  // closeButton.on("tap", () => getRootLayout().close(layout));
  // GridLayout.setColumn(closeButton, 1);
  // GridLayout.setRow(closeButton, 0);

  buttonContainer.addChild(actionButton);
  // buttonContainer.addChild(closeButton);

  // Build the layout
  layout.addChild(handle);
  layout.addChild(title);
  layout.addChild(message);
  layout.addChild(details);
  layout.addChild(buttonContainer);

  return layout;
}

function formatDateTime(date: Date, time: Date): string {
  return `${date.toLocaleDateString()}, ${time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
}
