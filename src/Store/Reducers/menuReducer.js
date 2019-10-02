import {GET_GENRES_SUCCESS} from "../Actions/types";

const menuReducers = (state = [], action) => {
    switch(action.type){
        case GET_GENRES_SUCCESS:
            return {
                genreMenu: action.payload,
                menuLoading: false
            }                  
        default:
            return state;
    }
}

export default menuReducers;