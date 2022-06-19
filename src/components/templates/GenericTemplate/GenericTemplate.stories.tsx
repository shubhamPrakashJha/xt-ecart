import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GenericTemplate } from './GenericTemplate';

export default {
  title: 'components/templates/GenericTemplate',
  component: GenericTemplate,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof GenericTemplate>;

const Template: ComponentStory<typeof GenericTemplate> = (args) => (
  <GenericTemplate {...args} />
);

export const generic = Template.bind({});
generic.args = {
  children: (
    <>
      <h1>Title</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ea
        similique excepturi veritatis molestias. Nemo, suscipit velit corporis
        expedita placeat, quia porro voluptates debitis in quis repellat enim
        libero temporibus.
      </p>
    </>
  ),
};
