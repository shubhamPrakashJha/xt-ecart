import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Cart } from './Cart';

export default {
  title: 'components/atoms/Cart',
  component: Cart,
  argTypes: {
    count: { control: { type: 'number' } },
  },
} as ComponentMeta<typeof Cart>;

const Template: ComponentStory<typeof Cart> = (args) => <Cart {...args} />;

export const WithName = Template.bind({});
WithName.args = {
  count: 0,
};

export const WithoutOutName = Template.bind({});
WithoutOutName.args = {};
