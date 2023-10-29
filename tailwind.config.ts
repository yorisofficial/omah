import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "primary": "#F58634",
      "black": "#1B2021",
      "disable": "#828282",
      "white":"#FFFFFF"
    }
  },
  plugins: [],
}
export default config
