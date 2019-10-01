import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from "./Actions/genresActions";
import * as types from "./Actions/types";
import {API_CALLS} from "../Util/APICalls";


  
const { NYT_API_KEY } = API_CALLS["NYT"];
const CORS = "https://cors-anywhere.herokuapp.com/";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('async actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    
    let store = mockStore({genres: {}});
    
    describe('The getHomeContent action', () => {
        let mockResponse = {results: {lists: [{list1: {}, list2: {}, list3: {}}]}};
        it('should call fetch with correct url', async () => {  
            
            global.fetch = jest.fn().mockImplementation(() => {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockResponse)
                });
            });
            return store.dispatch(actions.getHomeContent)
            .then(() => expect(global.fetch).toHaveBeenCalledWith(`${CORS}https://api.nytimes.com/svc/books/v3/lists/overview.json?current/&api-key=${NYT_API_KEY}`))
        });
    
        it('should return genre lists on successful fetch', async () => { 
            const expectedActions = [{type: types.GET_HOME_CONTENT, payload: mockResponse.results.lists}];
            global.fetch = jest.fn().mockImplementation(() => {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockResponse)
                });
            });
            // Have to return promise for test to actually be considered, otherwise assertion can fail and test can pass   
            return store.dispatch(actions.getHomeContent).then(() => {return expect(store.getActions()).toEqual(expectedActions)});
        });
    
        it('should return on error message on a bad response', async () => {
            global.fetch = jest.fn().mockImplementation(() => {
                return Promise.resolve({
                    ok: false,
                });
            });
            try{
               await actions.getHomeContent();
            }
            catch(object){
                expect(object.message).toBe("Bad Response...")
            }
        });
    });

    describe('The updateHomeDate action', () => {
        let mockResponse = {results: {lists: [{list1: {}, list2: {}, list3: {}}]}};
        it('should call the API with correct url', () => {
            
            global.fetch = jest.fn().mockImplementation(() => {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockResponse)
                });
            });
            let date = '2019-09-24';
            store.dispatch(actions.updateHomeDate(date));
            expect(global.fetch).toHaveBeenCalledWith(`${CORS}https://api.nytimes.com/svc/books/v3/lists/overview.json?published_date=${date}&api-key=${NYT_API_KEY}`)
        });

        // it('should give return new date genre lists on successful fetch', () => {
        //     global.fetch = jest.fn().mockImplementation(() => {
        //         return Promise.resolve({
        //             ok: true,
        //             json: () => Promise.resolve(mockResponse)
        //         });
        //     });
        //     let date = '2019-09-24';
        //     store.dispatch(actions.updateHomeDate(date))
        //     .then(() => {return expect(store.getActions()).toEqual("test")});
        // });

        it('should return on error message on a bad response', async () => {
            global.fetch = jest.fn().mockImplementation(() => {
                return Promise.resolve({
                    ok: false,
                });
            });
            let date = ('2019-09-23')
            try{
               await console.log(actions.updateHomeDate())
            }
            catch(object){
                expect(object.message).toBe("Bad Respnse...")
            }
        });
    });
});






























// const expectedActions = {
    //     type: types.GET_HOME_CONTENT,
    //     payload: "test"
    // }
    // let store = mockStore({genres: {}});
    // store.dispatch(actions.getHomeContent()).then(() => {
    //     return expect(store.getActions()).toEqual(expectedActions);
    // })