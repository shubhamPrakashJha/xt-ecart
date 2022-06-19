import React from 'react';
import { Button, Greeting, Logo } from 'components/atoms';

type Props = {
  name: string;
  onLogout: () => void;
};

export const LoggedInMenu = ({ name, onLogout }: Props) => {
  return (
    <>
      <Greeting name={name} />
      <Button size="small" onClick={onLogout} label="Log out" />
    </>
  );
};
