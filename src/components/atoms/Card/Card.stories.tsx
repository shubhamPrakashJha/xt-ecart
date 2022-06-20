import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './Card';

export default {
  title: 'components/atoms/Card',
  component: Card,
  argTypes: {
    image: { control: { type: 'text' } },
    isCart: { control: { type: 'boolean' } },
    title: { control: { type: 'text' } },
    price: { control: { type: 'text' } },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const ProductsPageCard = Template.bind({});
ProductsPageCard.args = {
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  isCart: false,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: '109.95',
};

export const CardPopupCard = Template.bind({});
CardPopupCard.args = {
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  isCart: true,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: '109.95',
};
