import React from "react";
import {connect} from "react-redux";
import "./Footer.css";

function Footer(props) {
    if (props.menuLoading){
        return <></>;
    }
  return (
    <div className="footer-container">
      <div className="footer-container__left">
        <p>Portfolio: <a href="https://danschultz.dev" rel="noopener noreferrer" target="_blank">https://danschultz.dev</a></p>
        <p>Code & Design by Dan Schultz</p>
        <p>Copyright&#9400; 2019</p>
      </div>
      <div className="footer-container__right">
      <h5>Resources</h5>
        <a
          href="https://www.nytimes.com/books/best-sellers/"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://www.nytimes.com/books/best-sellers/
        </a>
        <a
          href="https://www.goodreads.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://www.goodreads.com
        </a>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
    return {
        menuLoading: state.menu.menuLoading,
        genreLoading: state.genres.genreLoading,
        detailLoading: state.detail.detailLoading,
        searchLoading: state.search.searchLoading
    }
}

export default connect(mapStateToProps)(Footer);
