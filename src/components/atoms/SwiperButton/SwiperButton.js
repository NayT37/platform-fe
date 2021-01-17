import React from 'react';
import './SwiperButton.scss';
import {BsArrowLeftShort} from 'react-icons/bs';

export const SwiperButton = ({className, isPrev = false}) => {
  return (
    <div className={`swiper-btn${isPrev ? ' swiper-btn--prev' : ''} ${className}`}>
      <BsArrowLeftShort size="16px" className="swiper-btn__icon" />
    </div>
  );
};
