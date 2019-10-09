 export function genGenreArr(filterTxt, flags, searchType, menu) {
    let regxStr = new RegExp(filterTxt, flags);
    if (searchType) {
      return menu.filter(genre =>
        regxStr.test(genre["display_name"])
      );
    } else {
      return menu.filter(
        genre => !regxStr.test(genre["display_name"])
      );
    }
  }

  export function genGenreSubObj(title, array) {
    let obj = {};
    obj["title"] = title;
    obj["array"] = array;
    return obj;
  }

  export function genGenreMainObj(title, array, genreObj) {
    genreObj.navSubGenres.push(genGenreSubObj(title, array));
  }