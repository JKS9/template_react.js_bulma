import React from 'react';
import FetchDataProjectAll from './fetchDataProjectAll';
import './componentsProject.css';

export default function Project() {
  return (
    <div class="container">
      <p class="subtitle is-5 googleFontsPoppins fontSizeSubtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae
        facilisis ex. Morbi dapibus ultrices placerat.
      </p>
      <div class="columns is-multiline">
        <FetchDataProjectAll />
      </div>
    </div>
  );
}
