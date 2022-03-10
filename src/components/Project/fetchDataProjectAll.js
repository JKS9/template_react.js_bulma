import dataProject from '../../data/dataUser.json';

export default function FetchDataProjectAll() {
  const data = dataProject[0].experiences.map(function (element) {
    const array = element.tag;

    let result = (
      <div class="column is-4" key={element.Key}>
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <h2 class="title is-4 googleFontsConcertOne">
                  {element.CompanyName}
                </h2>
                <h2 class="subtitle is-6 googleFontsMontserrat fontSizeSubtitle">
                  {element.JobTtile}
                </h2>
              </div>
            </div>

            <div class="content textProject googleFontsPoppins fontSizeParagraphe">
              <p>{element.text}</p>
            </div>
            <div class="tags googleFontsPoppins">
              {array.map(function (tag) {
                return (
                  <span key={tag.Key} class="tag is-dark fontSizeTag">
                    {tag.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
    return result;
  });

  return data;
}
