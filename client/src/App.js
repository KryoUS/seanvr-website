import React from 'react';
import Warning from './components/warning/warning';
import Socials from './components/socials/socials';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://d3mb8zw3wuinah.cloudfront.net/seanVRLogo.png" className="App-logo" alt="logo" />
        <Socials />
      </header>
      <Warning />
    </div>
  );
}

export default App;
