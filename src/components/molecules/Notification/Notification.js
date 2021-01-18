import React from 'react';
import './Notification.scss';

export const Notification = ({imgSrc = '', title = 'Title', date = 'Today'}) => {
  return (
    <div className="noti">
      <div className="noti__fig">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="noti__content">
        <p className="noti__content__title">{title}</p>
        <p className="noti__content__date">{date}</p>
      </div>
    </div>
  );
};
