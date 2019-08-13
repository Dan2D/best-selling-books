import React, {Component} from "react";
// import {getHomeContent} from "../../Store/Actions/genresActions";
import { connect } from "react-redux";
// import Loading from "../../Loading";
import HomeGenre from "./HomeGenre";
import '../App/App.css';

class Home extends Component{
  render(){
    if (this.props.isLoading) {
      return <div>LOADING...</div>
    }
    if (this.props.genreLst.length > 0){
      var mainGenres = this.props.genreLst.slice(0, 5);
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
}
 
const mapStateToProps = (state, ownProps) => {
  return {
    genreLst: state.genres.list,
    isLoading: state.content.isLoading
  };
};
export default connect(mapStateToProps)(Home)
