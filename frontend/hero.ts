// hero.ts
import { heroui } from "@heroui/react";
export default heroui({
  prefix: "heroui",
  addCommonColors: false,
  defaultTheme: "light",
  defaultExtendTheme: "dark",
  layout: {},
  themes: {
    light: {
      layout: {},
      colors: {
        background: "#e2eef8",
        foreground: "#111d17",
        primary: "#7db599",
        secondary: "#aabeca",
        content1: "#8292b0",
      },
    },
    dark: {
      layout: {},
      colors: {
        background: "#07131d",
        foreground: "#e2eee8",
        primary: "#4a8266",
        secondary: "#354955",
        content1: "#4f5f7d",
      },
    },
  },
});
