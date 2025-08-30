/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brazil: {
          green: "#009739",
          yellow: "#FFCC29",
          blue: "#3E4095",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        // Font globale leggibile per il portfolio
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      fontSize: {
        // font-size base con line-height per viewport
        base: ['16px', '24px'],      // mobile
        lg: ['18px', '28px'],        // tablet
        xl: ['20px', '30px'],        // desktop
        '2xl': ['24px', '32px'],     // desktop grande
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('tailwindcss-3d')({ legacy: true }),
  ],
}
