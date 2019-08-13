import {DETAIL_BK_VIEW, DETAIL_LOAD} from "../Actions/types";

const menuReducers = (state = [], action) => {
    switch(action.type){      
        case DETAIL_BK_VIEW:
            return {
                book: action.bookInfo,
                cover: action.cover,
                id: action.id,
                detailLoading: false
            } 
            case DETAIL_LOAD:
                return {
                    ...state,
                    detailLoading: action.payload
                }        
        default:
            return state;
    }
}

export default menuReducers;