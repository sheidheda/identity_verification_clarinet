import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [identity, setIdentity] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleRegister = () => {
    alert('Registration feature coming soon!');
  };

  const handleVerify = () => {
    alert('Verification feature coming soon!');
  };

  const handleCheck = () => {
    alert('Check feature coming soon!');
  };

  return (
    <div className="container">
      <div className="app-card">
        <h1 className="title">AuthenFlow</h1>
        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your wallet address"
            className="input-field"
          />
        </div>
        <div className="button-group">
          <button className="button register" onClick={handleRegister}>
            Register
          </button>
          <button className="button verify" onClick={handleVerify}>
            Verify
          </button>
          <button className="button check" onClick={handleCheck}>
            Check
          </button>
        </div>
        <div className="result">
          <p>Identity: {identity || 'No identity yet'}</p>
          <p>Verified: {isVerified ? 'Yes' : 'No'}</p>
        </div>
        <div class="clarity-animation">
          Built with <span>Clarity</span>
        </div>
      </div>
    </div>
  );
}

export default App;
