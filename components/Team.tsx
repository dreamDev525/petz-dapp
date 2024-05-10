import { Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
	container: {
		paddingTop: 100,
		paddingBottom: 100,
		'@media (max-width:960px)': {
			paddingTop: 50,
			paddingBottom: 50
		}
	},
	title: {
		textAlign: 'center',
		color: theme.palette.primary.main,
		marginBottom: 100,
		'@media (max-width:960px)': {
			marginBottom: 50
		}
	},
	itemContainer: {
		padding: '25px 22px',
		background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.0624) 100%)',
		backdropFilter: 'blur(101px)',
		borderRadius: 28,
		margin: 10,
		minWidth: 140,
		'@media (max-width:960px)': {
			padding: '16px 14px'
		}
	},
	itemTitle: {
		fontSize: 20,
		fontWeight: 800,
		textAlign: 'center',
		marginTop: 25,
		'@media (max-width:960px)': {
			marginTop: 16
		}
	},
	itemDesc: {
		fontSize: 14,
		color: 'rgba(248, 249, 254, 0.5)',
		textAlign: 'center',
		marginTop: 5
	}
}))


const Team = () => {
	const classes = useStyles()


	return (
		<Container maxWidth='lg' className={classes.container} id='team'>
			<Typography variant='h2' className={classes.title} data-aos='fade-down'>Meet the team</Typography>

			<div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }} data-aos='fade-up'>
				<div className={classes.itemContainer}>
					<img src='img/team1.png' style={{ width: '100%' }} />
					<div className={classes.itemTitle}>ROB</div>
					<div className={classes.itemDesc}>Project founder</div>
				</div>

				<div className={classes.itemContainer}>
					<img src='img/team2.png' style={{ width: '100%' }} />
					<div className={classes.itemTitle}>Danny Enyia</div>
					<div className={classes.itemDesc}>Project Manager</div>
				</div>

				<div className={classes.itemContainer}>
					<img src='img/team3.png' style={{ width: '100%' }} />
					<div className={classes.itemTitle}>Zetrø_kiyotaka</div>
					<div className={classes.itemDesc}>Communications</div>
				</div>

				<div className={classes.itemContainer}>
					<img src='img/team4.png' style={{ width: '100%' }} />
					<div className={classes.itemTitle}>Minato</div>
					<div className={classes.itemDesc}>Developer</div>
				</div>

				<div className={classes.itemContainer}>
					<img src='img/team5.png' style={{ width: '100%' }} />
					<div className={classes.itemTitle}>JayJay</div>
					<div className={classes.itemDesc}>Collab Manager</div>
				</div>
			</div>
		</Container>
	)
}


export default Team