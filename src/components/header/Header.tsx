import React from 'react';
import { Logo, Navigation, Cart } from './index';

function Header() {
  return (
    <div className="container">
      <div className="header">
        <Logo />
        <Navigation />
        <Cart />
      </div>
    </div>
  );
}

export default Header;
