import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

import './componentsPageNotFound.css';

export default function PageNotFound() {
  return (
    <section class="section heightScreen">
      <div class="container">
        <h1 class="title has-text-centered">Oops !</h1>
        <h2 class="subtitle has-text-centered">
          We can't seem to find the page you're looking for, you can return to
          the home page <strong>below</strong>
        </h2>
        <h2 class="subtitle has-text-centered">
          Error code : <strong>404</strong>
        </h2>
        <div class="returnButton">
          <Link class="returnButtonMargin button is-dark is-large" to="/">
            <span class="icon is-medium">
              <FontAwesomeIcon icon={faHouse} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
