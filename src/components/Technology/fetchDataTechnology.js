import React from 'react';
import dataTechnologys from '../../data/dataUser.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FetchDataTechnology() {
  const data = dataTechnologys.map(function (array) {
    let dataArray = array.technologys.map(function (element) {
      return (
        <div class="level-item has-text-centered" key={element.key}>
          <div>
            <h2 class="heading googleFontsMontserrat fontSizeTechnologys">
              {element.nameTechnology}
            </h2>
            <button class="title button is-dark is-medium">
              <span class="icon is-medium">
                <FontAwesomeIcon size="lg" icon={element.icone} color="white" />
              </span>
            </button>
          </div>
        </div>
      );
    });
    return dataArray;
  });

  return data;
}
