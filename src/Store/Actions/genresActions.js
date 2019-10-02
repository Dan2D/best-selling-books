import * as type from "./types";
  import {API_CALLS, fetchJSON} from "../../Util/APICalls";
  import store from "../index.js"
  
  const { NYT_API_KEY } = API_CALLS["NYT"];
  const CORS = "https://cors-anywhere.herokuapp.com/";

  export const getHomeContent = dispatch => {
    dispatch({type: type.GET_HOME_CONTENT})
    return fetchJSON(
      `${CORS}https://api.nytimes.com/svc/books/v3/lists/overview.json?current/&api-key=${NYT_API_KEY}`
    ).then(genres => {
      dispatch({
        type: type.GET_HOME_CONTENT_SUCCESS,
        payload: genres.results.lists
      });
    })
    .catch(err => dispatch({type: type.GET_HOME_CONTENT_FAILURE, payload: err.message}))
  };

  export const updateHomeDate = date => dispatch => {
    dispatch({type: type.UPDATE_CONTENT_DATE})
      fetchJSON(
        `${CORS}https://api.nytimes.com/svc/books/v3/lists/overview.json?published_date=${date}&api-key=${NYT_API_KEY}`
      ).then(genres => {
        return dispatch({
          type: type.UPDATE_CONTENT_DATE_SUCCESS,
          payload: genres.results.lists
        });
      })
      .catch(err => dispatch({type: type.UPDATE_CONTENT_DATE_FAILURE, payload: err.message}))
  };

  export const genreView = (genreTxt) => dispatch => {
    dispatch({type: type.GET_NEW_GENRE})
      fetchJSON(
        `${CORS}https://api.nytimes.com/svc/books/v3/lists/${genreTxt}.json?api-key=${NYT_API_KEY}`
      ).then(genres => {
        let index;
        let genreMenu = store.getState().menu.genreMenu;
        for (let i = 0; i < genreMenu.length; i++){
          if (genreMenu[i].list_name_encoded === genreTxt){
            index = i;
            break;
          }
        }
        let currDate = store.getState().genres.dateCurr
        if (currDate.getTime() !== new Date(genres.results.published_date).getTime()){
          dispatch({type: type.SET_GENRE_DATES, dateMax: genres.results.published_date, dateMin: genreMenu[index].oldest_published_date});
        }
        dispatch({
          type: type.GET_NEW_GENRE_SUCCESS,
          payload: genres.results,
          genreTxt,
        });
      })
      .catch(err => dispatch({type: type.GET_NEW_GENRE_FAILURE, payload: err.message}))
    
  };

  export const getGenreDates = (dateMin, dateMax) => {
    return {
      type: type.SET_GENRE_DATES,
      dateMin,
      dateMax
    }
  }
  
  export const updateGenreDate = (date, genreTxt) => dispatch => {
    dispatch({type: type.UPDATE_CONTENT_DATE});
      fetchJSON(
        `${CORS}https://api.nytimes.com/svc/books/v3/lists/${date}/${genreTxt}.json?api-key=${NYT_API_KEY}`
      ).then(genres => {
        dispatch({
          type: type.UPDATE_CONTENT_DATE_SUCCESS,
          payload: genres.results
        });
      })
      .catch(err => dispatch({type: type.UPDATE_CONTENT_DATE_FAILURE, payload: err.message}));
  };

  export const changeWeek = (date) => {
    return {type: type.CHANGE_WEEK,
            payload: date
    }
};

  export const genreLoading = (bool) => {
    return {
      type: type.GENRE_LOAD,
      payload: bool
    }
  }
  
  

