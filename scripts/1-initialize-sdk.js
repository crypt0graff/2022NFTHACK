import { ThirdwebSDK } from '@3rdweb/sdk'
import ethers from 'ethers'

//Importing and configuring our .env file that we use to securely store our environment variables
import dotenv from 'dotenv'
dotenv.config()

// Some quick checks to make sure our .env is working.
if (!process.env.PRIVATE_KEY || process.env.PRIVATE_KEY == '') {
	console.log('🛑 Private key not found.')
}

if (!process.env.ALCHEMY_API_URL || process.env.ALCHEMY_API_URL == '') {
	console.log('🛑 Alchemy API URL not found.')
}

if (!process.env.WALLET_ADDRESS || process.env.WALLET_ADDRESS == '') {
	console.log('🛑 Wallet Address not found.')
}

const sdk = new ThirdwebSDK(
	new ethers.Wallet(
		// Your wallet private key. ALWAYS KEEP THIS PRIVATE, DO NOT SHARE IT WITH ANYONE, add it to your .env file and do not commit that file to github!
		process.env.PRIVATE_KEY,
		// RPC URL, we'll use our Alchemy API URL from our .env file.
		ethers.getDefaultProvider(process.env.ALCHEMY_API_URL)
	)
)

;(async () => {
	try {
		const module = sdk.getDropModule(
			'0x2D5442A6eC59B59A0837f45313d2f41A6D7a9d8b'
		)
	} catch (err) {
		console.error('Failed to get apps from the sdk', err)
		process.exit(1)
	}
})()

// We are exporting the initialized thirdweb SDK so that we can use it in our other scripts
export default sdk
