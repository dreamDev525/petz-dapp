import React, { useState, useContext, useEffect } from 'react'
import { Grid, Typography, Button, Container, LinearProgress } from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

import { socialMedia } from '../data/socialMedia'
import theme from '../theme'

const useStyles = makeStyles((theme) => ({
	bg: {
		backgroundImage: 'url(img/bg1.png)',
		backgroundSize: 'auto 100%',
		paddingTop: 150,
		paddingBottom: 150,
		'@media (max-width:960px)': {
			paddingTop: 50,
			paddingBottom: 50
		}
	},
	container: {
		'@media (max-width:960px)': {
			flexFlow: 'column-reverse'
		}
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
		marginTop: 50,
		'&:hover': {
			backgroundColor: '#0E2023',
			color: theme.palette.primary.main
		},
		'@media (max-width:960px)': {
			width: '100%'
		}
	},
	mintContainer: {
		marginTop: 50,
		background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.0624) 100%)',
		backdropFilter: 'blur(101px)',
		borderRadius: 28,
		padding: '35px 25px',
		border: '1px solid #13FF9C',
		'@media (max-width:960px)': {
			marginTop: 25,
			padding: '25px 15px',
			borderRadius: 16
		}
	},
	minusBtn: {
		width: 36,
		height: 36,
		backgroundImage: 'url(img/minus.png)',
		backgroundSize: '100% 100%',
		cursor: 'pointer'
	},
	plusBtn: {
		width: 36,
		height: 36,
		backgroundImage: 'url(img/plus.png)',
		backgroundSize: '100% 100%',
		cursor: 'pointer'
	}
}))


const JoinDiscord = () => {
	const classes = useStyles()
	const { discord } = socialMedia

	return (
		<div className={classes.bg}>
			<Container maxWidth='lg' id='join-discord'>
				<Grid container spacing={6} className={classes.container}>
					<Grid item md={6} data-aos='fade-right'>
						<img src='img/3.png' style={{ width: '100%' }} />
					</Grid>

					<Grid item md={6} container alignItems='center' data-aos='fade-left'>
						<div style={{ width: '100%' }}>
							<Typography variant='h2' style={{ fontWeight: 500 }}>
								<a style={{ color: theme.palette.primary.main }} href={discord} target='_blank'>Join the ecosystem</a>
								<br />
								and mint while you can!
							</Typography>
							<Typography variant='caption' style={{ marginTop: 25 }}>
								Please connect your wallet with the 'Connect Wallet' button on the top of the webpage!
							</Typography>

							<Button className={classes.btn} href={discord} target='_blank'>Join</Button>
						</div>
					</Grid>
				</Grid>
			</Container>
		</div>
	)
}


export default JoinDiscord