import React from "react";
import Book from "../Parts/Book";
import {isbnAssign} from "../../Util/bookHelpers";
import {genreLoading} from "../../Store/Actions/genresActions";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';

function HomeGenre(props) {
  let isbn;


  let bookArr = props.books.map(book => {
    isbn = isbnAssign(book);
    return (
      <Book
        key={`${props.genre.display_name}-${book.title}`}
        type="overview"
        isbn={isbn}
        book={book}
      />
    );
  });

  return (
    <div className="overview-genre">
      <Link 
       to={{pathname: `/genre/${props.genre.list_name_encoded}`}}
       className="overview-genre__title" 
       onClick={() => props.dispatch(genreLoading(true))}
      >
        {`${props.genre.display_name} ...`}
      </Link>
      <div className="overview-books">
        {bookArr}
      </div>
    </div>
  );
}

export default connect(null)(HomeGenre);
