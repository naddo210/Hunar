/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Emerald Editorial Official Palette Tokens
        emerald: {
          DEFAULT: '#174D3A', // Primary brand color
          dark: '#10372A',
          deep: '#0B281E',
          light: '#236C52',
          surface: '#E8EFEA',
          subtle: 'rgba(23, 77, 58, 0.08)',
        },
        cream: {
          DEFAULT: '#F3EDE1', // Primary background
          light: '#FAF7F2',
          pure: '#FCFBF8',
          dark: '#E7DEC9',
          muted: '#DED3BA',
        },
        charcoal: {
          DEFAULT: '#20231F', // Main typography
          soft: '#363A34',
          muted: '#5F645B',
          light: '#767C71',
        },
        olive: {
          DEFAULT: '#737747', // Secondary accent
          light: '#8E945A',
          dark: '#585C34',
          subtle: 'rgba(115, 119, 71, 0.12)',
        },
        beige: {
          DEFAULT: '#D8C8AE', // Borders and decorative details
          light: '#E6DCCB',
          soft: '#F0E8DC',
          dark: '#C2AF91',
        },
        sage: {
          DEFAULT: '#A5AA91', // Subtle secondary backgrounds
          light: '#C2C6B3',
          soft: '#ECEEE6',
          dark: '#858A71',
        },
        white: '#FFFFFF',     // Clean surfaces

        // Backward compatibility mappings
        canvas: '#F3EDE1',
        surface: {
          DEFAULT: '#FFFFFF',
          card: '#FFFFFF',
          elevated: '#FAF7F2',
        },
        ivory: {
          DEFAULT: '#F3EDE1',
          warm: '#FAF7F2',
          light: '#FFFFFF',
          text: '#20231F',
        },
        plum: {
          DEFAULT: '#174D3A',
          soft: '#20231F',
          deep: '#10372A',
        },
        taupe: {
          DEFAULT: '#D8C8AE',
          light: '#E6DCCB',
          dark: '#C2AF91',
        },
        terracotta: {
          DEFAULT: '#174D3A',
          light: '#737747',
          hover: '#10372A',
          subtle: 'rgba(23, 77, 58, 0.08)',
        },
        amber: {
          DEFAULT: '#737747',
          hover: '#585C34',
          subtle: 'rgba(115, 119, 71, 0.12)',
          glow: 'rgba(23, 77, 58, 0.25)',
        },
        stone: {
          50: '#FAF8F5',
          100: '#F3EDE1',
          200: '#E7DEC9',
          300: '#D8C8AE',
          400: '#A5AA91',
          500: '#737747',
          600: '#5F645B',
          700: '#363A34',
          800: '#20231F',
          900: '#174D3A',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Outfit"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"Syne"', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0.08em',
        widest: '0.18em',
      },
      lineHeight: {
        editorial: '1.7',
      },
      boxShadow: {
        subtle: '0 1px 3px 0 rgba(32, 35, 31, 0.05)',
        card: '0 4px 20px -2px rgba(32, 35, 31, 0.06)',
        elevated: '0 20px 40px -15px rgba(23, 77, 58, 0.12)',
        emerald: '0 4px 20px -4px rgba(23, 77, 58, 0.25)',
      },
    },
  },
  plugins: [],
}
