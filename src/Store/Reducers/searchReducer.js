import {GET_NEW_GENRE,
      GET_HOME_CONTENT,
      GET_SEARCH_TXT, SEARCH_TYPE, 
      SEARCH_AUTH, 
      SEARCH_TITLE, 
      NO_DATA,
      SEARCH_LOAD} from "../Actions/types";



const searchReducers = (state = "", action) => {
    switch(action.type){
        case SEARCH_TITLE:
                return {
                    ...state,
                    prevSearch: action.searchTxt,
                    text: action.searchTxt,
                    books: action.bookArr,
                    pg: action.pg,
                    results: action.totalResults,
                    prevType: "title",
                    type: "title",
                    searchLoading: false
                }
        case SEARCH_AUTH:
            return {
                ...state,
                author: action.authorInfo,
                books: action.bookArr,
                prevSearch: action.searchTxt,
                text: action.searchTxt,
                prevType: "author",
                type: "author",
                results: 1,
                searchLoading: false
            }
            case GET_HOME_CONTENT:
                return {
                    ...state,
                    text: "",
                    type: 'title'
                }
        case GET_NEW_GENRE:
            return{
                ...state,
                text: "",
                type: 'title'
            }
        case GET_SEARCH_TXT:
            return {
                ...state,
                text: action.payload}
        case SEARCH_TYPE:
            return {
                ...state,
                type: action.payload
            }
        case NO_DATA:
            return {
                ...state,
                results: 0,
                searchLoading: false
            }
        case SEARCH_LOAD:
            return {
                ...state,
                searchLoading: action.payload
            }
        default:
            return state;
    }
}

export default searchReducers;