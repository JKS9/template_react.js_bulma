import React from 'react';
import FetchDataProjectAll from './fetchDataProjectAll';
import './componentsProject.css';

export default function Project() {
  return (
    <div class="container">
      <p class="subtitle is-5 googleFontsPoppins fontSizeSubtitle">
        Here are some experiences that have been very meaningful to me during my
        journey as a JavaScript developer
      </p>
      <div class="columns is-multiline">
        <FetchDataProjectAll />
      </div>
    </div>
  );
}
