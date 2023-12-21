/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./node_modules/flowbite/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mobile-landing": "url('/mobile/mobile-background.png')"
      },
      fontFamily: {
        "carot": "Carot Display",
        "operina": "P22 Operina Pro",
        "museo": "Museo Sans"
      },
      colors: {
        "black-sidebar": "#1E1E1E",
        "paragraph-black": "#393939",
        "paragraph-subheading": "#7B7777"
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}
