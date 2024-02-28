import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import "./Navbar.css";
import MenuIcon from '/menuIcon.svg';
import SemicolonLogo from '../../public/Semicolon.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const menuItems = [
    { title: "Users", path: "/users" },
    { title: "Committees", path: "/committees" },
    { title: "Workshops", path: "/workshops" },
    { title: "Participants", path: "/participants" },
    { title: "Members", path: "/members" },
    { title: "Interviewer", path: "/interviewer" },
  ];

  return (
    <header className="header">
      <nav className={`nav container ${showMenu ? 'show-menu' : ''}`}>
        <div className="nav__logo-container">
          <NavLink to="/" className="nav__logo"> 
            <img src={SemicolonLogo} className="nav__logo" alt="semicolon logo" />
          </NavLink>
        </div>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            {menuItems.map((item, index) => (
              <li key={index} className="nav__item">
                <NavLink to={item.path} className="nav__link">
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <img src={MenuIcon} alt="Menu Icon" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
