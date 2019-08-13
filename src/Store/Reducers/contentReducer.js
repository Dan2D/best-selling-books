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
      content: {
        text: "",
        isLoading: false,
      }
  };
  
  const contentReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_HOME_CONTENT:
      return {
        ...state,
        content: 'home',
      };
      case IS_LOADING:
        return {
          ...state,
          isLoading: action.payload
        }
      default:
        return state;
    }
  };
  
  export default contentReducer;
  