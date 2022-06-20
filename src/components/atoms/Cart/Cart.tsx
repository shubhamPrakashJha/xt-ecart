import React from 'react';
import { Button } from 'components/atoms';

type Props = {
  count: number;
  onCartClick: () => void;
};

export function Cart({ count, onCartClick }: Props) {
  return (
    <Button size="small" label={`Cart (${count})`} onClick={onCartClick} />
  );
}
