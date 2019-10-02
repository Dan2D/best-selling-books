import * as type from "../Actions/types";
  
  let initialState = {
       genres: {
           dateCurr: new Date(),
           dateMin: "",
           dateMax: new Date(),
           list: {},
           text: ""
       }
  };
  
  const genresReducer = (state = initialState, action) => {
    switch (action.type) {
      case type.GET_HOME_CONTENT :
      case type.UPDATE_CONTENT_DATE:
      case type.GET_NEW_GENRE:
        return {
          ...state,
          genreLoading: true,
          error: null
        }
      case type.GET_HOME_CONTENT_SUCCESS:
      return {
        ...state,
        dateCurr: new Date(),
        text: "",
        list: action.payload,
        genreLoading: false,
        error: null
      };
      case type.GET_HOME_CONTENT_FAILURE:
      case type.UPDATE_CONTENT_DATE_FAILURE:
        return {
          ...state,
          dateCurr: new Date(),
          dateMin: new Date("2008-06-08"),
          dateMax: new Date(),
          genreLoading: false,
          list: {},
          text: "",
          error: action.payload
        }
      case type.UPDATE_CONTENT_DATE_SUCCESS:
        return {
          ...state,
          list: action.payload,
          genreLoading: false
        }
      case type.GET_NEW_GENRE_SUCCESS:
          return {
            ...state,
            list: action.payload,
            text: action.genreTxt,
            genreLoading: false,
          };
      case type.SET_GENRE_DATES:
        return {
          ...state,
          dateMin: new Date(action.dateMin),
          dateMax: new Date(action.dateMax),
          dateCurr: new Date(action.dateMax),
        }
      case type.CHANGE_WEEK:
        return {
          ...state,
          dateCurr: action.payload
        }
      case type.GENRE_LOAD:
        return {
          ...state,
          genreLoading: action.payload
        }
      default:
        return state;
    }
  };
  
  export default genresReducer;
  