import React from 'react';
import './UserImg.scss';
import arrowDown from '../../../utils/img/arrow-down.png';

export const UserImg = ({
  imgSrc = 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg',
  name = 'User Name',
}) => {
  return (
    <div className="usr-profile">
      <p className="usr-profile__name">{name}</p>
      <div className="usr-profile__fig">
        <img className="usr-profile__fig__img" src={imgSrc} alt={name} />
      </div>
      <button className="usr-profile__arrow">
        <img src={arrowDown} alt="Dropdown" />
      </button>
    </div>
  );
};
