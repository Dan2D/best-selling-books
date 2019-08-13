import {
    UPDATE_CONTENT_DATE,
    GET_HOME_CONTENT,
    GET_NEW_GENRE,
    SEARCH_TITLE,
    SEARCH_AUTH,
    DETAIL_BK_VIEW,
    NO_DATA,
    IS_LOADING
  } from "../Actions/types";
  
  let initialState = {
       genres: {
           dateCurr: "",
           dateMin: "",
           dateMax: "",
           list: {},
           text: ""
       }
  };
  
  const genresReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_HOME_CONTENT:
      return {
        ...state,
        text: "",
        list: action.payload,
        genreLoading: false,
      };
      case GET_NEW_GENRE:
          return {
            ...state,
            list: action.payload,
            text: action.genreTxt,
            genreLoading: false,
          };
      case IS_LOADING:
        return {
          ...state,
          genreLoading: action.payload
        }
      default:
        return state;
    }
  };
  
  export default genresReducer;
  