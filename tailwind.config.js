/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
				Osan: ["Open Sans", 'sans-serif'],
				Papri: ["Paprika", 'system-ui'],
				Robot: ["Roboto", 'sans-serif'],
			},
			maxWidth: {
				'container': '1320px',
			},
    },
  },
  plugins: [],
}