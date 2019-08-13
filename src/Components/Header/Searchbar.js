import React from "react";
import {Link} from "react-router-dom";
import {updateSearchTxt, updateSearchType, searchLoading} from "../../Store/Actions/searchActions";
import {connect} from "react-redux";

function Searchbar(props) {
  function handleSelectUpdate(e) {
    return props.dispatch(updateSearchType(e.target.value));
  }

  function handleSearchText(e) {
    return props.dispatch(updateSearchTxt(e.target.value));
  }

  function handleEnter(e) {
    if (e.keyCode === 13) {
      e.target.blur();
      return handleSearchSubmit(e);
    }
    return;
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (props.search.text === "" || (props.search.prevSearch === props.search.text && props.search.type === props.search.prevType)){
      return null;
    }
    let searchLnk = document.getElementById("search-link");
    props.dispatch(searchLoading(true));
    searchLnk.click()
  }

  return (
    <div className="search">
      <select
        className="search search__type"
        value={props.search.type}
        onChange={handleSelectUpdate}
        name="search-options"
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>
      <input
        className="search search__input"
        type="text"
        placeholder="Search..."
        onChange={handleSearchText}
        onKeyDown={handleEnter}
        value={props.search.text}
      />
      <Link 
        id="search-link" 
        to={`/search/${props.search.type}=${props.search.text.replace(" ", "+")}&pg=1`}
        >
        <button className="search search__btn" onClick={(e) => handleSearchSubmit(e)}>
          Search
        </button>
      </Link>
    </div>
  );
}

const MemoSearchbar = React.memo(Searchbar, (prevProps, nextProps) => {
  if (prevProps === nextProps) {
    return true;
  }
  return false;
});

const mapStateToProps = (state) => {
  return {
    search: state.search

  }
}

export default connect(mapStateToProps)(MemoSearchbar)
