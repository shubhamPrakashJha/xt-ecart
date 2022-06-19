import React from 'react';
import { Button } from 'components/atoms';

type Props = {
  count: number;
};

export const Cart = ({ count }: Props) => {
  return <Button size="small" label={`Cart (${count})`} />;
};
