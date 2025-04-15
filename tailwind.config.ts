import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ['beige-500']: '#98908B',
        ['beige-100']: '#F8F4F0',
        ['grey-900']: '#201F24',
        ['grey-500']: '#696868',
        ['grey-300']: '#B3B3B3',
        ['grey-100']: '#F2F2F2',
        green: '#277C78',
        yellow: '#F2CDAC',
        cyan: '#82C9D7',
        navy: '#626070',
        red: '#C94736',
        ['purple-500']: '#826CB0',
        ['purle-100']: '#F2F2F2',
        turquoise: '#597C7C',
        brown: '#93674F',
        magenta: '#934F6F',
        blue: '#3F82B2',
        ['navy-grey']: '#97A0AC',
        ['army-green']: '#7F9161',
        gold: '#CAB361',
        orange: '#BE6C49',
        white: '#FFFFFF',
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
      },
      boxShadow: {
        'custom-lg': '0px 4px 24px 0px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        'public-sans': ['var(--font-public-sans)'],
      },
      // borderRadius: {
      //   lg: 'var(--radius)',
      //   md: 'calc(var(--radius) - 2px)',
      //   sm: 'calc(var(--radius) - 4px)',
      // },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
