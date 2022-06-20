import React from 'react';
import { ProductType } from 'types';
import { Card } from 'components/atoms';

import './CardGroup.scss';

type Props = {
  list: ProductType[];
  onAddToCart: (product: ProductType) => void;
};

export function CardGroup({ list, onAddToCart }: Props) {
  return (
    <div className="card-container">
      {list.map((product: ProductType) => {
        const { id, image, title, price } = product;
        return (
          <Card
            key={`${title}-${id}`}
            image={image}
            title={title}
            price={price}
            addToCart={() => onAddToCart(product)}
          />
        );
      })}
    </div>
  );
}
