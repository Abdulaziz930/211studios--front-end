import React, { useState, useCallback } from "react";
import { Container } from "reactstrap";
import { NavLink } from "react-router-dom";

const Navi: React.FC = () => {
  const [hamburgerMenuClassName, setHamburgerMenuClassName] =
    useState<string>("navbar-toggler");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickHamburgerMenu = useCallback(() => {
    if (!isOpen) {
      setHamburgerMenuClassName("navbar-toggler open");
      setIsOpen(true);
    } else {
      setHamburgerMenuClassName("navbar-toggler");
      setIsOpen(false);
    }
  }, [isOpen]);

  return (
    <header>
      <Container>
        <nav className='navbar navbar-expand-lg'>
          <NavLink className='navbar-brand' to='/'>
            211 Studios
          </NavLink>
          <button
            className={hamburgerMenuClassName}
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={handleClickHamburgerMenu}>
            <span className='hamburger-menu-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/our-games'>
                  Our Games
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/our-studios'>
                  Our Studios
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/blog'>
                  Blog
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/contact'>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navi;
