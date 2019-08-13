import React from "react";
import SubMenuLnks from "./SubMenuLnks";

function SubMenu(props) {
    console.log(props.genreLst)
  function handleGenreClick(e) {
    e.currentTarget.querySelector("h5").style.color = "white";
    e.currentTarget.style.background = "#AAA58E";
    let subGenre = document.querySelector(
      '[data-ref="' + e.target.innerText + '"]'
    );
    subGenre.style.visibility = "visible";
    subGenre.focus();
  }

  function genGenreLst(genreArr) {
    let subGenreArr = genreArr.map(genre => {
      let modifier = "";
      if (genre.title === "Misc." || genre.title === "Children's Books") {
        modifier = " sub-genre--right";
      }
      return (
        <div key={genre.title} className={"genre-menu__sub-genre" + modifier}>
          <button onClick={e => handleGenreClick(e)}>
            <h5>{genre.title}</h5>
          </button>
          <SubMenuLnks
            key={genre.title + " sub-genre-title"}
            title={genre.title}
            subGenres={genre.array}
          />
        </div>
      );
    });
    return subGenreArr;
  }

  return <div className="genre-menu">{genGenreLst(props.genreLst)}</div>;
}

export default SubMenu;
