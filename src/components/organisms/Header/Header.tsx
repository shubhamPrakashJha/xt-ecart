import React from 'react';

import { Cart, Logo } from 'components/atoms';
import { HeaderLogin } from 'components/molecules';
import './header.css';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
  cartCount: number;
  onCartClick: () => void;
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  cartCount = 0,
  onCartClick,
}: HeaderProps) => (
  <header>
    <div className="header-wrapper">
      <Logo name="XT CART" />
      <HeaderLogin
        user={user}
        onLogin={onLogin}
        onLogout={onLogout}
        onCreateAccount={onCreateAccount}
      />
      <Cart count={cartCount} onCartClick={onCartClick} />
    </div>
  </header>
);
