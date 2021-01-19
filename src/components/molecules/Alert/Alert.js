import React from 'react';
import './Alert.scss';
import imgBG from '../../../utils/img/banner-bg-orange.png';

export const Alert = ({text = String, linkTxt = String, linkUrl = '/'}) => {
  return (
    <div className="p-alert" style={{backgroundImage: `url(${imgBG})`}}>
      <p className="p-alert__txt">
        {linkTxt && (
          <a className="p-alert__txt__link" href={linkUrl}>
            {linkTxt}
          </a>
        )}
        {text}
      </p>
    </div>
  );
};
