import sdk from './1-initialize-sdk.js'

const drop = sdk.getDropModule('0xF67A4d579f22ef3B2B64E6D073FEfA994E79958F')

const ipfsUrl =
	'https://bafybeihveuv7akxjgmnoomxpwotifiizjzwwcp5aobzatdzzwx57venrdy.ipfs.dweb.link/graffVid.mp4'

const lazyMintNft = async (ipfsUrl) => {
	try {
		await drop.lazyMint({
			name: 'Crypt0Graff Validated Graffiti NFT',
			description:
				'This is the NFT token that will be used to represent validated graffiti.',
			image: ipfsUrl,
			properties: {},
		})
	} catch (err) {
		console.log(err)
	}
}

// Function can be called in the frontend after NFT is validated for minting of the graffiti in the frontend
lazyMintNft()
