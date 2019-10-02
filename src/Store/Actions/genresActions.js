import * as type from "./types";
  import {API_CALLS, fetchJSON} from "../../Util/APICalls";
  
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

  export const genreView = (genreTxt, dateMin, dateMax = new Date()) => dispatch => {
    dispatch({type: type.GET_NEW_GENRE})
      fetchJSON(
        `${CORS}https://api.nytimes.com/svc/books/v3/lists/${genreTxt}.json?api-key=${NYT_API_KEY}`
      ).then(genres => {
        dispatch({
          type: type.GET_NEW_GENRE_SUCCESS,
          payload: genres.results,
          genreTxt,
          dateMin,
          dateMax
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
  
  

