module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			padding: {
				'fluid-video': '56.25%',
			},
			fontFamily: {
				sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
				serif: ['Cardo', 'ui-serif', 'Georgia'],
				mono: ['ui-monospace', 'SFMono-Regular'],
				display: [`'Satisfy' , cursive;`],
				body: ['Open Sans'],
			},
			colors: {
				primary: {
					DEFAULT: '#094067',
					50: '#64B7F1',
					100: '#4DACEF',
					200: '#1E96EB',
					300: '#117AC5',
					400: '#0D5D96',
					500: '#094067',
					600: '#052338',
					700: '#010609',
					800: '#000000',
					900: '#000000',
				},
				secondary: {
					DEFAULT: '#90B4CE',
					50: '#FFFFFF',
					100: '#FFFFFF',
					200: '#FAFCFD',
					300: '#D7E4ED',
					400: '#B3CCDE',
					500: '#90B4CE',
					600: '#6D9CBE',
					700: '#4C84AC',
					800: '#3C6989',
					900: '#2D4E65',
				},
				light: {
					50: '#ffffff',
					100: '#fef9f1',
					200: '#fceed5',
					300: '#f9e3b8',
					400: '#f7d9a1',
					500: '#f5ce84',
					600: '#efaf39',
					700: '#c68610',
					800: '#7b530a',
					900: '#2f2004',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
