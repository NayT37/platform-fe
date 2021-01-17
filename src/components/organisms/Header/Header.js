import React, {useState} from 'react';
// Resources
import './Header.scss';
import {Logo} from '../../atoms/Logo/Logo';
import {Search} from '../../molecules/Search/Search';
import {UserImg} from '../../molecules/UserImg/UserImg';
import {ButtonText} from '../../atoms/ButtonText/ButtonText';
import {ButtonLogo} from '../../atoms/ButtonLogo/ButtonLogo';
import {AiFillMessage as MessageIcon} from 'react-icons/ai';
import notificationIcon from '../../../utils/img/icons/icon-notification.png';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for responsive menu

  /**
   * Handle open/close side menu state.
   * Blocks body scroll and close side menu on selection click
   */
  const handleSideMenu = (forceClose = false) => {
    forceClose === true ? setIsOpen(false) : setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  };

  return (
    <div className={`header${isOpen ? ' header--active' : ''}`}>
      <Logo />
      <ul className="header__content">
        <li className="header__content__item">
          <UserImg />
        </li>
        <li className="header__content__item header__content__item--icon">
          <ButtonLogo name="Messages">
            <MessageIcon size="28px" />
          </ButtonLogo>
        </li>
        <li className="header__content__item header__content__item--icon">
          <ButtonLogo imgSrc={notificationIcon} name="Notifications" feedback />
        </li>
        <li className="header__content__item header__content__item--action">
          <ButtonText text="+ ADD" />
        </li>
        <li className="header__content__item header__content__item--search">
          <Search />
        </li>
      </ul>
      <button className="header__toggle-btn" onClick={handleSideMenu}>
        <span className="header__toggle-btn__bar"></span>
      </button>
    </div>
  );
};
