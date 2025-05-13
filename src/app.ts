import { createApp } from "nativescript-vue";

import "@/app.css";

import App from "@/App.vue";

const app = createApp(App);

app.registerElement(
  "CheckBox",
  () => require("@nativescript-community/ui-checkbox").CheckBox,
  {
    model: {
      prop: "checked",
      event: "checkedChange",
    },
  }
);
app.start();
