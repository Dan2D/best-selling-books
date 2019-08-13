import {GET_GENRES} from "../Actions/types";

const menuReducers = (state = [], action) => {
    switch(action.type){
        case GET_GENRES:
            return {
                genreMenu: action.payload,
                menuLoading: false
            }                  
        default:
            return state;
    }
}

export default menuReducers;