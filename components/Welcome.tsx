import { Grid, Typography, Container } from '@material-ui/core'
import { Link } from 'react-scroll'
import { makeStyles } from '@material-ui/core/styles'

import theme from '../theme'


const useStyles = makeStyles(theme => ({
	container: {
		marginBottom: 50
	},
	btn: {
		fontSize: 18,
		fontWeight: 800,
		color: theme.palette.secondary.main,
		backgroundColor: '#0E2023',
		boxShadow: '0px 0px 25px rgba(19, 255, 156, 0.5)',
		borderRadius: 8,
		padding: '16px 63px',
		textTransform: 'none',
		fontFamily: "'NeueMachinaUltrabold'",
		cursor: 'pointer',
		width: 'min-content',
		'&:hover': {
			backgroundColor: '#0E2023',
			color: theme.palette.primary.main
		},
		'@media (max-width:960px)': {
			width: '100%'
		}
	}
}))


const Welcome = () => {
	const classes = useStyles()


	return (
		<Container maxWidth='lg' className={classes.container} id='welcome'>
			<Grid container spacing={6}>
				<Grid item md={6} container alignItems='center' data-aos='fade-right'>
					<div style={{ width: '100%', justifyContent: 'center' }}>
						<Typography variant='h1' style={{ marginBottom: 80 }}>
							Be Part of <br />
							<span style={{ color: theme.palette.primary.main }}>PETZ!</span>
						</Typography>

						<Link className={classes.btn} to='about' smooth={true}>Explore</Link>
					</div>
				</Grid>

				<Grid item md={6} data-aos='fade-left'>
					<img src='img/1.png' style={{ width: '100%' }} />
				</Grid>
			</Grid>
		</Container>
	)
}


export default Welcome