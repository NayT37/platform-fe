import React from 'react';
import './LearningStatus.scss';

export const LearningStatus = ({icon = null, subject = 'Subject'}) => {
  return (
    <div className="lrng-stat">
      <p className="lrng-stat__title">Currently Learning</p>
      <div className="lrng-stat__subject">
        <img className="lrng-stat__subject__img" src={icon} alt="Logo" />
        <p className="lrng-stat__subject__txt">{subject}</p>
      </div>
    </div>
  );
};
