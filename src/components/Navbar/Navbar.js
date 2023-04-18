import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { IconContext } from "react-icons/lib";

import {
  Nav,
  NavMenu,
  NavItem,
  NavLinks,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
} from "./Navbar.elements";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              SAMILA
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Solutions</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/products">Products</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/about">About</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/getDemo">GET A DEMO</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/register">Register</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
