import { createApp } from "nativescript-vue";

import "@/app.css";
import "@nativescript-community/ui-material-snackbar";
import "@nativescript-community/ui-material-core";

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

app.registerElement(
  "HTMLLabel",
  () => require("@nativescript-community/ui-label").Label
);

app.registerElement(
  "LineChart",
  () => require("@nativescript-community/ui-chart").LineChart
);

app.start();
