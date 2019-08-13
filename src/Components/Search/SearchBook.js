import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import {searchLoading,} from "../../Store/Actions/searchActions";
import {connect} from "react-redux";
import BookPlaceholder from "../Parts/Book-Parts/BookPlaceholder";

function SrchBk(props) {
  let title = props.title;
   let rvwLnk;
 
   function handleAuthClick(e) {
     e.preventDefault();
     props.dispatch(searchLoading(true));
     e.target.parentElement.click();
    // return props.onAuthClick(e.target.innerText, "author");
  }

  useEffect(() => {
    let placeholders = document.getElementsByClassName("book-placeholder");
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

  return (
    <div className="srch-bk-container" data-ref={props.srchType}>
      <BookPlaceholder />
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
          {props.searchType === "title" ? (
            <div className="srch-bk-container__author-info">
              <p>by: </p>
              <Link to={`/search/author=${props.author}&pg=1`}>
                <button
                  className="srch-bk-container__author-btns"
                  onClick={e => handleAuthClick(e)}
                >
                  {props.author}
                </button>
              </Link>
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

export default connect(null)(SrchBk);
