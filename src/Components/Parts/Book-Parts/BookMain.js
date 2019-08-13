import React from "react";
import AuthorArray from "./AuthArray"
import {detailLoading} from "../../../Store/Actions/detailActions";
import {Link} from "react-router-dom";
import { connect } from "react-redux";

function BookMain(props) {
  let bkCover = props.bkImg !== null ? props.bkImg : null;
  let descriptionBlock = <div className="book-container__description">
                          <h4>Description</h4>
                          <p>{props.dscrpt ? props.dscrpt : "No Description Available..."}</p>
                        </div>;

  return ( 
    <div className="book-container__gen-info" data-ref={props.type}>
      <div className="book-container__rank"> 
        <strong>#{props.rank}</strong>
      </div>
      <div className="book-container__cover" data-ref={props.type}>
        <Link 
        to={{pathname: `/book/${props.isbn}`, state: {bkCover, buyLnk: props.buyLnk}}}
        onClick={() => props.dispatch(detailLoading(true))}
        >
          <img  src={bkCover} alt={props.title} />
        </Link>
        {props.type === "genre" ? descriptionBlock : <></>}
      </div>
      <Link 
      to={{pathname: `/book/${props.isbn}`, state: {bkCover, buyLnk: props.buyLnk}}} 
      className="book-title"
      onClick={() => props.dispatch(detailLoading(true))}
      >
        {props.title}
      </Link>
      <div className="book-container__author-info">
        <p>by</p>
          <AuthorArray authors={props.author} type={props.type}/>
      </div>
    </div>
  );
}

export default connect(null)(BookMain);
