import React from 'react';

import Layout from '../components/Layout';
import './App.css';

const App: React.FC = () => {
  return (
      <div className="App">
          <header className="App-header">
              <p>RPE Calculator</p>
          </header>
        <Layout />
    </div>
  );
};

export default App;
