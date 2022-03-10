import React from 'react';
import 'bulma-timeline/dist/css/bulma-timeline.min.css';
import dataPro from '../../data/dataUser.json';

export default function FetchDataPro() {
  let dataArray = dataPro[0].experiences.map(function (element) {
    return (
      <div class="timeline-item" key={element.Key}>
        <div class="timeline-marker is-dark"></div>
        <div class="timeline-content">
          <h3 class="heading has-text-weight-bold googleFontsPoppins fontSizeParagraphe">
            {element.CompanyName}
          </h3>
          <h4 class="is-size-7 has-text-weight-light googleFontsMontserrat">
            {element.Date}
          </h4>
          <h3 class="googleFontsMontserrat fontSizeParagraphe">
            {element.JobTtile}
          </h3>
          <a
            class="is-size-7 has-text-weight-light googleFontsPoppins"
            href={element.link}
          >
            <span>Know more</span>
          </a>
        </div>
      </div>
    );
  });
  return dataArray;
}
