import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Logo } from './Logo';

export default {
  title: 'components/atoms/Logo',
  component: Logo,
  argTypes: {
    name: { control: { type: 'text' } },
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const WithBrandName = Template.bind({});
WithBrandName.args = {
  name: 'ACME',
};

export const WithoutBrandName = Template.bind({});
WithoutBrandName.args = {};
