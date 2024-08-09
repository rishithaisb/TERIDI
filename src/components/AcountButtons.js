import React from 'react';

const AccountButtons = () => (
  <div style={{ textAlign: 'center', margin: '20px' }}>
    <button style={buttonStyle}>Login</button>
    <button style={buttonStyle}>Register</button>
  </div>
);

const buttonStyle = {
  backgroundColor: '#fcb6b8',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  padding: '10px 20px',
  margin: '5px',
  cursor: 'pointer'
};

export default AccountButtons;
