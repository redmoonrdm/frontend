import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import LogoDark from '../../assets/images/logo.png';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          id: 1,
          title: "Stay Tuned",
          child: [
            { title: "Discord", link: "https://discord.gg/6cfJKYHT" },
            { title: "Medium", link: "https://redmoonrdm.medium.com/" },
          ],
        }
      ],
      links2: [
        {
          id: 1,
          title: "Social",
          child: [
            { title: "Telegram", link: "https://t.me/RedMoonRDM" },
            { title: "Twitter", link: "https://twitter.com/RedMoonRDM" },
          ],
        }
      ],
    };
  }

  render() {
    return (
      <React.Fragment>

        <footer
          className="section bg-footer"
        >
          <Container>
            <Row>
              <Col lg={4}>
                <div className="footer-info mt-4">
                  <img src={LogoDark} alt="" height="35" />
                  <p className="text-muted mt-4 mb-2">Copyright © 2021 Reed Moon Rise
                  <br/><a className="text-muted" href="/">Privacy Policy</a> - <a className="text-muted" href="/">Terms & Conditions</a>
                  </p>
                </div>
              </Col>

              <Col lg={5}>
                <Row className="pl-0 md-lg-5">

                  {this.state.links.map((item, key) => (
                    <Col lg={6} key={key}>
                      <div className="mt-4">
                        <h5 className="f-20">{item.title}</h5>
                        <ul className="list-unstyled footer-link mt-3">
                          {item.child.map((linkItem, key) => (
                            <li key={key}>
                              <a target="_blank" rel="noreferrer" href={linkItem.link}>
                                {linkItem.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Col>
                  ))}

                  {this.state.links2.map((item, key) => (
                    <Col lg={6} key={key}>
                      <div className="mt-4">
                        <h5 className="f-20">{item.title}</h5>
                        <ul className="list-unstyled footer-link mt-3">
                          {item.child.map((linkItem, key) => (
                            <li key={key}>
                              <a target="_blank" rel="noreferrer" href={linkItem.link}>
                                {linkItem.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>

              <Col lg={3}>
                <Row className="pl-0 md-lg-5">
                    <Col lg={12}>
                      <div className="mt-4">
                        <h5 className="f-20">Follow Us</h5>

                        <div className="team-social mt-4 pt-2">
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a target="_blank" rel="noreferrer" href="https://t.me/RedMoonRDM" className="text-reset"><i className="mdi mdi-telegram"></i></a>
                            </li>
                            <li className="list-inline-item">
                              <a target="_blank" rel="noreferrer" href="https://twitter.com/RedMoonRDM" className="text-reset"><i className="mdi mdi-twitter"></i></a>
                            </li>
                            <li className="list-inline-item">
                              <a target="_blank" rel="noreferrer" href="https://web.facebook.com/RedMoonRDM" className="text-reset"><i className="mdi mdi-facebook"></i></a>
                            </li>
                            <li className="list-inline-item">
                              <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCKfw1LmwrY8czyY0Qv5MYmw" className="text-reset"><i className="mdi mdi-youtube"></i></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </footer>

      </React.Fragment>
    );
  }
}

export default Footer;
