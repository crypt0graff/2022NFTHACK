import sdk from './1-initialize-sdk.js'

const drop = sdk.getDropModule('0xF67A4d579f22ef3B2B64E6D073FEfA994E79958F')

const setTokenClaimConditions = async () => {
	const factory = await drop.getClaimConditionsFactory()

	// Define claim phase.
	const claimPhase = await factory.newClaimPhase({
		startTime: new Date(),
		maxQuantity: 10,
		maxQuantityPerTransaction: 1,
	})

	// Allow snapshot for the specified list. We can add address from the frontend after the graff is validatedand minted in the dao
	const allowList = ['[ALLOWED_ADDRESS_1]']

	claimPhase.setSnapshot(allowList)

	// Set claim conditions.
	await drop.setClaimConditions(factory)
}

setTokenClaimConditions()
