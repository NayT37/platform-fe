import React, {useState} from 'react';
// Components
import {Logo} from '../../atoms/Logo/Logo';
import {Search} from '../../molecules/Search/Search';
import {UserImg} from '../../molecules/UserImg/UserImg';
import {ButtonText} from '../../atoms/ButtonText/ButtonText';
import {ButtonLogo} from '../../atoms/ButtonLogo/ButtonLogo';
import {Notification} from '../../molecules/Notification/Notification';
// Resources
import './Header.scss';
import {AiFillMessage as MessageIcon} from 'react-icons/ai';
import notificationIcon from '../../../utils/img/icons/icon-notification.png';
import notificationImg_1 from '../../../utils/img/recent-event.png';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(true); // State for responsive menu

  /**
   * Handle open/close side menu state.
   * Blocks body scroll and close side menu on selection click
   */
  const handleSideMenu = (forceClose = false) => {
    forceClose === true ? setIsOpen(false) : setIsOpen(!isOpen);
    document.body.classList.toggle('overlay', !isOpen);
  };

  const notificationsData = [
    {imgSrc: notificationImg_1, title: 'You have a new session to respond', date: 'Today, 10:30 AM'},
    {imgSrc: notificationImg_1, title: 'You have a virtual session in your class', date: 'Yesterday, 10:30 AM'},
    {imgSrc: notificationImg_1, title: 'You have a face to face stand now.', date: 'Yesterday, 10:30 AM'},
  ];

  return (
    <div className={`header${isOpen ? ' header--active' : ''}`}>
      <Logo />
      <ul className="header__content">
        <li className="header__content__item">
          <UserImg />
        </li>
        <li className="header__content__item header__content__item--icon">
          <ButtonLogo name="Messages" text="Messages">
            <MessageIcon size="28px" />
          </ButtonLogo>
        </li>
        <li className="header__content__item header__content__item--icon">
          <ButtonLogo imgSrc={notificationIcon} name="Notifications" text="Notification" feedback />
          <ul className="header__content__item__dropdown">
            {notificationsData.map((noti, i) => (
              <li key={i} className="header__content__item__dropdown__item">
                <Notification {...noti} />
              </li>
            ))}
          </ul>
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
