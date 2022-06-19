import React from 'react';
import { Button } from 'components/atoms';

type Props = {
  onLogin: () => void;
  onCreateAccount: () => void;
};

export const LoggedOutMenu = ({ onLogin, onCreateAccount }: Props) => {
  return (
    <>
      <Button size="small" onClick={onLogin} label="Log in" />
      <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
    </>
  );
};
