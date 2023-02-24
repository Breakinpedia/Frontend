import React from 'react';
import './App.css';

import Logo from './Components/Logo';
import Lang from './Components/Lang';
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <div>
        <Logo />
      </div>
      <div>
        <Lang />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
