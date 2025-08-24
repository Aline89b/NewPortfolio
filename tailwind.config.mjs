/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend:  {
			 colors: {
        brazil: {
          green: "#009739",
          yellow: "#FFCC29",
          blue: "#3E4095",
          white: "#FFFFFF",
        },
      },	
			
		  },
	},
	plugins: [
		require("daisyui"),
		require('tailwindcss-3d')({ legacy: true })
	
	],
}
