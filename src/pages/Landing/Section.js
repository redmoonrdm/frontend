import React, { Component } from "react";
import { Container, Row, Col, FormGroup, Input, Label, Button } from "reactstrap";

import Img from '../../assets/images/copy.png';
import Img1 from '../../assets/images/users/1.png';
import Img2 from '../../assets/images/users/2.png';
import Img3 from '../../assets/images/users/3.png';
import Img4 from '../../assets/images/users/4.png';

class Section extends Component {
  constructor () {
    super()
    this.state = {
      services: [
        {
          id: 'service1',
          icon: 'mdi-account-group-outline',
          title: "Community",
          description: "Every community member can participate in future development, and each platform is fully decentralized."
        },
        {
          id: 'service2',
          icon: 'mdi-backup-restore',
          title: "Rewards",
          description: 'Profits from all platforms on the ecosystem will be distributed to all community members with a more fair allocation.'
        },
        {
          id: 'service3',
          icon: 'mdi-shield-outline',
          title: "Safu RDM",
          description: 'Extra security protocol outside of token contracts, more flexible protocols by separating contracts according to needs.'
        },
        {
          id: 'service3',
          icon: 'mdi-coins',
          title: "Moonrise",
          description: 'Moonrise launches new platforms in the future relentless innovation is not limited to just one platform or use case.'
        },
      ],
      pricing: [
        {
          id: 1,
          title: "Gamma",
          description: '',
          icon: 'mdi-alpha-g-circle-outline text-primary',
          titlePrimary: false,
          pricingTag: false,
          child: [
            { btitle: '', title: "Release", icon: "mdi-checkbox-marked-circle text-success" },
            { btitle: '', title: "Private Sale", icon: "mdi-circle text-transparent" },
            { btitle: '', title: "Presale", icon: "mdi-circle text-transparent" },
            { btitle: '', title: "Initial DEX Offering", icon: "mdi-circle text-transparent" },
            { btitle: '', title: "Marketing", icon: "mdi-circle text-transparent" },
          ],
        },
        {
          id: 2,
          title: "Beta",
          titlePrimary: false,
          description: '',
          icon: 'mdi-alpha-b-circle-outline text-primary',
          pricingTag: false,
          child: [
            { btitle: '', title: "Marketing", icon: "mdi-circle text-transparent" },
            { btitle: '', title: "CMC, CG Listing", icon: "mdi-circle text-transparent" },
            { btitle: '', title: "Partnership", icon: "mdi-circle text-transparent" },
            { btitle: '', title: "Sharding Pool", icon: "mdi-circle text-transparent" },
            { btitle: '', title: "RedShard Release", icon: "mdi-circle text-transparent" },
          ],
        },
        {
          id: 3,
          title: "Alpha",
          description: '',
          titlePrimary: false,
          icon: 'mdi-alpha-a-circle-outline text-primary',
          pricingTag: false,
          child: [
            { btitle: '', title: "Frontend V2", icon: "mdi-circle text-transparent" },
            { btitle: '', title: "Security Audit", icon: "mdi-circle text-transparent" },
            { btitle: '', title: "RedShard Stable", icon: "mdi-circle text-transparent" },
            { btitle: '', title: "Moonrise", icon: "mdi-circle text-transparent" },
            { btitle: '', title: "CEX Listing", icon: "mdi-circle text-transparent" },
          ],
        },
        {
          id: 4,
          title: "Theta",
          description: '',
          titlePrimary: false,
          icon: 'mdi-alpha-t-circle-outline text-primary',
          pricingTag: false,
          child: [
            { btitle: '', title: "Marketing", icon: "mdi-circle text-transparent" },
            { btitle: '', title: "Frontend V2", icon: "mdi-circle text-transparent" },
            { btitle: '', title: "Partnership", icon: "mdi-circle text-transparent" },
            { btitle: '', title: "New Projects", icon: "mdi-circle text-transparent" },
            { btitle: '', title: "Delta Events", icon: "mdi-circle text-transparent" },
          ],
        },
      ],

      teams: [
        {
          id: 1,
          img: Img1,
          name: 'Suprayetno',
          nickname: 'Prayd',
          description: 'RedMoon Founder, Computer Science graduate and working as Software Engineer since 2014. is now focusing on blockchain as the future.',
          fb: 'https://web.facebook.com/praymeid',
          twt: 'https://twitter.com/praymeid',
          insta: 'https://www.instagram.com/praymeid/',
        },
        {
          id: 2,
          img: Img2,
          name: 'Hajir Asyafi',
          nickname: 'Hajir',
          description: 'RedMoon Co-Founder, Islamic Law graduate who has an interest in information technology, coding, and blockchain design as a hobby.',
          fb: 'https://web.facebook.com/hajirsenoasyafi',
          twt: 'https://twitter.com/onezenoisme',
          insta: 'https://www.instagram.com/zeno717/',
        },
        {
          id: 3,
          img: Img3,
          name: 'Nurohman',
          nickname: 'Rohman',
          description: 'RedMoon Co-Founder. a Crypto trader and observer since 2016. currently active in exploring business development and marketing.',
          fb: 'https://web.facebook.com/gundoelalfonso',
          twt: '',
          insta: 'https://www.instagram.com/boedesgundoel/',
        },
        {
          id: 4,
          img: Img4,
          name: 'Nurkholis',
          nickname: 'NK',
          description: 'Crypto enthusiast and observer who has an interest in blockchain, economic models, business development, and marketing strategy.',
          fb: 'https://web.facebook.com/profile.php?id=100061030488461',
          twt: 'https://twitter.com/nurkholis3717',
          insta: '',
        },
      ],

    }
    this.btnTapped = this.btnTapped.bind(this);
  }

