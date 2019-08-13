import {combineReducers} from "redux";
import detailReducer from "./detailReducer";
import genresReducer from "./genresReducer";
import menuReducer from "./menuReducer";
import searchReducer from "./searchReducer";


const rootReducer = combineReducers({detail: detailReducer, genres: genresReducer, menu: menuReducer, search: searchReducer})

export default rootReducer;

// menu: menuReducers, search: searchReducers, date: dateReducers, page: pageReducers