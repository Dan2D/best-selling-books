import {combineReducers} from "redux";
import contentReducer from "./contentReducer";
import detailReducer from "./detailReducer";
import genresReducer from "./genresReducer";
import menuReducer from "./menuReducer";
import searchReducer from "./searchReducer";


const rootReducer = combineReducers({content: contentReducer, detail: detailReducer, genres: genresReducer, menu: menuReducer, search: searchReducer})

export default rootReducer;
