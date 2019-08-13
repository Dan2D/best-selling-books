import {GET_SEARCH_TXT, SEARCH_TYPE, IS_LOADING, NO_DATA, SEARCH_AUTH} from "../Actions/types";
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



