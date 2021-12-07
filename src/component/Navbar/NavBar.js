import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";

class NavbarPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpenMenu: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState({ isOpenMenu: !this.state.isOpenMenu });
  };

  render() {

    return (
      <React.Fragment>
        <Navbar
          expand="lg"
          fixed={this.props.top === true ? "top" : ""}
          className={"nav-sticky navbar-custom sticky sticky-dark"}
          id="navbar"
        >
          <Container>
          <NavbarBrand className="navbar-brand logo text-uppercase" href="/">
              {this.props.imglight === true ? (
                <img src={logo} alt="" height="50" />
              ) : (
                  <img src={logo} alt="" height="50" />
                )}
            </NavbarBrand>
              <NavbarToggler onClick={this.toggle}>
                <i className="mdi mdi-menu"></i>
              </NavbarToggler>
                <Collapse
                  id="navbarCollapse"
                  isOpen={this.state.isOpenMenu}
                  className="navbar-collapse"
                >
                <Nav className="navbar-nav ml-auto navbar-center" id="navbar-navlist">
                  {this.props.navItems.map((item, key) => (
                    <NavItem
                      key={key}>
                      <NavLink
                        href={item.navheading === "Home" 
                        || item.navheading === "Whitepaper"
                        ? item.idnm : "#" + item.idnm}
                      >
                        {item.navheading}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
 
                <div className="navbar-button d-none d-lg-inline-block">
                  <Link to="/" className="btn btn-lg btn-soft-danger btn-round">Launch App</Link>
                </div>
            </Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavbarPage;