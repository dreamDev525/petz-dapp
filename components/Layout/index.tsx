import type { NextPage } from "next"
import Header from './Header'
import Footer from './Footer'

import Head from 'next/head'

interface Props {
	children: React.ReactNode,
	title: string,
	description: string,
	ogImage?: string,
	url?: string
}

const Layout: NextPage<Props> = ({ children, title, description, ogImage, url }) => {
	const pageUrl = 'https://petz-nft.vercel.app/'
	const ogImg = 'https://petz-nft.vercel.app/img/logo.png'


	return (
		<>
			<Head>
				<title>
					{title
						? title
						: 'Template - Next.js and Material-UI with Header and Footer'
					}
				</title>

				<meta
					name='description'
					key='description'
					content={
						description
							? description
							: 'This is a Template using Next.js and Material-UI with Header and Footer.'
					}
				/>

				<meta
					property='og:title'
					content={
						title
							? title
							: 'Template - Next.js and Material-UI with Header and Footer'
					}
					key='og:title'
				/>

				<meta property='og:url' content={url ? url : pageUrl} key='og:url' />

				<meta
					property='og:image'
					content={ogImage ? ogImage : ogImg}
					key='og:image'
				/>

				<meta
					property='og:description'
					content={
						description
							? description
							: 'This is a Template using Next.js and Material-UI with Header and Footer.'
					}
					key='og:description'
				/>

				<meta
					property='twitter:title'
					content={
						title
							? title
							: 'Template - Next.js and Material-UI with Header and Footer'
					}
					key='twitter:title'
				/>

				<meta property='twitter:url' content={url ? url : pageUrl} key='twitter:url' />
				<meta property='twitter:site_name' content={url ? url : pageUrl} key='twitter:site_name' />

				<meta
					property='twitter:image'
					content={ogImage ? ogImage : ogImg}
					key='twitter:image'
				/>

				<meta
					property='twitter:description'
					content={
						description
							? description
							: 'This is a Template using Next.js and Material-UI with Header and Footer.'
					}
					key='twitter:description'
				/>
			</Head>

			<Header />

			<main>
				{children}
			</main>

			<Footer />
		</>
	)
}


export default Layout