import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import "../App.css";
import Logo from "../Components/images/logo-no-background.svg";
class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const description = this.props.data.description;
    const tagLine = this.props.data.tagLine;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} num={500} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Our Styles
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div style={{ height: "280px", marginTop: "30px" }}>
                  <img src={Logo} className="App-logo" alt="logo" style={{ maxHeight: "100%", maxWidth: "100%" }} />
                </div>
                <h1 className="responsive-headline" style={{ margin: "20px 0 0 0", fontSize: "80px" }}>
                  {name}
                </h1>
              </div>
            </Fade>
            <Fade bottom duration={1200}>
              <h3 className="tag-line">{tagLine}</h3>
              <h3>" {description} "</h3>
            </Fade>
            <hr />
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
