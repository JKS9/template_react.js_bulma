import React from 'react';
import 'bulma-timeline/dist/css/bulma-timeline.min.css';

import FetchDataPro from './fetchDataPro';
import Fetchdataschool from './fetchdataschool';

import './componentsTimeline.css';

export default function Timeline() {
  return (
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="timeline is-centered">
            <header class="timeline-header">
              <h2 class="tag is-medium is-dark googleFontsConcertOne">
                Experience
              </h2>
            </header>

            <FetchDataPro />

            <header class="timeline-header">
              <span class="tag is-medium is-dark">-</span>
            </header>
          </div>
        </div>
        <div class="column">
          <div class="timeline is-centered">
            <header class="timeline-header">
              <h2 class="tag is-medium is-dark googleFontsConcertOne">
                Formation
              </h2>
            </header>

            <Fetchdataschool />

            <header class="timeline-header">
              <span class="tag is-medium is-dark">-</span>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
}
