import React from 'react';
import 'bulma-timeline/dist/css/bulma-timeline.min.css';
import dataSchool from '../../data/dataUser.json';

export default function Fetchdataschool() {
  const data = dataSchool.map(function (array) {
    let dataArray = array.formation.map(function (element) {
      return (
        <div class="timeline-item" key={element.Key}>
          <div class="timeline-marker is-dark"></div>
          <div class="timeline-content">
            <h3 class="heading has-text-weight-bold googleFontsPoppins fontSizeParagraphe">
              {element.nameOfDegree}
            </h3>
            <h4 class="is-size-7 has-text-weight-light googleFontsMontserrat">
              {element.Date}
            </h4>
            <h3 class="googleFontsMontserrat fontSizeParagraphe">
              {element.CourseTtile}
            </h3>
          </div>
        </div>
      );
    });
    return dataArray;
  });

  return data;
}
