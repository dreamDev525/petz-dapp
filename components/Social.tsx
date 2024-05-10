import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { Twitter } from '@material-ui/icons'
import { Icon } from '@iconify/react'

import { socialMedia } from '../data/socialMedia'


const useStyles = makeStyles((theme) => ({
	snsIcon: {
		width: 55,
		height: 55,
		color: theme.palette.secondary.main,
		padding: 10,
		border: "2px solid rgba(19, 255, 213, 0.5)",
		borderRadius: "50%",
		"&:hover": {
		color: theme.palette.primary.main,
		},
	}
}))


const Social = () => {
	const classes = useStyles()
	const { twitter, discord } = socialMedia


	return (
		<Grid item container spacing={2} justifyContent='center'>
			<Grid item component={'a'} target='_blank' rel='noreferrer noopener' href={twitter}>
				<Twitter className={classes.snsIcon} color='secondary' />
			</Grid>

			<Grid item component={'a'} target='_blank' rel='noreferrer noopener' href={discord}>
				<Icon icon='mdi:discord' className={classes.snsIcon} color='secondary' />
			</Grid>
		</Grid>
	)
}

export default Social
