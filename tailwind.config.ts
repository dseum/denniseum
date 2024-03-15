import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: ['./lib/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-eb-garamond)', ...fontFamily.serif],
        mono: ['var(--font-jetbrains-mono)', ...fontFamily.mono],
        sans: ['var(--font-inter)', ...fontFamily.sans],
        neutral: ['Neutral Face'],
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
export default config
