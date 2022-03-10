import React from 'react';

import FetchDataUser from './fetchDataUser.js';
import EtienneBG from '../../assets/images/jpeg/EtienneJuzans.jpg';
import './componentsAboutMe.css';

export default function AboutMe() {
  return (
    <div class="container">
      <div class="columns is-vcentered is-gapless">
        <div class="column is-two-fifths">
          <figure class="image is-480x600">
            <img
              className="pictureEtienne"
              src={EtienneBG}
              alt="Juzans Etienne Developper JS Paris"
            />
          </figure>
        </div>
        <FetchDataUser />
      </div>
    </div>
  );
}
