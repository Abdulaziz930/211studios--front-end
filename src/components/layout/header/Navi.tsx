import React, { useState, useCallback } from "react";
import { Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import { APP_ROUTES } from "../../../routes/consts";

const Navi: React.FC = (props) => {
  const [hamburgerMenuClassName, setHamburgerMenuClassName] =
    useState<string>("navbar-toggler");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const handleClickHamburgerMenu = useCallback(() => {
    if (!isOpen) {
      setHamburgerMenuClassName("navbar-toggler open");
      setIsOpen(true);
    } else {
      setHamburgerMenuClassName("navbar-toggler");
      setIsOpen(false);
    }
  }, [isOpen]);

  const handleChangeNavbar = useCallback(() => {
    window.scrollY > 25 ? setIsSticky(true) : setIsSticky(false);
  }, []);

  window.addEventListener("scroll", handleChangeNavbar);

  return (
    <header className={isSticky ? "sticky" : ""}>
      <Container>
        <nav className='navbar navbar-expand-lg'>
          <NavLink className='navbar-brand' to='/'>
            <img
              src='http://localhost:3000/images/211logo.png'
              alt='navbar-logo'
              className='img-fluid'
            />
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
                <NavLink className='nav-link' to={APP_ROUTES.Home.PATH}>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to={APP_ROUTES.GAME.PATH}>
                  Our Games
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to={APP_ROUTES.STUDIO.PATH}>
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
