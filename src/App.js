import dotenv from 'dotenv'
import { useEffect, useMemo, useState } from 'react'
import { useWeb3 } from '@3rdweb/hooks'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { UnsupportedChainIdError } from '@web3-react/core'
import { ethers } from 'ethers'
import { Page, Grid, Image, Spacer, Text } from '@geist-ui/react'
import ConnectWallet from './components/ConnectWallet'
import CreateSubmission from './components/CreateSubmission'
import DAOGallery from './components/DAOGallery'

// const process = dotenv.config()
// console.log(process.env)

const sdk = new ThirdwebSDK('rinkeby') //* Needs to change to the Polygon network

// const bundleDropModule = sdk.getBundleDropModule(process.env.BUNDLE_DROP_MODULE);
// const tokenModule = sdk.getTokenModule(process.env.TOKEN_MODULE);
// const voteModule = sdk.getVoteModule(process.env.VOTE_MODULE);

const App = () => {
	const { connectWallet, address, error, provider } = useWeb3()
	console.log('Hi Address:', address)

	const signer = provider ? provider.getSigner() : undefined

	useEffect(() => {
		sdk.setProviderOrSigner(signer)
	}, [signer])

	if (error instanceof UnsupportedChainIdError) {
		return (
			<Page>
				<Grid.Container gap={2} justify='center'>
					<Spacer h={4} />
					<Grid xs={24}>
						<Image width='540px' height='160px' src='/Crypt0GrafflLogo.png' />
					</Grid>
					<Grid xs={24} direction='column' alignItems='center'>
						<Text h2>Please connect to Polygon Mumbai Testnet</Text>
						<Text p>
							This dapp only works on the Polygon testnet network, please switch
							networks in your connected wallet.
						</Text>
					</Grid>
				</Grid.Container>
			</Page>
		)
	}

	return (
		<Page>
			<Grid.Container gap={2} justify='center'>
				<Spacer h={4} />
				<Grid xs={24}>
					<Image width='540px' height='160px' src='/Crypt0GrafflLogo.png' />
				</Grid>
				{/* {!address ?
          <ConnectWallet
            connectWallet={connectWallet}
          />
        :
          <CreateSubmission />
        } */}
				<CreateSubmission />
			</Grid.Container>
		</Page>
	)
}

export default App
