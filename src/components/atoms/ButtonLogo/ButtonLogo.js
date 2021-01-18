import React from 'react';
import './ButtonLogo.scss';

export const ButtonLogo = ({imgSrc = '', children, name, feedback = false}) => {
  return (
    <button
      className={`plt-btn-logo${feedback ? ' plt-btn-logo--feedback' : ''}`}
      title={children && name}>
      {children ? <div className="plt-btn-logo__icon">{children}</div> : <div className="plt-btn-logo__img"> <img src={imgSrc} alt={name} /></div>}
    </button>
  );
};
