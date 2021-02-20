module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
			colors: {
				main: {
					DEFAULT: '#BFD7EA'
				},
				secondary: {
					DEFAULT: '#508CA4'
				},
				tertiary: {
					DEFAULT: '#91AEC1'
				}
			}
		},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
