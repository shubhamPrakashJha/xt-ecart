/* @flow */
import * as React from 'react';
import { Button } from 'components/atoms';
import { ProductType } from 'types';

import './Card.scss';

export function Card({
  image,
  isCart = false,
  title,
  price,
  addToCart,
  removeFromCart,
}: ProductType) {
  return (
    <div className={'card'}>
      <div className={'card_image'}>
        <img src={image} alt="mission patch" width={226} height={226} />
      </div>
      <div className={'card_body'}>
        <h4 className={'card_title'}>{title}</h4>
        <h5>{`$${price}`}</h5>
      </div>
      <Button
        label={isCart ? 'REMOVE' : 'ADD TO CART'}
        onClick={isCart ? removeFromCart : addToCart}
      />
    </div>
  );
}
