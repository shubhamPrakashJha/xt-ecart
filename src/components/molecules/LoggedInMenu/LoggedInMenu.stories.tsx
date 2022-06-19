import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoggedInMenu } from './LoggedInMenu';

export default {
  title: 'components/molecules/LoggedInMenus',
  component: LoggedInMenu,
  argTypes: {
    name: { control: { type: 'text' } },
  },
} as ComponentMeta<typeof LoggedInMenu>;

const Template: ComponentStory<typeof LoggedInMenu> = (args) => (
  <LoggedInMenu {...args} />
);

export const WithName = Template.bind({});
WithName.args = {
  name: 'Shubham',
};

export const WithoutOutName = Template.bind({});
WithoutOutName.args = {};
