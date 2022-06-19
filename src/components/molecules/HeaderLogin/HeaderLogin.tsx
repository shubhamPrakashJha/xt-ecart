import React from 'react';
import { LoggedInMenu, LoggedOutMenu } from 'components/molecules';

type User = {
  name: string;
};

interface Props {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export function HeaderLogin({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: Props) {
  return (
    <div>
      {user ? (
        <LoggedInMenu name={user?.name || ''} onLogout={onLogout} />
      ) : (
        <LoggedOutMenu onLogin={onLogin} onCreateAccount={onCreateAccount} />
      )}
    </div>
  );
}
