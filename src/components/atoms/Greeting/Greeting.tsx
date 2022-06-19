import React from 'react';

type Props = {
  name?: string;
};

export const Greeting = ({ name = '' }: Props) => {
  return (
    <span className="welcome">
      Welcome, <b>{name}</b>!
    </span>
  );
};
