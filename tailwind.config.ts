import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: { ink: '#0A0A0A', blue: '#2563FF', soft: '#F6F6F7', muted: '#6B6B70' },
      fontFamily: { serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'] },
      boxShadow: { lift: '0 24px 70px rgba(10,10,10,.08)' }
    }
  },
  plugins: []
}
export default config
