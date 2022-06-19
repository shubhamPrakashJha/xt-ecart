import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HeaderLogin } from './HeaderLogin';

export default {
  title: 'components/molecules/HeaderLogins',
  component: HeaderLogin,
  argTypes: {},
} as ComponentMeta<typeof HeaderLogin>;

const Template: ComponentStory<typeof HeaderLogin> = (args) => (
  <HeaderLogin {...args} />
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: { name: 'shubham' },
  onLogin: () => null,
  onLogout: () => null,
  onCreateAccount: () => null,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  onLogin: () => null,
  onLogout: () => null,
  onCreateAccount: () => null,
};
