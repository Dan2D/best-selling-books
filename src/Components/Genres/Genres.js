import React, {useEffect} from "react";
import Book from "../Parts/Book";
// import Loading from "../../Loading";
import {genreView} from "../../Store/Actions/genresActions";
import {isbnAssign, dateFormat, monthDateStatus} from "../../Util/bookHelpers";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
    return {
        genreView: (genreTxt) => {
            dispatch(genreView(genreTxt));
        }
    }
}

 function Genres(props) {
     const {genreView} = props;
     useEffect(() => {
        genreView(props.match.params.genre);
     }, [genreView, props.match.params.genre])

//     if (props.genre.list_name_encoded !== props.match.params.genre || props.genreTxt !== props.match.params.genre || props.content !== "genre"){
//       genreView(props.match.params.genre);
//   }

    if (props.genreLoading){
      return <div>Loading...</div>
    }
    document.querySelectorAll("genre-menu__btns").forEach(item => (item.style.visibility = "hidden"));
    let genre = document.querySelector(
      "button[data-name=" + props.genre.list_name_encoded + "]"
    );
    // let minDate = dateFormat(genre.dataset.minDate);
    // let maxDate = dateFormat(genre.dataset.maxDate);

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
            {/* Active from: {minDate} to {maxDate} */}
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
