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
        background: "#f9fbfa",
        foreground: "#0c1310",
        primary: "#7db59a",
        secondary: "#aabeca",
        content1: "#8292b0",
      },
    },
    dark: {
      layout: {},
      colors: {
        background: "#040605",
        foreground: "#ecf3f0",
        primary: "#4a8267",
        secondary: "#354955",
        content1: "#4f5f7d",
      },
    },
  },
});
