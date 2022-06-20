import React from 'react';
import './Hero.scss';

type Props = {};

export function Hero({}: Props) {
  return (
    <div className="hero">
      <img src="/assets/hero-image.jpg" alt="" />
    </div>
  );
}
