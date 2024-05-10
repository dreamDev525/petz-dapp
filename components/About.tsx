import { Grid, Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
	container: {
		borderTop: '1px solid rgba(19, 255, 213, 0.5)',
		borderBottom: '1px solid rgba(19, 255, 213, 0.5)',
		backgroundSize: 'auto 100%',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'right center',
		'@media (max-width:960px)': {
			backgroundImage: 'none'
		}
	},
	title: {
		color: theme.palette.primary.main,
		marginBottom: 50
	},
	paddingContainer: {
		paddingTop: 100,
		paddingBottom: 100,
		'@media (max-width:960px)': {
			paddingTop: 50,
			paddingBottom: 50
		}
	},
	mobileContent: {
		'@media (min-width:960px)': {
			display: 'none'
		},
		'@media (max-width:960px)': {
			display: 'block'
		}
	},
}))


const About = () => {
	const classes = useStyles()

	return (
		<div className={classes.container} id='about'>
			<Container maxWidth='lg' className={classes.paddingContainer}>
				<Grid container spacing={6} data-aos='zoom-in'>
					<Grid item md={6}>
						<Typography variant='h2' className={classes.title}>About us</Typography>

						<Typography variant='caption'>
							We're introducing an exclusive collection of <b>4,444</b> NFTs, each representing a pet with its own unique story. This isn't just a collection. It's a journey through storytelling, technology, and history. <br /><br />
							Embark on an unparalleled adventure with <b>"Petz"</b> where we unravel the extraordinary evolution of our pets into unique species, each undergoing a remarkable transformation in appearance, intelligence, and their newfound magical abilities. They've reached into the very heart of existence, uncovering secrets of life itself with enchanting narratives.
						</Typography>
					</Grid>
					<Grid item md={6}>
						<Grid container spacing={4}>
							<Grid item xs={6}>
								<img src='img/about1.png' width='100%' />
							</Grid>
							<Grid item xs={6}>
								<img src='img/about2.png' width='100%' />
							</Grid>
							<Grid item xs={6}>
								<img src='img/about3.png' width='100%' />
							</Grid>
							<Grid item xs={6}>
								<img src='img/about4.png' width='100%' />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</div>
	)
}

export default About