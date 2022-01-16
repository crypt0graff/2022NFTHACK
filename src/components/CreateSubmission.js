import { Button, Text, Grid, Input, Spacer } from '@geist-ui/react'
import { useState, useCallback } from 'react'
import { create } from 'ipfs-http-client'
import ConnectWallet from './ConnectWallet'

import { useWeb3 } from '@3rdweb/hooks'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { ethers } from 'ethers'

const sdk = new ThirdwebSDK('rinkeby')

const drop = sdk.getDropModule('0xF67A4d579f22ef3B2B64E6D073FEfA994E79958F')

const client = create('https://ipfs.infura.io:5001/api/v0')

const CreateSubmission = (props) => {
	const [fileUrl, setFileUrl] = useState(``)
	const [tag, setTag] = useState(``)
	const [location, setLocation] = useState(``)

	const [ipfsUrl, setIpfsUrl] = useState(``)

	const onChange = useCallback(
		async (e) => {
			const file = e.target.files[0]

			try {
				const added = await client.add(file, {
					progress: (prog) => console.log(`received: ${prog}`),
				})
				const url = `https://ipfs.infura.io/ipfs/${added.path}`
				setFileUrl(url)

				console.log(url)
				drop.lazyMintNft(url)
			} catch (error) {
				console.log('Error uploading file: ', error)
			}
		},
		[fileUrl]
	)

	const onTagChange = useCallback(
		(e) => {
			setTag(e.target.value)
		},
		[tag]
	)

	const onLocationChange = useCallback(
		(e) => {
			setLocation(e.target.value)
		},
		[location]
	)

	const onSubmit = async () => {
		const data = {
			tag: tag,
			location: location,
			file: fileUrl,
		}

		const finalData = JSON.stringify(data)
		console.log(finalData)

		try {
			const added = await client.add(finalData)
			const url = `https://ipfs.infura.io/ipfs/${added.path}`

			setIpfsUrl(url)
			console.log(url)
		} catch (error) {
			console.log('Error uploading file: ', error)
		}
	}

	if (!props.address) {
		return <ConnectWallet connectWallet={props.connectWallet} />
	}

	return (
		<Grid.Container justify='center' gap={3} wrap='wrap'>
			<Grid xs={16} md={6} lg={6}>
				<Text width='100%' h2>
					Ready to submit?
				</Text>
			</Grid>
			<Grid xs={16} md={16} lg={24}>
				<Input width='80%' onChange={onTagChange}>
					Tag Name
				</Input>
			</Grid>
			<Grid xs={16} md={16} lg={24}>
				<Input width='80%' onChange={onLocationChange}>
					Location
				</Input>
				<Spacer h={3} />
			</Grid>
			<Grid xs={16} md={16} lg={24}>
				<input type='file' name='Asset' onChange={onChange} />
				{fileUrl && <img src={fileUrl} width='200px' height='200px' />}
			</Grid>
			<Grid justify='flex-start' direction='row' gap={5}>
				<Button type='secondary' onClick={onSubmit}>
					Submit for Validation
				</Button>
			</Grid>
		</Grid.Container>
	)
}

export default CreateSubmission
