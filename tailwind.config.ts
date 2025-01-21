import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			'interstate-blackcondensed': [
  				'interstate-blackcondensed',
  				'Arial'
  			]
  		},
  		backgroundImage: {
  			'custom-gradient': "linear-gradient(180deg, rgba(255,138,111,1) 40%, rgba(255,124,106,1) 54%, rgba(255,100,98,1) 67%, rgba(255,85,93,1) 79%, rgba(255,67,87,1) 89%), url('/assets/images/bg-pattern-intro-desktop.svg')",
			"editor-bg" : " url('/assets/images/illustration-editor-desktop.svg') "
		},
  		colors: {
        "bg-pink": "#ff6462",
        "black-light": "#2a3d5a",
        "bg-purple": "#3b3c5b",
        "bg-footer": "#28242c",
        "gray-text": "#808187"
      },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
