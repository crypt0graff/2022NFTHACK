import sdk from './1-initialize-sdk.js'

// Need to store sdk address(0xDf47CB8f2fB62C36Bab9ab8673CD7050ab4131Ff) in .env
const nftCollection = sdk.getNFTModule(
	'0xDf47CB8f2fB62C36Bab9ab8673CD7050ab4131Ff'
)

const mintNftTo = async (address) => {
	try {
		await nftCollection.mintTo(address, {
			name: 'Crypt0Graff Member NFT',
			description:
				'This is the NFT token that will be used to represent members of the Crypt0Graff community.',
			// Need to store CID(bafybeihveuv7akxjgmnoomxpwotifiizjzwwcp5aobzatdzzwx57venrdy) in .env
			image:
				'https://bafybeihveuv7akxjgmnoomxpwotifiizjzwwcp5aobzatdzzwx57venrdy.ipfs.dweb.link/',
			properties: {},
		})
	} catch (err) {
		console.log(err)
	}
}

// NFT can be minted after the validation condition is met. Call function in the frontend