  btnTapped() {
    var copyText = document.getElementById("contract");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied Address: " + copyText.value);
  }

  render() {

    return (
      <React.Fragment>

        {/* ------  ------ */}
        <section className="bg-home" id="home">
          <div className="home-center">
            <div className="home-desc-center">
              <Container>
                <Row className="align-items-center">
                  <Col lg={8}>
                    <div className="home-content">
                    <Row>
                    <Col lg={10}>
                      <h1 className="home-title">DeFi Community-Driven
                      <br/>for <span className="text-primary">Financial Freedom</span>
                      </h1>
                      <p className="mt-4 f-17">
                      RedMoon is a DeFi Community-Driven that focuses on decentralized Web3 projects, and it is not limited to a single platform or use case.
                      <br/>
                      RedMoon has an initial project called RedShard, a decentralized multi-platform
                      <br/>Copy Trading as the initial process in creating an ecosystem.
                      <br/>
                      <br/>
                      New platforms will be launched on Moonrise when the submitted proposal has meet community agreement to realize it.
                      </p>
                    </Col>
                    </Row>
                      <Row>
                      <div className="mt-2 col-lg-8">

                        <div className="search-form">
                          <div className="search-margin">
                            <Input id="contract" type="text" defaultValue="0x9ba4909e46a7a12d7be5057d35cda01ce3fd258b" placeholder="0x9ba4909e46a7a12d7be5057d35cda01ce3fd258b" style={{ height: 'unset' }} />
                            <Button onClick={this.btnTapped} className="btn btn-outline-danger">Copy Address</Button>
                          </div>
                        </div>

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
                      </Row>
                    </div>
                  </Col>
                  <Col lg={4}>

                  <div className="contact-box mt-4">
                    <h5 className="f-20">Private Sale <span className="text-primary">Live</span>
                    <br/>-21,000,000 RDM left
                    </h5>
                    <div id="countdown"></div>
                    <p className="f-17">21,000,000 RDM Private Sale allocation
                    <br/>
                    After private sale token sold, presale schedule will be announced soon.
                    </p>
                    <a target="_blank" rel="noreferrer" href="https://forms.gle/CYxfpgDMG6qaqB3g8" className="btn btn-sm btn-soft-danger mr-3">Join Private Sale</a>
                  </div>

                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </section>

        {/* ------  ------ */}
        <section className="section bg-light">
          <Container>
            <Row>
              <Col lg={3}>
                <div className="client-images">
                  <h3>700Mn <span className="f-20">Genesis</span></h3>
                </div>
              </Col>
              <Col lg={3}>
                <div className="client-images">
                  <h3>350Mn <span className="f-20">Supply</span></h3>
                </div>
              </Col>
              <Col lg={3}>
                <div className="client-images">
                  <h3>- <span className="f-20">Market Cap</span></h3>
                </div>
              </Col>
              <Col lg={3}>
                <div className="client-images">
                  <h3>- <span className="f-20">Fully Diluted</span></h3>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* ------  ------ */}
        <section className="section bg-services" id="ecosystem">
          <Container>
            <Row>
              <Col lg="12">
                <div className="title-box text-center">
                  <h3 className="title-heading"><span className="text-primary">RDM</span> Ecosystem</h3>
                  <p className="text-muted f-17">
                  We build a strong community for better ecosystem
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mt-2 pt-2">
              {this.state.services.map((item, key) => (
                <Col lg={3} key={key}>
                  <div className="services-box mt-4">
                    <div className="services-icon">
                      <i className={"mdi text-primary " + item.icon}></i>
                    </div>
                    <h5 className="mt-1">{item.title}</h5>
                    <p className="text-muted">{item.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* ------ copy trading ------ */}
        <section className="section bg-features">
          <Container>
            <Row>
              <Col lg={12} className="mb-4">
                <div className="title-box text-center">
                  <h3 className="title-heading"> Initial <span className="text-primary">Project</span></h3>
                  <p className="text-muted f-17">RedShard as initial project to build an ecosystem</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="mb-4" lg={7}>
                <div>
                  <img className="img-fluid" src={Img} alt="" />
                </div>
              </Col>
              <Col lg={5}>
                <div className="pl-4">
                  <h3><span className="text-primary">Decentralized</span> Copy Trading<br/>Multi-Platform</h3>
                  <p className="text-muted mt-3">
                  RedShard is a Decentralized Multi-Platform Copy Trading, an external copy trading platform from various crypto exchanges like Binance, Poloniex, etc.
                  <br/>
                  The users only need to provide an exchange API. Then, the users can take benefit by becoming a trader or investors.
                  <br/>
                  The platform will run decentralized, and each user can propose the applied fees, vote for bad traders, or block them.
                  <br/>
                  <br/>
                  RDM tokens will be the only payment method, and any community member can apply or agree on the applied fees. Then any profits will be shared among all community members.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* ------  ------ */}
        <section className="section bg-services" id="roadmap">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="title-box text-center">
                  <h3 className="title-heading"><span className="text-primary">Wave</span> Map</h3>
                  <p className="text-muted f-17">Delta is the last wave and will be remapped into Delta Events</p>
                </div>
              </Col>
            </Row>
            <Row className="pt-2">
              {this.state.pricing.map((item, key) => (
                <Col lg="3" key={key}>
                  <div className={key === 0 ? "pricing-box active" : "pricing-box"}>
                    <i className={"h1 mdi " + item.icon}></i>
                    <h4 className="f-20 mt-2"> {item.title}</h4>
                    <div className="mt-2">
                      {item.child.map((linkItem, linkkey) => (
                        <p className="mb-2" key={linkkey}><i
                          className={"mdi " + linkItem.icon + " f-18 mr-2"}></i><b>{linkItem.btitle}</b> {linkItem.title}</p>
                      ))}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* ------ team ------ */}
        <section className="section bg-features" id="team">
          <Container>
            <Row>
              <Col lg="12">
                <div className="title-box text-center">
                  <h3 className="title-heading mt-4">Doxxed <span className="text-primary">Teams</span></h3>
                  <p className="text-muted f-17 mt-3">It is supported by a team that shares the vision to build RedMoon</p>
                </div>
              </Col>
            </Row>
            <Row>
              {this.state.teams.map((team, teamindex) => (
                <Col lg={3} className="team-box p-3" key={teamindex}>
                  <div className="mt-4">
                    <img src={team.img} alt="" className="rounded mb-2" height="270" />
                    <h5 className="mt-2">{team.name}</h5>
                    <p className="team-badge bg-primary text-white rounded f-14 mt-2">#{team.nickname}</p>
                    <p className="text-muted mt-2">{team.description}</p>
                    <div className="team-social mt-4 pt-2">
                    <ul className="list-inline mb-0">
                      {team.fb !== '' && (
                      <li className="list-inline-item">
                        <a target="_blank" href={team.fb} rel="noreferrer" className="text-reset"><i className="mdi mdi-facebook"></i></a>
                      </li>
                      )}
                      {team.twt !== '' && (
                      <li className="list-inline-item">
                        <a target="_blank" href={team.twt} rel="noreferrer" className="text-reset"><i className="mdi mdi-twitter"></i></a>
                      </li>
                      )}
                      {team.insta !== '' && (
                      <li className="list-inline-item">
                        <a target="_blank" href={team.insta} rel="noreferrer" className="text-reset"><i className="mdi mdi-instagram"></i></a>
                      </li>
                      )}
                    </ul>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* ------  ------ */}
        <section className="section bg-cta">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="text-center">
                  <h2>Join <span className="text-primary">With Us</span></h2>
                  <p className="text-muted mt-3">
                  New platforms will be launched on Moonrise when the submitted proposal has meet community agreement to realize it
                  <br/>
                  Every community member can participate in future development, and each platform is fully decentralized
                  </p>
                  <div className="mt-4 pt-2">
                    <a target="_blank" rel="noreferrer" href="https://forms.gle/CYxfpgDMG6qaqB3g8" className="btn btn-soft-danger">Join Private Sale</a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* ------ contact ------ */}
        <section className="section bg-features" id="contact">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="title-box text-center">
                  <h3 className="title-heading mt-4">Contact <span className="text-primary">Us</span></h3>
                  <p className="text-muted f-17">We are also available on social media
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                  <div className="contact-box mt-4">
                    <i className="mdi text-primary mdi-coffee-outline"></i>
                    <h5>Let's Talk!</h5>
                    <p className="text-muted">
                    Ask anything, at anytime.
                    <br/>
                    Contact us for any questions that allow for further discussion.
                    <br/>
                    If form has problems, contact us directly to the following email :
                    <br/>
                    <br/>
                    <h6>team@redmoonrise.com</h6>
                    </p>
                  </div>
              </Col>
              <Col lg={8}>
                <div className="custom-form mt-2">
                  <div id="message"></div>
                  <div id="contact-form">
                    <Row>
                      <Col lg={12}>
                        <FormGroup>
                          <Label>Name</Label>
                          <Input name="name" id="name" className="form-control" type="text" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <FormGroup>
                          <Label>Email</Label>
                          <Input name="email" id="email" className="form-control" type="text" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <FormGroup>
                          <Label>Message</Label>
                          <Input type="textarea" name="comments" id="comments" rows="5" className="form-control" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <Input id="submit" name="send" color="primary" className="submitBnt btn btn-soft-danger btn-round" value="Send Message" type="submit" style={{width: 'auto',color: '#fff'}} />{' '}
                        <div id="simple-msg"></div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

      </React.Fragment>
    );
  }
}

export default Section;
