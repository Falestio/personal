import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        mono: ["Menlo", "Monaco", "Courier New", "monospace"],
      },
      colors: {
        primary: "689a60",
        "fruit-salad": {
          "50": "#f5f9f4",
          "100": "#e9f1e7",
          "200": "#d2e3cf",
          "300": "#aecca9",
          "400": "#83ac7c",
          "500": "#689a60",
          "600": "#4c7445",
          "700": "#3e5c39",
          "800": "#354a31",
          "900": "#2c3e29",
          "950": "#152013",
        },
      },
    },
  },
};
