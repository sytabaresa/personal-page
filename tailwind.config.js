module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans'],
      mono: ['Electrolize', 'monospace']
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ffcc00',
          focus: '#cca300',
          content: '#ffffff'
        },
        secondary: {
          DEFAULT: "#ffdd55",
          focus: "#ddb100",
          content: "#ffffff",
        },
        accent: {
          DEFAULT: "#d99330",
          focus: "#b57721",
          content: "#ffffff",
        },
        neutral: {

          DEFAULT: "#110e0e",
          focus: "#060404",
          content: "#ffffff",
        },
        base: {
          100: "#171212",
          200: "#110e0e",
          300: "#060404",
          content: "#ffffff",
        },
        info: "#66c6ff",
        success: "#87d039",
        warning: "#e2d562",
        error: "#ff6f6f",
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('daisyui'),
    require('@tailwindcss/typography'),
    require('tailwindcss-filters')
  ],
  // daisyui: {
  //   themes: [
  //     // 'black',
  //     // 'cyberpunk',
  //     {
  //       'syta': {
  //         "primary": "#ffcc00",
  //         "primary-focus": "#cca300",
  //         "primary-content": "#ffffff",
  //         "secondary": "#ffdd55",
  //         "secondary-focus": "#ddb100",
  //         "secondary-content": "#ffffff",
  //         "accent": "#d99330",
  //         "accent-focus": "#b57721",
  //         "accent-content": "#ffffff",
  //         "neutral": "#110e0e",
  //         "neutral-focus": "#060404",
  //         "neutral-content": "#ffffff",
  //         "base-100": "#171212",
  //         "base-200": "#110e0e",
  //         "base-300": "#060404",
  //         "base-content": "#ffffff",
  //         "info": "#66c6ff",
  //         "success": "#87d039",
  //         "warning": "#e2d562",
  //         "error": "#ff6f6f",
  //         "--rounded-btn": "0",
  //         "--rounded-badge": "0",
  //         "--tab-radius": "0",
  //         "--animation-btn": "0",
  //         "--animation-input": "0",
  //         "--btn-focus-scale": "1",
  //         "--btn-text-case": "lowercase"
  //       },
  //     },
  //   ],
  // },
}