import React from 'react';
import HomePage from "./components/HomePage";
import PiggyBank from './components/PiggyBank';
import AccountButtons from './components/AcountButtons'
import TransactionButtons from './components/TransactionButtons'; 
import './index.css';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#ffe6e6'}}>
      <HomePage/>
  
      <PiggyBank />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <TransactionButtons />
        <AccountButtons />
      </div>
    </div>
  );
}

export default App;
