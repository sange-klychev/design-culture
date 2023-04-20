import React from 'react';
import { Header } from './components/header/index';
import Aside from './components/Aside';

import './scss/index.scss';

function App() {
  return (
    <div className="body">
      <Header />
      <div className="content">
        <Aside />
        <div className="catalog">
          fotocki
        </div>
      </div>
    </div>
  );
}

export default App;
