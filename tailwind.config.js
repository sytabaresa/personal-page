module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans']
    }
    // extend: {
    //   colors: {
    //     primary: '#ffcc00'
    //   }
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography')
  ],
  daisyui: {
    themes: [
      // 'black',
      // 'cyberpunk',
      {
        'syta': {
          "primary": "#ffcc00",
          "primary-focus": "#cca300",
          "primary-content": "#ffffff",
          "secondary": "#ffdd55",
          "secondary-focus": "#ddb100",
          "secondary-content": "#ffffff",
          "accent": "#d99330",
          "accent-focus": "#b57721",
          "accent-content": "#ffffff",
          "neutral": "#110e0e",
          "neutral-focus": "#060404",
          "neutral-content": "#ffffff",
          "base-100": "#171212",
          "base-200": "#110e0e",
          "base-300": "#060404",
          "base-content": "#ffffff",
          "--rounded-btn": "1.9rem",
          "info": "#66c6ff",
          "success": "#87d039",
          "warning": "#e2d562",
          "error": "#ff6f6f",
          "--rounded-btn": "0",
          "--rounded-badge": "0",
          "--tab-radius": "0",
          "--animation-btn": "0",
          "--animation-input": "0",
          "--btn-focus-scale": "1",
          "--btn-text-case": "lowercase"
        },
      },
    ],
  },
}