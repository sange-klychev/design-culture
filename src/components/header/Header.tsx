import React from 'react';
import { Logo, Navigation, Social } from './index';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />
          <div className="header__contacts">
            <Navigation />
            <Social />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
