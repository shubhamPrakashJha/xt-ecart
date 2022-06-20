import React from 'react';
import { ButtonsGroup, CardGroup } from 'components/molecules';
import { ProductType } from 'types';

type Props = {
  catalogueName: string;
  buttonSize?: 'small' | 'medium' | 'large';
  categoryList: string[];
  onCategorySelect: (category: string) => void;
  onCategoryReset: () => void;
  productList: ProductType[];
  onAddToCart: (product: ProductType) => void;
};

export function ProductsCatalogue({
  catalogueName = '',
  buttonSize = 'small',
  categoryList,
  onCategorySelect,
  onCategoryReset,
  productList,
  onAddToCart,
}: Props) {
  return (
    <div>
      <h1>{catalogueName}</h1>
      <ButtonsGroup
        size={buttonSize}
        labels={categoryList}
        onSelect={onCategorySelect}
        onReset={onCategoryReset}
      />
      <CardGroup list={productList} onAddToCart={onAddToCart} />
    </div>
  );
}
