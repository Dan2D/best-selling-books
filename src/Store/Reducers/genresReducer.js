import {GET_HOME_CONTENT, GET_NEW_GENRE, SET_GENRE_DATES, GENRE_LOAD, CHANGE_WEEK, UPDATE_CONTENT_DATE} from "../Actions/types";
  
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
        dateCurr: new Date(),
        text: "",
        list: action.payload,
        genreLoading: false,
      };
      case UPDATE_CONTENT_DATE:
        return {
          ...state,
          list: action.payload
        }
      case GET_NEW_GENRE:
          return {
            ...state,
            list: action.payload,
            text: action.genreTxt,
            genreLoading: false,
          };
      case SET_GENRE_DATES:
        return {
          ...state,
          dateMin: new Date(action.dateMin),
          dateMax: new Date(action.dateMax),
          dateCurr: new Date(action.dateMax),
        }
      case CHANGE_WEEK:
        return {
          ...state,
          dateCurr: action.payload
        }
      case GENRE_LOAD:
        return {
          ...state,
          genreLoading: action.payload
        }
      default:
        return state;
    }
  };
  
  export default genresReducer;
  