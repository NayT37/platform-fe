import React from 'react';
import {Heading} from '../../atoms/Heading/Heading';
import './ProgessDataCard.scss';

export const ProgessDataCard = ({title = String, number = String}) => {
  return (
    <div className="pd-card plt-card">
      <a className="pd-card--wrapper" href="/">
        <Heading className="pd-card__title" headLevel={4}>{title}</Heading>
        <p className="pd-card__number h2">{number}</p>
      </a>
    </div>
  );
};
