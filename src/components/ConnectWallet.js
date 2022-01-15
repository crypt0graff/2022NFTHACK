import { Button, Text, Grid } from '@geist-ui/react'

const ConnectWallet = (props) => {
  return (
    <Grid.Container justify="center" gap={2} className="connect-wallet-container" height="100px">
      <Grid
        className="connect-wallet" 
        justify="center"
        direction="column"
        alignItems='center'
      >
        <Text width="80%" h2>Let's Get Started, Connect Your Wallet</Text>
        <Button
          type="secondary"
          onClick={() => props.connectWallet("injected")}
        >Connect your wallet</Button>
      </Grid>
    </Grid.Container>
  );
};

export default ConnectWallet;