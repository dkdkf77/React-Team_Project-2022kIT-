import React from 'react';
import './App.css';

import Main from './component/main';

function App() {
  return (
    <div className="wrap">
      <header className="header">
        <div className="inner">
          <h1>header</h1>
        </div>
      </header>
      <Main />
      <footer className="footer">
        <div className="inner">
          <h1>footer</h1>
        </div>
      </footer>
    </div>
  );
}

export default App;
