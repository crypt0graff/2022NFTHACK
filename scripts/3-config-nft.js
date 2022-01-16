import sdk from './1-initialize-sdk.js'
import { readFileSync } from 'fs'

const bundleDrop = sdk.getBundleDropModule(
	'0x874635ABa81DdD20e611f664920510DCFD3bc946'
)

;(async () => {
	try {
		await bundleDrop.createBatch([
			{
				name: 'Leaf Village Headband',
				description: 'This NFT will give you access to NarutoDAO!',
				image: readFileSync('scripts/assets/headband.png'),
			},
		])
		console.log('✅ Successfully created a new NFT in the drop!')
	} catch (error) {
		console.error('failed to create the new NFT', error)
	}
})()
