import React from "react";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {getGenreDates, genreLoading} from "../../../Store/Actions/genresActions";

function SubMenuLnks(props) {

  function handleGenreClick(e) {
    e.preventDefault();
      let dateMin = e.currentTarget.dataset.minDate;
      let dateMax = e.currentTarget.dataset.maxDate;
      props.dispatch(genreLoading(true));
      props.dispatch(getGenreDates(dateMin, dateMax));         
      document.documentElement.focus();
      e.target.click();
  }

  function handleMouseOver(e) {
    if (window.innerWidth > 1024){
      let genre = e.currentTarget.dataset.ref;
      let btn = document.querySelector(`.genre-menu__btn[data-ref="${genre}"]`);
      if (!btn.classList.contains("open")){
        return btn.classList.add("open");
      }
      btn.classList.remove("open");
    }
    return;
  }

  function genGenreBtns(array) {
    return array.map((btn, indx) => {
      return (
        <Link key={`${btn.display_name}-${indx}`} to={`/genre/${btn.list_name_encoded}`}>
          <button
            data-name={btn.list_name_encoded}
            data-min-date={btn.oldest_published_date}
            data-max-date={btn.newest_published_date}
            onMouseDown={(e) => handleGenreClick(e)}
          >
            {btn.display_name}
          </button>
        </Link>
      );
    });
  }

  return (
    <div
      className="genre-menu__btns"
      data-ref={props.title}
      tabIndex="-1"
      onMouseEnter={(e) => handleMouseOver(e)}
      onMouseLeave={(e) => handleMouseOver(e)}
    >
      {genGenreBtns(props.subGenres)}
    </div>
  );
}

export default connect(null)(SubMenuLnks)
