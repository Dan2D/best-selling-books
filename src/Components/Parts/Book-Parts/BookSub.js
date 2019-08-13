import React, { Component } from "react";
import Rating from "./Ratings"
import {API_CALLS} from "../../../Util/APICalls";

const { GR_KEY } = API_CALLS["GR"];
const CORS = "https://cors-anywhere.herokuapp.com/";

class BookSub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      id: ""
    };
  }
  componentDidMount() {
    let _this = this;
    fetch(
      `${CORS}https://www.goodreads.com/search/index.xml?key=${GR_KEY}&q=${this.props.isbn}`
    )
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => {
        if (data.querySelector("search total-results").textContent === "0") {
          return 
        }
        let id = data.querySelector("results work best_book id").textContent;
        let avgRating = data.querySelector("results work average_rating").textContent;
        _this.setState({rating: avgRating, id: id})
        return;
      });
}
  render() {
    return (
      <div className="book-container__sub-info">
        <a
          className="book-buy-link"
          href={this.props.buyLnk.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          Buy this Book
        </a>
        <div className="sub-info__rating">
          <Rating rating={this.state.rating}/>
        </div>
        <a
          href={`https://www.goodreads.com/book/show/${this.state.id}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          Read Reviews
        </a>
      </div>
    );
  }
}
export default BookSub;
