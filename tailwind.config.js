/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: '#0a0a0f',
        surface: '#111118',
        card: '#16161f',
        border: '#1e1e2e',
        accent: '#6ee7b7',
        'accent-dim': '#10b981',
        muted: '#4b5563',
        dim: '#64748b',
        soft: '#94a3b8',
        light: '#e2e8f0',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite reverse',
        marquee: 'marquee 22s linear infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
    },
  },
  plugins: [],
}
