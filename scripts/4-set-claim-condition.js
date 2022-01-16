import sdk from './1-initialize-sdk.js'

const bundleDrop = sdk.getBundleDropModule(
	'0xF67A4d579f22ef3B2B64E6D073FEfA994E79958F'
)

;(async () => {
	try {
		const claimConditionFactory = bundleDrop.getClaimConditionFactory()
		// Specify conditions.
		claimConditionFactory.newClaimPhase({
			startTime: new Date(),
			maxQuantity: 50_000,
			maxQuantityPerTransaction: 1,
		})

		await bundleDrop.setClaimCondition(0, claimConditionFactory)
		console.log('✅ Sucessfully set claim condition!')
	} catch (error) {
		console.error('Failed to set claim condition', error)
	}
})()
