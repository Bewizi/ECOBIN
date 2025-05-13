import { Frame } from "@nativescript/core";

export const getMainFrame = (): Frame => {
  const frame = Frame.topmost();
  if (!frame) {
    throw new Error("No frame found");
  }
  return frame;
};

export const navigate = (to: string, options = {}) => {
  const frame = getMainFrame();
  frame.navigate({
    moduleName: to,
    ...options,
  });
};
