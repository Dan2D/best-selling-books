import * as Reducer from "./Reducers/contentReducer";
import * as Actions from "./Actions/types";

describe('The Content Reducer', () => {
    it('should default the initial state', () => {
        expect(Reducer.contentReducer(undefined, {})).toEqual({text: "", isLoading: false});
    });

    it('should return home on GET_HOME_CONTENT', () => {
        const homeAction = {type: Actions.GET_HOME_CONTENT};
        expect(Reducer.contentReducer(undefined, homeAction).text).toEqual("home");
    });

    it('should return genre on GET_NEW_GENRE', () => {
        const genreAction = {type: Actions.GET_NEW_GENRE};
        expect(Reducer.contentReducer(undefined, genreAction).text).toEqual("genre");
    });

    it('should return detail on DETAIL_BK_VIEW', () => {
        const detailAction = {type: Actions.DETAIL_BK_VIEW};
        expect(Reducer.contentReducer(undefined, detailAction).text).toEqual("detail");
    });

    it('should return search on SEARCH_AUTH', () => {
        const searchAction = {type: Actions.SEARCH_AUTH};
        expect(Reducer.contentReducer(undefined, searchAction).text).toEqual("search");
    });

    it('should return search on SEARCH_TITLE', () => {
        const searchAction = {type: Actions.SEARCH_TITLE};
        expect(Reducer.contentReducer(undefined, searchAction).text).toEqual("search");
    });

     it('should return boolean on IS_LOADING', () => {
            const trueLoadAction = {type: Actions.IS_LOADING, payload: true};
            expect(Reducer.contentReducer(undefined, trueLoadAction).isLoading).toEqual(true);
    });

});