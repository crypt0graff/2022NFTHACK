import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';
import "./index.css";

const supportedChainIds = [80001]; // Polygon Mumbai testnet

const connectors = {
  injected: {},
};


ReactDOM.render(
  <React.StrictMode>
    <ThirdwebWeb3Provider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
      <GeistProvider>
        <CssBaseline />
        <App />
      </GeistProvider>
    </ThirdwebWeb3Provider>
  </React.StrictMode>,
  document.getElementById("root")
);