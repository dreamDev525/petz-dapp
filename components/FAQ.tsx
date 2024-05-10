import * as React from 'react'
import { Container, Typography, Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
	container: {
		backgroundImage: 'url(img/bg2.png)',
		backgroundSize: '100% 100%',
		backgroundPosition: 'bottom right',
		backgroundRepeat: 'no-repeat',
		padding: '100px 0',
		'@media (max-width:960px)': {
			padding: '50px 0'
		}
	},
	title: {
		color: theme.palette.primary.main,
		marginBottom: 100,
		textAlign: 'center',
		'@media (max-width:960px)': {
			marginBottom: 40
		}
	},
	faqContainer: {
		background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.0624) 100%)',
		backdropFilter: 'blur(101px)',
		borderRadius: 28,
		border: '1px solid #13FF9C'
	}
}))

const faqList = [
    {
		question: 'What is an NFT?',
		answer: `NFT stands for ‘non-fungible token. An NFT is basically data that is accounted for in a digital ledger, and that data represents something specific and unique. An NFT can, for example, represent a unique piece of art or a game token.`
    },
    {
		question: 'How can I buy a Vending Machines NFT?',
		answer: 'Connect your wallet, and click on Mint button on this website. Make sure you are on Avalanche Network.'
    },
    {
		question: 'Why buildOn.org foundation?',
		answer: 'We have chosen to support buildOn.org because they build schools, as community we will select which country to build in and members will participate in the process of building.'
    },
    {
		question: 'What is the 10% Minter rewards?',
		answer: 'With this project your ROI starts as you mint. 10% from mint sales evenly distributed to minted NFTs. Minters/Holders can claim their rewards in AVAX anytime they wish.'
    },
    {
		question: 'What is the Shared Royalty rewards?',
		answer: `There is 3% Royalties attached to each sale on our Marketplace, of that 1.5% gets evenly spread to 4444 VMNFTs, and holders can claim their rewards in AVAX anytime they wish.`
    },
    {
		question: 'What do you mean by NFT Airdrops From New Projects?',
		answer: `This Community will produce more NFTs, and will always reserve 4444 for VMN community. As we gear up to metaverse, we will make 'Hoodie/Hat/Shoes.. NFTs to integrate into our Metaverse.`
    },
    {
		question: 'What do you mean by Own land in Metaverse?',
		answer: `This Community will develop its own Metaverse on Avalanche Blockchain, and when that time arrives, VMN holders will recieve land as investors of this project.`
    }
]


const FAQ = () => {
	const classes = useStyles()
	const [ expanded, setExpanded ] = React.useState("")


	const handleChange = (panel: any) => (_: any, isExpanded: any) => {
		setExpanded(isExpanded ? panel : false)
	}


	return (
		<div className={classes.container} id='faq'>
			<Container data-aos='fade-up'>
				<Typography variant='h2' className={classes.title}>
					Frenquently Asked Questions
				</Typography>
				
				<div className={classes.faqContainer}>
					{faqList.map(({ question, answer }, idx) => (
						<Accordion expanded={expanded === `faq${idx}`} onChange={handleChange(`faq${idx}`)} style={{ backgroundColor: 'transparent' }} key={idx}>
							<AccordionSummary expandIcon={<ExpandMoreIcon />} >
								<Typography className='Accordion-title'>{question}</Typography>
							</AccordionSummary>

							<AccordionDetails>
								<Typography variant='caption' className='Accordion-content' dangerouslySetInnerHTML={{ __html: answer }} />
							</AccordionDetails>
						</Accordion>
					))}
				</div>
			</Container>
		</div>
	)
}


export default FAQ