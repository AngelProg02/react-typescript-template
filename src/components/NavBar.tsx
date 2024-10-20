import '../styles/nav-bar.css';

import React from 'react';

import { NavBarIcon } from './NavBarIcon';

export interface MenuItem {
  label: string;
  link: string;
  image?: string;
}

export interface NavbarProps {
  menuItems: MenuItem[];
  loginRegisterItems: MenuItem[];
  children: React.ReactNode;
}

export const Navbar: React.FC<NavbarProps> = ({ menuItems, loginRegisterItems, children }) => {
  return (
    <nav className="container rounded">
      <ul className="info">
        <NavBarIcon image="navicon.svg" />
        {children}
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <a href={menuItem.link}>{menuItem.label}</a>
          </li>
        ))}
      </ul>
      <br></br>

      <ul className="login-register">
        {loginRegisterItems.map((item, index) => (
          <li className="inf-log-reg-direction" key={index}>
            <img src={item.image} alt="login" />
            <a href={item.link}>{item.label}</a>
          </li>
        ))}

        <NavBarIcon image="tools.svg" withText="Tools" />
      </ul>
    </nav>
  );
};
