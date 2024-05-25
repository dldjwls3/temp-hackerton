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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <WalletProvider>
        <WalletButton />
        <TestWalletApi />
      </WalletProvider>
    </div>
  );
}

export default App;
