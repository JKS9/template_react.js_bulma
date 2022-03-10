import React, { useEffect, useState } from 'react';

import './componentsFooter.css';

export default function Footer() {
  const [dateWebSite, setDateWebSite] = useState(2022);

  useEffect(() => {
    const todayDate = new Date();
    const todayDateYear = todayDate.getFullYear();

    if (todayDateYear !== dateWebSite) {
      setDateWebSite(todayDateYear);
    }
  }, [dateWebSite]);

  return (
    <div id="Footer">
      <footer className="footer googleFontsPoppins">
        <div className="content has-text-centered">
          <p className="textFooter">
            Copyright &copy; {dateWebSite}{' '}
            <strong class="googleFontsConcertOne">Etiennejuz</strong>. All
            Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
