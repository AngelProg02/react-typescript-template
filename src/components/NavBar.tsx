import '../styles/nav-bar.css';

import { NavbarProps } from 'interfaces/interfaces';
import React from 'react';

import { NavBarIcon } from './navBarIcon';

export const Navbar: React.FC<NavbarProps> = ({ menuItems, loginRegisterItems, children }) => {
  return (
    <nav className="container nav-foot-design">
      <ul className="info">
        <NavBarIcon image="navicon.svg" />
        {children}
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <a href={menuItem.link}>{menuItem.label}</a>
          </li>
        ))}
      </ul>

      <ul className="login-register">
        {loginRegisterItems.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
