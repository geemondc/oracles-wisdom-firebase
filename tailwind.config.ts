import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        headline: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        code: ['"Source Code Pro"', 'monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        'shooting-star': {
          '0%': { transform: 'translateX(150vw) translateY(-50vh) rotate(-45deg)', opacity: '1' },
          '100%': { transform: 'translateX(-50vw) translateY(150vh) rotate(-45deg)', opacity: '0' },
        },
        'float-cloud': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(150vw)' },
        },
        'fly-paper-plane': {
          '0%': { transform: 'translateX(-20vw) translateY(0) scale(0.8) rotate(20deg)', opacity: '1' },
          '25%': { transform: 'translateX(20vw) translateY(-10vh) scale(1) rotate(0deg)' },
          '50%': { transform: 'translateX(60vw) translateY(5vh) scale(0.9) rotate(-20deg)' },
          '75%': { transform: 'translateX(100vw) translateY(-5vh) scale(1) rotate(0deg)' },
          '100%': { transform: 'translateX(120vw) translateY(0) scale(0.8) rotate(20deg)', opacity: '1' },
        },
        shine: {
          from: { transform: 'translateX(-100%) rotate(20deg)', opacity: '0.4' },
          to: { transform: 'translateX(100%) rotate(20deg)', opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        twinkle: 'twinkle 4s ease-in-out infinite',
        'shooting-star': 'shooting-star 15s ease-in-out infinite',
        'float-cloud': 'float-cloud 80s linear infinite',
        'fly-paper-plane': 'fly-paper-plane 25s linear infinite',
        shine: 'shine 1s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
