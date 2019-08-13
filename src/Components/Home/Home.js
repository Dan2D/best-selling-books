import React, {useEffect} from "react";
import {getHomeContent} from "../../Store/Actions/genresActions";
import { connect } from "react-redux";
// import Loading from "../../Loading";
import HomeGenre from "./HomeGenre";
import "./Home.css";

const mapDispatchToProps = dispatch => {
    return {
    getHomeContent: () => {
      dispatch(getHomeContent);
    }
  }
}

function Home(props) {
  const {getHomeContent} = props;
  useEffect(() => {
    getHomeContent();
  }, [getHomeContent])
  
    if (props.genreLoading) {
      return <div>LOADING...</div>
    }
    if (props.genreLst.length > 0){
      var mainGenres = props.genreLst.slice(0, 5);
      var homeGenreList = [];

      function genHomeGenre(genreLst) {
        for (let i = 0; i < 5; i++) {
          homeGenreList.push(
            <HomeGenre
              key={genreLst[i].display_name}
              books={genreLst[i].books}
              genre={genreLst[i]}
            />
          );
        }
      }
      genHomeGenre(mainGenres);
    }
    return <div className="overview-container">{homeGenreList}</div>;  
  }
 
const mapStateToProps = (state) => {
  return {
    genreLst: state.genres.list,
    genreLoading: state.genres.genreLoading
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home)
