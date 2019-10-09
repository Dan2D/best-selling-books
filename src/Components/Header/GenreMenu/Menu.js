import React from "react";
import SubMenu from "./SubMenu";
import {connect} from "react-redux";
import {genGenreArr, genGenreMainObj} from "../../../Util/menuHelpers";

function Menu(props) {
  let genreObj = { navSubGenres: [] };

  let genreFicAndNonArr = genGenreArr(".fiction", "i", true, props.menu);
  let genreYngAdult = genGenreArr("adult", "i", true, props.menu);
  let genreKids = genGenreArr("children", "i", true, props.menu);
  let genreMisc = genGenreArr(".fiction|children|adult", "i", false, props.menu);
  genGenreMainObj("Fiction/Non-Fiction", genreFicAndNonArr, genreObj);
  genGenreMainObj("Young Adult", genreYngAdult, genreObj);
  genGenreMainObj("Children's Books", genreKids, genreObj);
  genGenreMainObj("Misc.", genreMisc, genreObj);


  return (
    <div className="genres">
      <SubMenu
        onGenreClick={(genre, minDate, maxDate) =>
          props.onGenreClick(genre, minDate, maxDate)
        }
        genreLst={genreObj.navSubGenres}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    menu: state.menu.genreMenu
  }
}

export default connect(mapStateToProps)(Menu)
