import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useWallet, WalletProvider, WalletButton } from './wallet'

function TestWalletApi() {
  const { api } = useWallet()

  return (
    <div>
      <button onClick={() => api?.signMessage('TEST MESSAGE', null)}>Sign Test Message</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <WalletProvider>
        <WalletButton />
        <TestWalletApi />
      </WalletProvider>
    </div>
  );
}

export default App;
