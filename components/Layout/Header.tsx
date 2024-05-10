import React, { useState, useContext } from 'react'
import { Link } from 'react-scroll'
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, AppBar, Toolbar, Typography, List, ListItem, ListItemText, SwipeableDrawer, IconButton, Container, Button } from '@material-ui/core'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import MenuIcon from '@material-ui/icons/Menu'
import { routes } from '../../data/routes'

function ElevationScroll(props: { children: React.ReactElement }) {
	const { children } = props

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	})

	return React.cloneElement(children as React.ReactElement<any>, { elevation: trigger ? 4 : 0 })
}


const useStyles = makeStyles((theme) => ({
	appBar: {
		backgroundColor: 'transparent'
	},
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: '5em',
		[theme.breakpoints.down('md')]: {
			marginBottom: '4em'
		},
		[theme.breakpoints.down('xs')]: {
			marginBottom: '2em'
		},
	},
	logo: {
		[theme.breakpoints.down('sm')]: {
			width: 50
		},
	},
	drawerIconContainer: {
		marginLeft: 'auto',
		padding: 0,
		'&:hover': {
			backgroundColor: 'transparent'
		},
	},
	drawerIcon: {
		height: '50px',
		width: '50px',
		color: '#fff',
		[theme.breakpoints.down('xs')]: {
			height: '40px',
			width: '40px'
		},
	},
	drawer: {
		backgroundColor: theme.palette.secondary.main,
		padding: '0 6em'
	},
	link: {
		fontSize: 18,
		color: theme.palette.secondary.main,
		fontFamily: "'NeueMachina'",
		textAlign: 'center',
		lineHeight: 1.3,
		[theme.breakpoints.down('sm')]: {
			color: 'black'
		},
		'&:hover': {
			color: theme.palette.primary.main
		},
	},
	btn: {
		fontSize: 18,
		fontWeight: 800,
		color: theme.palette.primary.main,
		border: '1px solid #13FF9C',
		borderRadius: 8,
		padding: '14px 24px',
		textTransform: 'none',
		fontFamily: "'NeueMachinaUltrabold'",
		'&:hover': {
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.secondary.main
		},
		'@media (max-width:960px)': {
			width: '100%'
		}
	}
}))


const Header = () => {
	const classes = useStyles()
	const theme = useTheme()
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
	const matches = useMediaQuery(theme.breakpoints.down("sm"))

	const [openDrawer, setOpenDrawer] = useState(false)
	const path = routes


	const tabs = (
		<Grid container justifyContent='space-between' alignItems="center" spacing={4}>
			<Grid item>
				<Grid container spacing={5}>
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

			<Grid item>
				<WalletMultiButton className={classes.btn} />
			</Grid>
		</Grid>
	)

	const drawer = (
		<>
			<SwipeableDrawer
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				onOpen={() => setOpenDrawer(true)}
				classes={{ paper: classes.drawer }}
				anchor='right'
			>
				<div className={classes.toolbarMargin} />

				<List disablePadding>
					{path.map(({ name, link }) => (
						<ListItem
							key={name}
							divider
							button
							onClick={() => {
								setOpenDrawer(false)
							}}
						>
							<ListItemText disableTypography>
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
							</ListItemText>
						</ListItem>
					))}
				</List>
			</SwipeableDrawer>

			<IconButton
				onClick={() => setOpenDrawer(!openDrawer)}
				disableRipple
				className={classes.drawerIconContainer}
			>
				<MenuIcon className={classes.drawerIcon} />
			</IconButton>
		</>
	)


	return (
		<>
			<ElevationScroll>
				<AppBar className={classes.appBar}>
					<Container>
						<Toolbar
							disableGutters
							style={{
								margin: '0 auto',
								width: '100%',
								padding: matches ? '10px 0' : '20px 0',
							}}
						>
							{matches ? drawer : tabs}
						</Toolbar>
					</Container>
				</AppBar>
			</ElevationScroll>

			<div className={classes.toolbarMargin} />
		</>
	)
}


export default Header