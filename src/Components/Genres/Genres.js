import React, {useEffect} from "react";
import Book from "../Parts/Book";
import Loader from "../Parts/Loader";
import {genreView} from "../../Store/Actions/genresActions";
import {isbnAssign, dateFormat, monthDateStatus} from "../../Util/bookHelpers";
import { connect } from "react-redux";
import "./Genres.css";

const mapDispatchToProps = dispatch => {
    return {
        genreView: (genreTxt) => {
            dispatch(genreView(genreTxt));
        }
    };
};

 function Genres(props) {
     const {genreView} = props;
     let minDate, maxDate, genre;
     if (document.querySelector("button[data-name=" + props.genre.list_name_encoded + "]")){
      genre = document.querySelector("button[data-name=" + props.genre.list_name_encoded + "]");
      minDate = dateFormat(genre.dataset.minDate);
      maxDate = dateFormat(genre.dataset.maxDate);
    }
     useEffect(() => {
       if (props.genreLoading){
        genreView(props.match.params.genre);
      }
     }, [genreView, props.match.params.genre, props.genreLoading])

    if (props.menuLoading || props.genreLoading || props.match.params.genre !== props.genreTxt){
      return <Loader isLoading={props.genreLoading} />
    }
    document.querySelectorAll("genre-menu__btns").forEach(item => (item.style.visibility = "hidden"));

 

    let bookArr = props.books.map((book, indx) => {
      let isbn = isbnAssign(book);
      return (
        <Book
          key={book.title + "-" + indx}
          type="genre"
          indx={indx}
          isbn={isbn}
          book={book}
        />
      );
    });

    return (
      <div className="genre-container">
        <div className="genre-container__title-block">
          <h3>{props.genre.display_name}</h3>
          <p>
            Active from: {minDate} to {maxDate}
          </p>
          <p>{monthDateStatus(props.genre.display_name)}</p>
          </div>
          <div className="booklist-container">
          {bookArr}
        </div>
      </div>
    );
  }

const mapStateToProps = (state) => {
  return {
    menu: state.menu,
    menuLoading: state.menu.menuLoading,
    genre: state.genres.list,
    content: state.content.text,
    genreTxt: state.genres.text,
    books: state.genres.list.books,
    dateMin: state.genres.dateMin,
    dateMax: state.genres.dateMax,
    genreLoading: state.genres.genreLoading
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Genres);
