import { Button, Text, Grid, Spacer } from '@geist-ui/react'

const ConnectWallet = (props) => {
  return (
    <Grid.Container justify="center" gap={2} className="connect-wallet-container" height="100px">
      <Spacer h={10} />
      <Grid
        className="connect-wallet" 
        justify="center"
        direction="column"
        alignItems='center'
        xs={16}
        l={6}
      >
        <Text width="100%" h2>Let's Get Started, Connect Your Wallet</Text>
        <Spacer h={5} />
        <Button
          type="secondary"
          onClick={() => props.connectWallet("injected")}
        >Connect your wallet</Button>
      </Grid>
    </Grid.Container>
  );
};

export default ConnectWallet;