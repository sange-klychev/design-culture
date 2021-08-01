import React from 'react';
import { Header } from './components/header/index';
import Aside from './components/Aside';
import Card from './components/card/Card';

import './scss/index.scss';

function App() {
  return (
    <div className="body">
      <Header />
      <div className="content">
        <Aside />
        <div className="catalog">
          <Card sale />
          <Card sale={false} />
          <Card sale />
          <Card sale />
          <Card sale={false} />
        </div>
      </div>
    </div>
  );
}

export default App;
