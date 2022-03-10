import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import './componentsScrollButtonToTop.css';

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 250) {
      setVisible(true);
    } else if (scrolled <= 250) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div id="ScrollToTop">
      <button
        class="button is-medium ScrollToTop is-dark"
        style={{ display: visible ? 'inline' : 'none' }}
        onClick={scrollToTop}
      >
        <span class="icon is-medium">
          <FontAwesomeIcon icon={faArrowUp} color="white" />
        </span>
      </button>
    </div>
  );
}
