import { View, StackLayout } from "@nativescript/core";

// helper to create a popup view
export function createPopupView(
  color: string,
  size: number,
  offset: number
): View {
  const layout = new StackLayout();
  layout.height = size;
  layout.width = size;
  layout.marginTop = offset;
  layout.marginLeft = offset;
  layout.backgroundColor = color;
  layout.borderRadius = 10;
  return layout;
}
