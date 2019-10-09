import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {isLoading} from "../../Store/Actions/contentActions";
import {genreLoading} from "../../Store/Actions/genresActions";
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
        <Menu onGenreClick={(genre, minDate, maxDate) => props.onGenreClick(genre, minDate, maxDate)} />
      </div>
    </nav>
  );
}

const mapStateToProps = state => {
  return {
    menu: state.menu,
    genre: state.genres,
    menuLoading: state.menu.menuLoading,
    content: state.content.text
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Header)
