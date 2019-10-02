import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {isLoading} from "../../Store/Actions/contentActions";
import {getGenreDates, genreLoading} from "../../Store/Actions/genresActions";
import {getGenres} from "../../Store/Actions/menuActions";
import Searchbar from "./Searchbar";
import Datebar from "./Datebar";
import Menu from "./GenreMenu/Menu";
import "./Header.css";


const mapDispatchToProps = dispatch => {
  return {
      loadingTrue: () => {
        dispatch(isLoading(true))
      },
      getGenres: () => {
        dispatch(getGenres);
      },
      getGenreDates: (minDate, maxDate) => {
        dispatch(getGenreDates(minDate, maxDate));
      },
      genreLoading: (bool) => {
        dispatch(genreLoading(bool))
      }
  }
}

function Header(props) {
  const {getGenres, genreLoading} = props;
    useEffect(() => {
      getGenres();
    },[getGenres]);



  const handleHomeClick = () => {
    if (props.content !== "home"){
      genreLoading(true);
    }
  }
  
  if (props.menuLoading) {
    return <></>;
  }

  return (
    <nav className="nav">
      <div className="nav-top">
        <div className="nav__title-corner">
          <Link to="/">
          <button className="nav__home-btn" onClick={handleHomeClick}>
            <img src={require("../../Images/home.png")} alt="home-btn"/>
          </button>
          </Link>
          <h1 className="nav__site-title">BSB</h1>
        </div>
        <div className="nav-menu">
          <Searchbar />
          <Datebar />
        </div>
      </div>
      <div className="nav-bottom">
        <Menu
          onGenreClick={(genre, minDate, maxDate) => props.onGenreClick(genre, minDate, maxDate)}
          genreLst={props.navGenres}
        />
      </div>
    </nav>
  );
}

// const MemoHeader = React.memo(Nav, (prevProps, nextProps) => {
//   return (
//     prevProps.genreTxt === nextProps.genreTxt &&
//     prevProps.date === nextProps.date &&
//     prevProps.navGenres === nextProps.navGenres &&
//     prevProps.searchTxt === nextProps.searchTxt &&
//     prevProps.searchTyp === nextProps.searchTyp &&
//     prevProps.content === nextProps.content
//   );
// });

const mapStateToProps = state => {
  return {
    menu: state.menu,
    genreTxt: state.genres.text,
    menuLoading: state.menu.menuLoading,
    content: state.content.text
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Header)
