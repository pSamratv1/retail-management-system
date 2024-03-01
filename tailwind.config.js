/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here

        blue: {
          light: "#E7F3FD",
          light_hover: "#DBEDFC",
          light_active: "#B4D9F9",
          normal: "#0E84ED",
          normal_hover: "#0D77D5",
          normal_active: "#0B6ABE",
          dark: "#0B63B2",
          dark_hover: "#084F8E",
          dark_active: "#063B6b",
          darker: "#052E53",
        },
        green: {
          light: "#F5FAEC",
          light_hover: "#F0F8E3",
          light_active: "#DFF0C5",
          normal: "#99D045",
          normal_hover: "#8ABB3E",
          normal_active: "#7AA637",
          dark: "#739C34",
          dark_hover: "#5C7D29",
          dark_active: "#455E1F",
          darker: "#364918",
        },
        red: {
          light: "#FFECEC",
          light_hover: "#FEE2E2",
          light_active: "#FDC3C3",
          normal: "#FA3E3E",
          normal_hover: "#E13838",
          normal_active: "#C83232",
          dark: "#BC2F2F",
          dark_hover: "#962525",
          dark_active: "#701C1C",
          darker: "581616",
        },
        yellow: {
          light: "#FFF7E6",
          light_hover: "#FFF3D9",
          light_active: "#FFE7B0",
          normal: "#FFB200",
          normal_hover: "#E6A000",
          normal_active: "#CC8E00",
          dark: "#BF8600",
          dark_hover: "#996B00",
          dark_active: "#735000",
          darker: "#593E00",
        },
        black: {
          light: "#E9E9E9",
          light_hover: "#DDDDDD",
          light_active: "#B9B9B9",
          normal: "#1E1E1E",
          normal_hover: "#1B1B1B",
          normal_active: "#181818",
          dark: "#171717",
          dark_hover: "#121212",
          dark_active: "#0D0D0D",
          darker: "#0B0B0B",
        },
        grey: {
          light: "#EDEDED",
          light_hover: "#E4E4E4",
          light_active: "#C7C7C7",
          normal: "#4B4B4B",
          normal_hover: "#444444",
          normal_active: "#3C3C3C",
          dark: "#383838",
          dark_hover: "#2D2D2D",
          dark_active: "#222222",
          darker: "#1A1A1A",
        },
        white: {
          light: "#FFFFFF",
          light_hover: "#FFFFFF",
          light_active: "#FFFFFF",
          normal: "#FFFFFF",
          normal_hover: "#E6E6E6",
          normal_active: "#CCCCCC",
          dark: "#BFBFBF",
          dark_hover: "#999999",
          dark_active: "#737373",
          darker: "#595959",
        },
      },
    },
  },
  plugins: [],
};
