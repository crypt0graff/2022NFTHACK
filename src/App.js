import { useEffect, useMemo, useState } from 'react';
import { useWeb3 } from '@3rdweb/hooks';
import { ThirdwebSDK } from '@3rdweb/sdk';
import { UnsupportedChainIdError } from "@web3-react/core";
import { ethers } from 'ethers';
import { Grid, Card, Image, Spacer } from '@geist-ui/react';
import ConnectWallet from './components/ConnectWallet';
import dotenv from 'dotenv';

dotenv.config()

const sdk = new ThirdwebSDK('rinkeby'); //* Needs to change to the Polygon network

const bundleDropModule = sdk.getBundleDropModule(process.env.BUNDLE_DROP_MODULE);
const tokenModule = sdk.getTokenModule(process.env.TOKEN_MODULE);
const voteModule = sdk.getVoteModule(process.env.VOTE_MODULE);

const App = () => {
  const { connectWallet, address, error, provider } = useWeb3();
  console.log("Hi Address:", address);

  const signer = provider ? provider.getSigner() : undefined;

  useEffect(() => {
    sdk.setProviderOrSigner(signer);
  }, [signer]);

  if (error instanceof UnsupportedChainIdError ) {
    return (
      <div className="unsupported-network">
        <h2>Please connect to Polygon Mumbai Testnet</h2>
        <p>
          This dapp only works on the Polygon testnet network, please switch networks
          in your connected wallet.
        </p>
      </div>
    );
  }

  return (
    <Grid.Container gap={2} justify="center">
      <Spacer h={4}/>
      <Grid xs={24}>
        <Image width="540px" height="160px" src="/Crypt0GrafflLogo.png" />
      </Grid>
      {!address ?
        <ConnectWallet
          connectWallet={connectWallet}
        />
      :
        <div>
          Replace with other stages of the app
        </div>
      }
    </Grid.Container>
  )
};

export default App;
