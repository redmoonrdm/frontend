import React, { Component } from "react";

import Navbar from "../../component/Navbar/NavBar";
import Section from "./Section";
import Footer from "../../component/Footer/Footer";

class Layout1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "/", navheading: "Home" },
        { id: 2, idnm: "ecosystem", navheading: "Ecosystem" },
        { id: 3, idnm: "roadmap", navheading: "Roadmap" },
        { id: 4, idnm: "team", navheading: "Team" },
        { id: 5, idnm: "contact", navheading: "Contact" },
        { id: 6, idnm: "whitepaper.pdf", navheading: "Whitepaper" },
      ],
      pos: document.documentElement.scrollTop,
      imglight: false,
      navClass: "",
      fixTop : true
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > this.state.pos) {
      this.setState({ navClass: "nav-sticky", imglight: false });
    } else {
      this.setState({ navClass: "", imglight: false });
    }
  };

  render() {
    return (
      <React.Fragment>
          <Navbar
            navItems={this.state.navItems}
            navClass={this.state.navClass}
            imglight={this.state.imglight}
            top={this.state.fixTop}
          />

          <Section />

          <Footer />
      </React.Fragment>
    );
  }
}
export default Layout1;
