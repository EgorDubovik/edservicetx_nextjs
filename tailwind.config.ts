import type { Config } from "tailwindcss";

export default {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./sections/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         container: {
            center: true,
            padding: "1rem",
            screens: {
               sm: "640px",
               md: "768px",
               lg: "1024px",
               xl: "1280px",
               "2xl": "1280px",
            },
         },
      },
   },
   plugins: [],
} satisfies Config;
