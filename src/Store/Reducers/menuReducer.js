import {GET_GENRES} from "../Actions/types";

const menuReducers = (state = [], action) => {
    switch(action.type){
        case GET_GENRES:
            return action.payload                   
        default:
            return state;
    }
}

export default menuReducers;