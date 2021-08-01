import React from 'react';
import { Logo, Navigation, Cart } from './index';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />
          <Navigation />
          <Cart />
        </div>
      </div>
    </header>
  );
}

export default Header;
