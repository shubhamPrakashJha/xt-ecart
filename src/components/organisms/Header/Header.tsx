import React from 'react';

import { Logo } from 'components/atoms';
import './header.css';
import { HeaderLogin } from 'components/molecules';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => (
  <header>
    <div className="header-wrapper">
      <Logo name="ACME" />
      <HeaderLogin
        user={user}
        onLogin={onLogin}
        onLogout={onLogout}
        onCreateAccount={onCreateAccount}
      />
    </div>
  </header>
);
