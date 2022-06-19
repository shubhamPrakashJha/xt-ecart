import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Greeting } from './Greeting';

export default {
  title: 'components/atoms/Greetings',
  component: Greeting,
  argTypes: {
    name: { control: { type: 'text' } },
  },
} as ComponentMeta<typeof Greeting>;

const Template: ComponentStory<typeof Greeting> = (args) => (
  <Greeting {...args} />
);

export const WithName = Template.bind({});
WithName.args = {
  name: 'Shubham',
};

export const WithoutOutName = Template.bind({});
WithoutOutName.args = {};
