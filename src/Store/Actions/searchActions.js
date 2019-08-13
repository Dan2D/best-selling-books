import {GET_SEARCH_TXT, SEARCH_TYPE, IS_LOADING, NO_DATA, SEARCH_AUTH, SEARCH_TITLE} from "../Actions/types";
import {API_CALLS, fetchXML, getAuthId, getBookId} from "../../Util/APICalls";
  
const { GR_KEY } = API_CALLS["GR"];
const CORS = "https://cors-anywhere.herokuapp.com/";

export function updateSearchTxt(text){
    return {
        type: GET_SEARCH_TXT,
        payload: text
    }
}

export function updateSearchType(type){
    return {
        type: SEARCH_TYPE,
        payload: type
    }
};

export const getSearchTitle = (searchTxt, pg = 1) => {
  console.log(pg)
  return function(dispatch) {
    dispatch({type: IS_LOADING, payload: true});
    fetchXML(
      `${CORS}https://www.goodreads.com/search/index.xml?key=${GR_KEY}&search=title&q=${searchTxt}&page=${pg}`
    ).then(data => {
      let work = Array.from(data.querySelectorAll("work"));
      let resultStart = parseInt(
        data.querySelector("search results-start").textContent
      );
      let totalResults = parseInt(
        data.querySelector("search total-results").textContent
      );
      let bookArr = work.map((book, indx) => {
        return {
          indx: resultStart + indx,
          id: book.querySelector("best_book id").textContent,
          title: book.querySelector("best_book title").textContent,
          author: book.querySelector("best_book author name").textContent,
          coverImg: book.querySelector("best_book image_url").textContent,
          pubYr: book.querySelector("original_publication_year").textContent
        };
      });
      dispatch({
        type: SEARCH_TITLE,
        searchTxt,
        bookArr,
        totalResults,
        pg
      });
      dispatch({type: IS_LOADING, payload: false});
    });
  };
};

export const getSearchAuth = searchTxt => {
    return function(dispatch) {
      dispatch({type: IS_LOADING, payload: true});
      getAuthId(
        `${CORS}https://www.goodreads.com/api/author_url/${searchTxt}?key=${GR_KEY}`
      )
        .then(id => {
  
          if(id === 0){
            dispatch({
              type: NO_DATA,
            })
            return
          }
          return fetchXML(
            `${CORS}https://www.goodreads.com/author/show/${id}?format=xml&key=${GR_KEY}`
          );
        })
        .then(data => {
          let work = Array.from(data.querySelectorAll("author books book"));
          let authorInfo = {
            name: data.querySelector("author name").textContent,
            home: data.querySelector("author hometown").textContent,
            avatar: data.querySelector("author image_url").textContent,
            dscrpt: data.querySelector("author about").textContent,
            link: data.querySelector("author link").textContent
          };
          let bookArr = work.map((book, indx) => {
            return {
              id: book.querySelector("id").textContent,
              title: book.querySelector("title_without_series").textContent,
              coverImg: book.querySelector("image_url").textContent,
              pubYr: book.querySelector("publication_year").textContent
            };
          });
          dispatch({
            type: SEARCH_AUTH,
            bookArr,
            authorInfo,
            searchTxt
          });
          dispatch({type: IS_LOADING, payload: false});
        });
    };
  };



