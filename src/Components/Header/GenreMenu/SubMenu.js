import React from "react";
import SubMenuLnks from "./SubMenuLnks";

function SubMenu(props) {

  function handleGenreBlur() {
    return document.querySelectorAll(".genre-menu__btn").forEach(btn => btn.classList.remove("open"));
  }

  function genGenreLst(genreArr) {
    return genreArr.map(genre => {
      let modifier = "";
      if (genre.title === "Misc." || genre.title === "Children's Books") {
        modifier = " sub-genre--right";
      }
      return (
        <div key={genre.title} className={"genre-menu__sub-genre" + modifier}>
          <button className="genre-menu__btn" data-ref={genre.title} onBlur={handleGenreBlur}>
            <h5>{genre.title}</h5>
          </button>
          <SubMenuLnks key={genre.title + " sub-genre-title"} title={genre.title} subGenres={genre.array}/>
        </div>
      );
    });
  }

  return <div className="genre-menu">{genGenreLst(props.genreLst)}</div>;
}

export default SubMenu;
