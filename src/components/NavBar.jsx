import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";
import SemicolonLogo from '../../public/Semicolon.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

 return (
   <header className="header">
     <nav className="nav container">
       <div className="nav__logo-container">
         <NavLink to="/" className="nav__logo"> 
           <img src={SemicolonLogo} className="nav__logo" alt="semicolon logo" />
         </NavLink>
       </div>
       <div
         className={`nav__menu ${showMenu ? 'show-menu' : ''}`}
         id="nav-menu"
       >
         <ul className="nav__list">
           <li className="nav__item">
             <NavLink to="/users" className="nav__link">
               Users
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/committees" className="nav__link">
               Committees
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/workshops" className="nav__link">
               Workshops
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/participants" className="nav__link">
               Participants
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/members" className="nav__link">
               Members
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/interviewer" className="nav__link">
               Interviewer
             </NavLink>
           </li>
         </ul>
         <div className="nav__close" id="nav-close" onClick={toggleMenu}>
           <IoClose />
         </div>
       </div>

       <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
         <IoMenu />
       </div>
     </nav>
   </header>
 );
};

export default Navbar;
