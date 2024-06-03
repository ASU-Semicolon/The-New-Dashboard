import React, { useState,useRef,useEffect } from "react";
import { NavLink,Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import "./navBar.style.css";
import MenuIcon from '../../assets/menu.svg';
import SemicolonLogo from '../../assets/semicolon Logo.png';

/**
 * Navbar component that displays a navigation menu.
 * It becomes sticky when scrolled past a certain point and adapts based on user authentication and admin status.
 * 
 * @param {Object} props - The component props.
 * @param {boolean} [props.isAuthenticated=true] - Indicates if the user is authenticated.
 * @param {boolean} [props.isAdmin=true] - Indicates if the user has admin privileges.
 * @returns {JSX.Element} The Navbar component.
 */
const Navbar = ({isAuthenticated=true,isAdmin=true}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const seintelRef = useRef(null);
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
       
        setIsSticky(!entry.isIntersecting);
      },
      {root:null,
        rootMargin: '100px', 
        threshold: 0
      }
    );

    if (seintelRef.current) {
      observer.observe(seintelRef.current);
    }

  
  }, []);

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
if(!isAdmin){
  menuItems.shift()
}
  return (<><div ref={seintelRef} className="observer"></div>
  <div className={`${isSticky?'sticky':''}__adjust`}></div>
    <header className="header">
      <nav  className={`nav container ${isSticky?'sticky':''} ${showMenu ? 'show-menu' : ''}`}>
        <div className="nav__logo-container">
          <NavLink to="/" > 
            <img src={SemicolonLogo} className="nav__logo" alt="semicolon logo" />
          </NavLink>
        </div>
        {!isAuthenticated?  <Link to='/login' className='contact__nav nav__link'>
                 Contact
                </Link>: <div className="nav__menu" id="nav-menu">
         
         <ul className="nav__list">
           {menuItems.map((item, index) => (
             <li key={item.title} className="nav__item">
               <NavLink onClick={()=>{
                toggleMenu()
              }} to={item.path} className={({isActive})=>isActive?'active nav__link':'nav__link'}>
                 {item.title}
               </NavLink>
             </li>
           ))}
         </ul>
         <div className="nav__close" id="nav-close" onClick={toggleMenu}>
           <IoClose />
         </div>
       </div>}
       

      { isAuthenticated &&<div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <img src={MenuIcon} alt="Menu Icon" />
        </div>}
      </nav>
    </header>
                 </>
  );
};

export default Navbar;