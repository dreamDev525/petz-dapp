import React, { useState, useEffect, Fragment } from "react"
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { useMemo } from 'react'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import {
	BackpackWalletAdapter,
	BraveWalletAdapter,
	CoinbaseWalletAdapter,
	FractalWalletAdapter,
	GlowWalletAdapter,
	LedgerWalletAdapter,
	PhantomWalletAdapter,
	SlopeWalletAdapter,
	SolflareWalletAdapter,
	TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'
import AOS from 'aos'

require('@solana/wallet-adapter-react-ui/styles.css')
import 'aos/dist/aos.css'
import '../public/css/styles.css'


function MyApp({ Component, pageProps }: AppProps) {
	const network = process.env.NEXT_PUBLIC_SOLANA_NETWORK! as WalletAdapterNetwork
	const endpoint = process.env.NEXT_PUBLIC_SOLANA_RPC_HOST!

	const wallets = useMemo(
		() => [
			new BraveWalletAdapter(),
			new PhantomWalletAdapter(),
			new BackpackWalletAdapter(),
			new SolflareWalletAdapter({ network }),
			new CoinbaseWalletAdapter(),
			new SlopeWalletAdapter(),
			new FractalWalletAdapter(),
			new GlowWalletAdapter({ network }),
			new LedgerWalletAdapter(),
			new TorusWalletAdapter({ params: { network, showTorusButton: false } }),
		],
		[network]
	)

	useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side")
		if (jssStyles) jssStyles.parentElement?.removeChild(jssStyles)

		AOS.init({
			offset: 100,
			disable: 'mobile'
		})
	}, [])


	return (
		<Fragment>
			<ConnectionProvider endpoint={endpoint} config={{ confirmTransactionInitialTimeout: 1200000 }}>
				<WalletProvider wallets={wallets} autoConnect={true}>
					<WalletModalProvider>
						<Head>
							<title>My page</title>
							<meta
								name="viewport"
								content="minimum-scale=1, initial-scale=1, width=device-width"
							/>
						</Head>
						<ThemeProvider theme={theme}>
							<CssBaseline />

							<Component {...pageProps} />
						</ThemeProvider>
					</WalletModalProvider>
				</WalletProvider>
			</ConnectionProvider>
		</Fragment>
	)
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
}


export default MyApp