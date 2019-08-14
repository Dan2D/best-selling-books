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
    e.target.parentElement.parentElement.style.visibility = "hidden";
    e.target.parentElement.click();
  }

  function handleSubGenreMenu(e) {
    e.target.style.visibility = "hidden";
    e.target.parentElement.firstChild.firstChild.style.color = "";
    e.target.parentElement.firstChild.style.background = "";
  }

  function genGenreBtns(array) {
    return array.map(btn => {
      return (
        <Link key={btn.display_name} to={`/genre/${btn.list_name_encoded}`}>
          <button
            data-name={btn.list_name_encoded}
            data-min-date={btn.oldest_published_date}
            data-max-date={btn.newest_published_date}
            onMouseDown={handleGenreClick}
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
      onBlur={e => handleSubGenreMenu(e)}
    >
      {genGenreBtns(props.subGenres)}
    </div>
  );
}

export default connect(null)(SubMenuLnks)
