import React, {useEffect} from "react";
import Loader from "../Parts/Loader";
import AuthorArray from "../Parts/Book-Parts/AuthArray";
import Ratings from "../Parts/Book-Parts/Ratings";
import {getBookDetail} from "../../Store/Actions/detailActions";
import {connect} from "react-redux";
import "./DetailBook.css";

const mapDispatchToProps = dispatch => {
    return {
        getBookDetail: (cover, id) => {
            dispatch(getBookDetail(cover, id));
        }
    }
}

function SingleBk (props) {
    const {getBookDetail} = props;
    useEffect(() => {
      document.documentElement.scrollTo(0,0);
        getBookDetail(props.location.state.bkCover, props.match.params.id);
    }, [getBookDetail, props.match.params.id, props.location.state.bkCover])

    if (props.detailLoading){
      return <Loader isLoading={props.detailLoading}/>
    }

    setTimeout(() => {document.getElementById("bk-description").innerHTML = props.book.dscrpt;}, 500);

    return (
      <div className="sngl-bk-container">
        <div className="sngl-bk-main">
          <div className="sngl-bk-main__cover-title">
            <img src={props.location.state.bkCover} alt={props.book.title} />
            <h3>{props.book.title}</h3>
            <div className="book-container__author-info">
              <p>by</p>
              <AuthorArray authors={props.book.author}/>
            </div>
          </div>
          <div className="sngl-bk-main__dscrpt">
            <h5>Description</h5>
            <p id="bk-description"></p>
          </div>
        </div>
        <div className="sngl-bk-sub">
          <Ratings rating={props.book.rating}/>
          <p>{`Total Pg: ${props.book.pgNum}`}</p>
          <p>{`ISBN13: ${props.book.isbn13}`}</p>
          <p>{`Published: ${props.book.pubMt}/${props.book.pubDy}/${props.book.pubYr}`}</p>
          <a
          href={`https://www.goodreads.com/book/show/${props.id}`}
          rel="noopener noreferrer"
          target="_blank"
        > Read Reviews
        </a>
        <a
          className="book-buy-link"
          href={props.location.state.buyLnk.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          Buy this Book
        </a>
        </div>
      </div>
    );
  }

  

const mapStateToProps = (state) => {
  return {
    detailLoading: state.detail.detailLoading,
    book: state.detail.book,
    content: state.content.text,
    id: state.detail.id
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBk);
