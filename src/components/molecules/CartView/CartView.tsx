import React from 'react';
import { Card } from 'components/atoms';

import './CartView.scss';
import { ProductDataType } from 'types';

type Props = {
  productList: ProductDataType[];
  removeFromCart: (id: number) => void;
};

export function CartView({ productList, removeFromCart }: Props) {
  return (
    <div className="cart-popup">
      {productList.map((product: ProductDataType) => {
        const { id, image, title, price } = product;
        return (
          <Card
            key={`${title}-${id}`}
            isCart={true}
            image={image}
            title={title}
            price={price}
            removeFromCart={() => removeFromCart(product.id)}
          />
        );
      })}
    </div>
  );
}
