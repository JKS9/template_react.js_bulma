import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/svg/logo.svg';

import './componentsHeader.css';

export default function Header() {
  const [isActive, setisActive] = React.useState(false);

  const linkGitHub = () => {
    window.open('https://github.com/JKS9', '_blank');
  };

  return (
    <div id="Header">
      <div class="container">
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <Link className="navbar-item" to="/">
              <img src={Logo} width="75" alt="EtienneJuz developper JS Logo" />
            </Link>

            <button
              onClick={() => {
                setisActive(!isActive);
              }}
              className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasic"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>

          <div
            id="navbarBasic"
            className={`navbar-menu ${isActive ? 'is-active' : ''}`}
          >
            <div class="navbar-end">
              <a class="navbar-item googleFontsMontserrat" href="/#aboutMe">
                About me
              </a>
              <a class="navbar-item googleFontsMontserrat" href="/#experience">
                Experience
              </a>
              <a class="navbar-item googleFontsMontserrat" href="/#project">
                Project
              </a>
              <a class="navbar-item googleFontsMontserrat" href="/#contact">
                Contact
              </a>
              <div class="navbar-item">
                <div class="buttons">
                  <button
                    onClick={linkGitHub}
                    class="button is-dark is-medium"
                    style={{ width: isActive ? '100%' : '' }}
                  >
                    <span class="icon is-medium">
                      <i
                        class="fab fa-github"
                        alt="icone github Etienne Juzans"
                      ></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
