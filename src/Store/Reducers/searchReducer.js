import {GET_NEW_GENRE, GET_HOME_CONTENT, GET_SEARCH_TXT, SEARCH_TYPE, SEARCH_AUTH, SEARCH_TITLE} from "../Actions/types";



const searchReducers = (state = "", action) => {
    switch(action.type){
        case SEARCH_TITLE:
                return {
                    ...state,
                    prevSearch: action.text,
                    text: action.text,
                    prevType: "title",
                    type: "title"
                }
        case SEARCH_AUTH:
            return {
                ...state,
                prevSearch: action.text,
                text: action.text,
                prevType: "author",
                type: "author"
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
        default:
            return state;
    }
}

export default searchReducers;