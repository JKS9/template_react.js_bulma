import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './componentsContact.css';

export default function Contact() {
  const linkLinkedin = () => {
    window.open('https://www.linkedin.com/', '_blank');
  };

  const linkGitHub = () => {
    window.open('https://github.com/', '_blank');
  };

  const linktwitter = () => {
    window.open('https://twitter.com/', '_blank');
  };

  const linkInstagram = () => {
    window.open('https://www.instagram.com/', '_blank');
  };

  return (
    <div class="container">
      <h2 class="title is-3 titleSection googleFontsConcertOne">
        Lorem ipsum ?
      </h2>
      <p class="subtitle is-6 googleFontsPoppins fontSizeParagraphe">
        Feel free to contact me for more <strong>information.</strong> You can
        contact me by <strong>email</strong> or through the various{' '}
        <strong>social networks</strong> below.
      </p>
      <h2 class="has-text-centered pb-4 googleFontsMontserrat fontSizeSubtitle">
        <strong>Loremipsumdolorsitamet@gmail.com</strong>
      </h2>
      <div class="divider has-background-light" data-content="OR"></div>
      <div class="socialNetwork pt-4">
        <div class="columns has-text-centered is-mobile">
          <div class="column is-3">
            <button class="button is-dark is-medium" onClick={linkLinkedin}>
              <span class="icon is-medium">
                <FontAwesomeIcon
                  size="lg"
                  icon="fab fa-linkedin"
                  color="white"
                  alt="icon linkedin Etienne Juzans"
                />
              </span>
            </button>
          </div>
          <div class="column is-3">
            <button class="button is-dark is-medium" onClick={linkGitHub}>
              <span class="icon is-medium">
                <FontAwesomeIcon
                  size="lg"
                  icon="fab fa-github"
                  color="white"
                  alt="icon github Etienne Juzans"
                />
              </span>
            </button>
          </div>
          <div class="column is-3">
            <button class="button is-dark is-medium" onClick={linktwitter}>
              <span class="icon is-medium">
                <FontAwesomeIcon
                  size="lg"
                  icon="fab fa-twitter"
                  color="white"
                  alt="icon twitter Etienne Juzans"
                />
              </span>
            </button>
          </div>
          <div class="column is-3">
            <button class="button is-dark is-medium" onClick={linkInstagram}>
              <span class="icon is-medium">
                <FontAwesomeIcon
                  size="lg"
                  icon="fab fa-instagram"
                  color="white"
                  alt="icon instagram Etienne Juzans"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
