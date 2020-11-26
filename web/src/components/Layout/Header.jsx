import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import Logo from "../../assets/logoDLT.svg";
import { FaBars as MenuIcon } from "react-icons/fa";
import { FaTimes as CloseIcon } from "react-icons/fa";
// import { FaRegUser as UserIcon } from 'react-icons/fa';
import CartIcon from "./CartIcon";
import NavLinks from "./NavLinks";
import CartDropdown from "../Products/CartDropdown";

import "./Header.styles.scss";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCartMenu, setShowCartMenu] = useState(false);
  const breakpoints = useBreakpoint();

  function toggleNav() {
    setShowMenu((currentState) => !currentState);
  }

  function toggleCartDropdown() {
    setShowCartMenu((currentState) => !currentState);
  }

  return (
    <>
      <div className="header ">
        <Link to="/" onClick={toggleNav}>
          <Logo className="logo" />
        </Link>
        {showMenu ? (
          <CloseIcon className="toggle-menu" onClick={toggleNav} />
        ) : (
          <MenuIcon className="toggle-menu" onClick={toggleNav} />
        )}
        {showMenu && breakpoints.md ? <NavLinks toggleNav={toggleNav} /> : null}
        {breakpoints.md ? null : <NavLinks />}
        {/* <Link to='/registro' className='user-icon'>
					<UserIcon />
				</Link> */}
        <CartIcon toggleCartDropdown={toggleCartDropdown} />
      </div>
      {showCartMenu ? <CartDropdown toggle={toggleCartDropdown} /> : null}
    </>
  );
};

export default Header;
