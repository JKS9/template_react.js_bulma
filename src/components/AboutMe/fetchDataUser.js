import React from 'react';

import data from '../../data/dataUser.json';

export default function FetchDataUser() {
  const dataUser = data.map(function (element) {
    return (
      <div class="column" key={element.user.key}>
        <h1 class="is-size-3 has-text-centered pt-5 is-dark has-text-weight-light googleFontsConcertOne">
          {element.user.name}
        </h1>
        <h2 class="is-size-4 has-text-centered has-text-weight-light googleFontsMontserrat">
          {element.user.title}
        </h2>
        <h2 class="is-size-4 has-text-centered has-text-weight-light googleFontsMontserrat">
          {element.user.subtitle}
        </h2>
        <p class="is-size-6 has-text-centered pt-3 has-text-weight-light textBio googleFontsPoppins fontSizeParagraphe">
          {element.user.text}
        </p>
        <p class="is-size-6 has-text-centered has-text-weight-light textBio googleFontsPoppins fontSizeParagraphe">
          {element.user.location}
        </p>
      </div>
    );
  });

  return dataUser;
}
