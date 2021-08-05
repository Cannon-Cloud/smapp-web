import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-scroll";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const HandleScroll = () => {
    if (window.scrollY >= 60) {
      document.getElementById("Navbar")?.classList.add("darkHeader");
    } else document.getElementById("Navbar")?.classList.remove("darkHeader");
  };

  window.addEventListener("scroll", HandleScroll);
  useEffect(() => {
    let timer = setTimeout(function () {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <Navbar
      id="Navbar"
      className="navbar navbar-expand-lg navbar-light theme-nav fixed-top"
    >
      <div id="navbar-main" className="container">
        <NavbarBrand
          className="navbar-brand"
          href={`${process.env.PUBLIC_URL}/`}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
            alt="logo"
          />
        </NavbarBrand>
        <NavbarToggler className="navbar-toggler" onClick={toggle} />
        <Collapse
          id="navbarSupportedContent"
          className="default-nav"
          isOpen={isOpen}
          navbar
        >
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link
                className="nav-link"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggle}
                active="true"
              >
                home
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="nav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggle}
              >
                about
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="nav-link"
                activeClass="active"
                to="feature"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggle}
              >
                feature
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="nav-link"
                activeClass="active"
                to="screenshot"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggle}
              >
                screenshot
              </Link>
            </NavItem>
            {/* <NavItem>
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="team"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={toggle}
                >
                  team
                </Link>
            </NavItem> */}
            <NavItem>
              <Link
                className="nav-link"
                activeClass="active"
                to="price"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggle}
              >
                price
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="nav-link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggle}
              >
                contact us
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar></UncontrolledDropdown>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Menu;
