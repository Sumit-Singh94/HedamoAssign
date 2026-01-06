/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ADBDBA",
        background: "#EDE8F5",
        text: "#2D3748",
        border: "#CBD5E0"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        card: "0 6px 24px rgba(22, 23, 26, 0.06)"
      }
    }
  },
  plugins: []
};
