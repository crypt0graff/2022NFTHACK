import sdk from './1-initialize-sdk.js'

// Grab the app module address.
const appModule = sdk.getAppModule('0xDf47CB8f2fB62C36Bab9ab8673CD7050ab4131Ff')
;(async () => {
	try {
		const voteModule = await appModule.deployVoteModule({
			// Give your governance contract a name.
			name: 'Crypt0Graff Graffiti Validation ',

			// After a proposal is created, when can members start voting?
			// For now, we set this to immediately.
			proposalStartWaitTimeInSeconds: 0,

			// How long do members have to vote on a proposal when it's created?
			// Here, we set it to 24 hours (86400 seconds)
			proposalVotingTimeInSeconds: 30,

			// Will explain more below.
			votingQuorumFraction: 0,
		})

		console.log(
			'✅ Successfully deployed vote module, address:',
			voteModule.address
		)
	} catch (err) {
		console.log('Failed to deploy vote module', err)
	}
})()
