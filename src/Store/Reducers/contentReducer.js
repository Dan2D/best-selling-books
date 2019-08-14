import {GET_HOME_CONTENT, GET_NEW_GENRE, DETAIL_BK_VIEW, SEARCH_AUTH, SEARCH_TITLE, IS_LOADING} from "../Actions/types";
  
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
        text: 'home',
      };
      case GET_NEW_GENRE:
          return {
            ...state,
            text: 'genre',
          };
          case DETAIL_BK_VIEW:
            return {
              ...state,
              text: 'detail'
            }
      case SEARCH_AUTH:
      case SEARCH_TITLE:
        return {
          ...state,
          text: 'search'
        }
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
  