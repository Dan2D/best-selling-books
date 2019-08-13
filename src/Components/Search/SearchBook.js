import React, { useEffect } from "react";
import ContentLoader from "react-content-loader";

function SrchBk(props) {
  let title = props.title;
   let rvwLnk;
 
   function handleAuthClick(e) {
    return props.onAuthClick(e.target.innerText, "author");
  }

  useEffect(() => {
    let placeholders = document.getElementsByClassName("srch-book-placeholder");
    let books = document.getElementsByClassName("book-hide");
    for (let i = 0; i < placeholders.length; i++) {
      placeholders[i].style.display = "none";
      books[i].style.display = "flex";
    }
  });

    if (props.title.length > 60) {
       title = title.substr(0, 60) + "...";
    }
    rvwLnk = `https://www.goodreads.com/book/show/${props.id}`;

  let bookPlaceholder = (
    <ContentLoader
      className="srch-book-placeholder"
      style={{ display: "block" }}
      height={550}
      width={300}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="0" y="0" rx="4" ry="4" width="40" height="39" />
      <rect x="0" y="515" rx="4" ry="4" width="250" height="13" />
      <rect x="0" y="50" rx="4" ry="4" width="300" height="450" />
      <rect x="0" y="535" rx="4" ry="4" width="150" height="13" />
      <rect x="0" y="555" rx="4" ry="4" width="100" height="13" />
    </ContentLoader>
  );

  return (
    <div className="srch-bk-container" data-ref={props.srchType}>
      {bookPlaceholder}
      <div className="book-hide" style={{ display: "none" }}>
        <div>
          <div className="srch-bk-container__indx">
            {props.indx ? props.indx + "." : null}
          </div>
          <img
            className="srch-bk-container__cover"
            src={props.cover}
            alt={props.title}
          />
          <h5 className="srch-bk-container__title">{title}</h5>
          {props.srchType === "title" ? (
            <div className="srch-bk-container__author-info">
              <p>by: </p>
              <button
                className="srch-bk-container__author-btns"
                onClick={e => handleAuthClick(e)}
              >
                {props.author}
              </button>
            </div>
          ) : null}
          <p>Published: {props.pubDt}</p>
        </div>
        <a href={rvwLnk} rel="noopener noreferrer" target="_blank">
          ...more info
        </a>
      </div>
    </div>
  );
}

export default SrchBk;
