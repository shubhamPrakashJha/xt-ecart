import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoggedOutMenu } from './LoggedOutMenu';

export default {
  title: 'components/molecules/LoggedOutMenus',
  component: LoggedOutMenu,
  argTypes: {
    name: { control: { type: 'text' } },
  },
} as ComponentMeta<typeof LoggedOutMenu>;

const Template: ComponentStory<typeof LoggedOutMenu> = (args) => (
  <LoggedOutMenu {...args} />
);

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
