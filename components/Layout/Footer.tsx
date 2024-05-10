import { Link } from 'react-scroll'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Container, Grid, Typography } from '@material-ui/core'

import { routes } from '../../data/routes'
import Social from '../Social'


const useStyles = makeStyles(theme => ({
	footer: {
		padding: '50px 0',
		borderBottom: '1px solid rgba(19, 255, 213, 0.5)',
		'@media (max-width:960px)': {
			padding: '25px 0',
		}
	},
	link: {
		fontSize: 18,
		color: theme.palette.secondary.main,
		fontFamily: "'NeueMachina'",
		textAlign: 'center',
		lineHeight: 1.3,
		'&:hover': {
			color: theme.palette.primary.main,
		}
	},
	copylight: {
		textAlign: 'center',
		padding: '25px 0',
	},
	logo: {
		[theme.breakpoints.down('sm')]: {
			width: 50
		}
	}
}))


const Footer = () => {
	const classes = useStyles()
	const path = routes
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.down('sm'))


	return (
		<footer>
			<div className={classes.footer}>
				<Container maxWidth='lg'>
					<Grid container spacing={4} justifyContent='space-between' alignItems='center'>
						{matches
							? <></>

							:
							<Grid item md={9}>
								<Grid container justifyContent='space-between' alignItems='center' spacing={4}>
									<Grid item>
										<Link href='' style={{ textDecoration: 'none' }} to='welcome' duration={2000} spy={true} smooth={true}>
											<img src='img/logo.png' className={classes.logo} width="90" />
										</Link>
									</Grid>
									<Grid item>
										<Grid container spacing={4} alignItems='center'>
											{path.map(({ name, link }) => (
												<Grid item key={name}>
													{link.includes('http')
														? <a href={link} target='_blank' style={{ textDecoration: 'none' }}>
															<Typography
																className={classes.link}
																dangerouslySetInnerHTML={{ __html: name }}
															>
															</Typography>
														</a>

														: <Link href={link} style={{ textDecoration: 'none' }} to={link} duration={2000} spy={true} smooth={true}>
															<Typography
																className={classes.link}
																dangerouslySetInnerHTML={{ __html: name }}
															>
															</Typography>
														</Link>
													}
												</Grid>
											))}
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						}
						<Grid item md={2}>
							<Social />
						</Grid>
					</Grid>
				</Container>
			</div>

			<div>
				<Typography variant='caption' className={classes.copylight}>
					2024 Copyrights © Petz NFT. All rights reserverd.
				</Typography>
			</div>
		</footer>
	)
}

export default Footer