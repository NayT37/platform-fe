import React, {useState} from 'react';
// Components
import {ButtonLogo} from '../../atoms/ButtonLogo/ButtonLogo';
// Resources
import './Navbar.scss';
import Tooltip from '@material-ui/core/Tooltip';
import icon_1 from '../../../utils/img/icons/icon-section-1.png';
import icon_2 from '../../../utils/img/icons/icon-section-2.png';
import icon_3 from '../../../utils/img/icons/icon-section-3.png';
import icon_4 from '../../../utils/img/icons/icon-section-4.png';
import icon_5 from '../../../utils/img/icons/icon-section-5.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true); // State for menu

  /**
   * Handle open/close side menu state.
   * Blocks body scroll and close side menu on selection click
   */
  const handleSideMenu = (forceClose = false) => {
    forceClose === true ? setIsOpen(false) : setIsOpen(!isOpen);
  };

  const navItems = [
    {name: 'Section 1', imgSrc: icon_1, active: true},
    {name: 'Section 2', imgSrc: icon_2, active: false},
    {name: 'Section 3', imgSrc: icon_3, active: false},
    {name: 'Section 4', imgSrc: icon_4, active: false},
    {name: 'Section 5', imgSrc: icon_5, active: false},
  ];

  return (
    <nav className={`plt-nav${isOpen ? ' plt-nav--active' : ''}`}>
      <ul className="plt-nav__list">
        <li className="plt-nav__list__item" onClick={handleSideMenu}>
          <button className="plt-nav__list__item__toggle-btn">
            <span className="plt-nav__list__item__toggle-btn__bar"></span>
          </button>
        </li>
        {navItems.map((item, i) => (
          <li className={`plt-nav__list__item${item.active ? ' plt-nav__list__item--active' : ''}`} key={i}>
            <Tooltip title={item.name} placement="right">
              <div className="plt-nav__list__item__wrapper">
                <ButtonLogo name={item.name} imgSrc={item.imgSrc} />
              </div>
            </Tooltip>
          </li>
        ))}
      </ul>
    </nav>
  );
};
