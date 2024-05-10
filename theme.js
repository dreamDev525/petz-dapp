import { createTheme } from '@material-ui/core/styles';


const mainBlack = '#13FF9C';
const mainWhite = '#F8F9FE';
const blue = '#757ce8';


const theme = createTheme({
	palette: {
		common: {
			black: mainBlack,
			white: mainWhite,
			blue: blue
		},
		primary: {
			main: mainBlack
		},
		secondary: {
			main: mainWhite
		},
		info: {
			main: blue
		}
	},
	typography: {
		h1: {
			fontSize: 72,
			fontWeight: 600,
			fontFamily: "'NeueMachinaUltrabold'",
			lineHeight: 1.3,
			display: 'block',
			width: '100%',
			'@media (max-width:960px)': {
				fontSize: 38,
				textAlign: 'center'
			}
		},
		h2: {
			fontSize: 56,
			fontWeight: 800,
			fontFamily: "'NeueMachinaUltrabold'",
			lineHeight: 1.3,
			display: 'block',
			width: '100%',
			'@media (max-width:960px)': {
				fontSize: 32,
				textAlign: 'center'
			}
		},
		h3: {
			fontSize: 24,
			fontWeight: 800,
			lineHeight: 1.3,
			fontFamily: "'NeueMachinaUltrabold'",
			'@media (max-width:960px)': {
				fontSize: 18
			}
		},
		a: {
			color: mainBlack
		},
		caption: {
			fontSize: 20,
			fontFamily: "'NeueMachina'",
			lineHeight: 1.5,
			display: 'block',
			'@media (max-width:960px)': {
				fontSize: 14
			}
		}
	}
});


export default theme;