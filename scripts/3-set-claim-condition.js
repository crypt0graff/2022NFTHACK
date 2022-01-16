import sdk from './1-initialize-sdk.js'

const drop = sdk.getDropModule('0x2D5442A6eC59B59A0837f45313d2f41A6D7a9d8b')

const setTokenClaimConditions = async () => {
	const factory = await drop.getClaimConditionsFactory()

	// Define claim phase.
	const claimPhase = await factory.newClaimPhase({
		startTime: new Date(),
		maxQuantity: 10,
		maxQuantityPerTransaction: 1,
	})

	// Allow snapshot for the specified list. We can add address from the frontend after the graff is validatedand minted in the dao
	const allowList = ['0xc40a8C17aF0D57d788d0502f9293aCF0108823d5']

	claimPhase.setSnapshot(allowList)

	// Set claim conditions.
	await drop.setClaimConditions(factory)
}

setTokenClaimConditions()
