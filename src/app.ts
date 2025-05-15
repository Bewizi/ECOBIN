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
app.start();
