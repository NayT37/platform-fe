import React from 'react';
import './ButtonText.scss';

export const ButtonText = ({text="Text here"}) => {
  return <button className="plt-btn">{text}</button>;
};
