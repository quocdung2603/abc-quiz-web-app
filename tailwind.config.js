/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "heading-1": ["2.5rem", { lineHeight: "3rem", fontWeight: "700" }],
        "heading-2": ["2rem", { lineHeight: "2.5rem", fontWeight: "700" }],
        "heading-3": ["1.5rem", { lineHeight: "2rem", fontWeight: "600" }],
        body: ["1rem", { lineHeight: "1.5rem", fontWeight: "400" }],
        caption: ["0.875rem", { lineHeight: "1.25rem", fontWeight: "400" }],
      },
      colors: {
        primary: {
          DEFAULT: "#2563eb",
          light: "#3b82f6",
          dark: "#1e40af",
        },
        secondary: {
          DEFAULT: "#64748b",
          light: "#94a3b8",
          dark: "#334155",
        },
        accent: {
          DEFAULT: "#06b6d4",
          light: "#67e8f9",
          dark: "#0e7490",
        },
        background: {
          DEFAULT: "#f8fafc",
          dark: "#1e293b",
          gradient: "linear-gradient(90deg, #2563eb 0%, #06b6d4 100%)",
        },
        white: "#fff",
        black: "#000",
        danger: "#ef4444",
        success: "#22c55e",
        warning: "#f59e42",
      },
      spacing: {
        xs: "0.5rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "3rem",
      },
      borderRadius: {
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(37, 99, 235, 0.05)",
        md: "0 4px 8px 0 rgba(37, 99, 235, 0.10)",
        lg: "0 8px 24px 0 rgba(37, 99, 235, 0.15)",
        neon: "0 0 8px #06b6d4, 0 0 16px #2563eb",
      },
      transitionProperty: {
        default:
          "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
      },
    },
  },
  plugins: [],
};
