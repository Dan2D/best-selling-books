import {GET_HOME_CONTENT, GET_NEW_GENRE, IS_LOADING} from "../Actions/types";
  
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
      case GET_NEW_GENRE:
          return {
            ...state,
            content: 'genre',
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
  