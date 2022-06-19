import React from 'react';

import './GenericTemplate.scss';

interface Props {
  children: any;
}

export const GenericTemplate = ({ children, ...props }: Props) => {
  return (
    <article className="wrapper" {...props}>
      <section className="content">{children}</section>
    </article>
  );
};
