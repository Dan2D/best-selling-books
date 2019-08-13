import React from 'react';
import {Link} from 'react-router-dom';
import {isLoading} from "../../../Store/Actions/contentActions";
import {getSearchAuth} from "../../../Store/Actions/searchActions";
import {connect} from 'react-redux';

function AuthorArray(props) {
    let authorTxt = props.authors;
        if (typeof props.authors === "string"){
          authorTxt = props.authors.split(/,|\sand\s|\swith\s/);
        }
        let authorArr =  authorTxt.map((author, indx) => {
        let comma = "";
          if (indx < authorTxt.length - 1) {
            comma = ",";
          }
          return (
            <span key={author}>
              <Link to={`/search/author=${author.replace(" ", "+")}&pg=1`}
                className="author-btn"
                onClick={() => {
                  props.dispatch(isLoading(true));
                  props.dispatch(getSearchAuth(author));
                }}
              >
                {author + comma}
              </Link>
            </span>
          );
        });
    return (
    <div className="book-container__author-btns" data-ref={props.type}>
      {authorArr}
    </div>
    )
}

export default connect(null)(AuthorArray)


