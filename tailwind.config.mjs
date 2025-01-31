/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "darkShade1":"#070708",
        "darkShade2":"#0E0E10",
        "darkShade3":"#131316",
        "darkShade4":"#232329",
        "grayshade1":"#62646C",
        "grayshade2":"#AFB0B6",
        "grayshade3":"#F7F7F8",
        "grayshade4":"#FCFCFD",
        "purpleshade1":"#4A2CED",
        "purpleshade2":"#8672F3",
      },
    },
  },
  plugins: [],
};
