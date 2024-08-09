import React, { useState } from 'react';

const TransactionButtons = () => {
  const [account, setAccount] = useState(null);
  const [contractAddress, setContractAddress] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  // Request account access from MetaMask
  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        setIsConnected(true);
        console.log('Connected account:', accounts[0]);
      } catch (error) {
        console.error('User rejected the request or something went wrong:', error);
        alert('Failed to connect to MetaMask.');
      }
    } else {
      alert('MetaMask is not installed. Please install it to use this app.');
    }
  };

  // Handle contract address input change
  const handleContractAddressChange = (event) => {
    setContractAddress(event.target.value);
  };

  // Function to handle deposit
  const handleDeposit = async () => {
    if (!account || !contractAddress) {
      alert('Please connect to MetaMask and enter a valid contract address.');
      return;
    }

    try {
      const transactionParameters = {
        to: contractAddress, // Use the contract address provided by the user
        from: account,
        value: '0x2386f26fc10000', // Value in wei (0.01 ETH), adjust as needed
        gas: '0x5208', // Optional: Set the gas limit, e.g., 21000 (0x5208 in hex)
      };

      const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });

      console.log('Transaction successful with hash:', txHash);
      alert(`Deposit transaction successful with hash: ${txHash}`);
    } catch (error) {
      console.error('Failed to send transaction:', error);
      alert(`Failed to send deposit transaction: ${error.message}`);
    }
  };

  // Function to handle withdraw
  const handleWithdraw = async () => {
    if (!account || !contractAddress) {
      alert('Please connect to MetaMask and enter a valid contract address.');
      return;
    }

    try {
      const transactionParameters = {
        to: contractAddress, // Use the contract address provided by the user
        from: account,
        // Additional transaction data can be added here if needed
      };

      const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });

      console.log('Withdraw transaction successful with hash:', txHash);
      alert(`Withdraw transaction successful with hash: ${txHash}`);
    } catch (error) {
      console.error('Failed to send transaction:', error);
      alert(`Failed to send withdraw transaction: ${error.message}`);
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <button onClick={connectMetaMask} style={buttonStyle}>
        {account ? `Connected: ${account}` : 'Connect MetaMask'}
      </button>

      {isConnected && (
        <>
          <div style={{ margin: '10px' }}>
            <input
              type="text"
              placeholder="Enter Contract Address"
              value={contractAddress}
              onChange={handleContractAddressChange}
              style={inputStyle}
            />
          </div>

          <button onClick={handleDeposit} style={buttonStyle} disabled={!contractAddress}>
            Deposit
          </button>
          <button onClick={handleWithdraw} style={buttonStyle} disabled={!contractAddress}>
            Withdraw
          </button>
        </>
      )}
    </div>
  );
};

const buttonStyle = {
  backgroundColor: '#fcb6b8',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  padding: '10px 20px',
  margin: '5px',
  cursor: 'pointer',
};

const inputStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  width: '300px',
};

export default TransactionButtons;
