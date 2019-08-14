import {
    UPDATE_CONTENT_DATE,
    GET_HOME_CONTENT,
    GET_NEW_GENRE,
    CHANGE_WEEK,
    GENRE_LOAD
  } from "./types";
  import {API_CALLS, fetchJSON} from "../../Util/APICalls";
  
  
  const { NYT_API_KEY } = API_CALLS["NYT"];
  const CORS = "https://cors-anywhere.herokuapp.com/";

  export const getHomeContent = dispatch => {
    return fetchJSON(
      `${CORS}https://api.nytimes.com/svc/books/v3/lists/overview.json?current/&api-key=${NYT_API_KEY}`
    ).then(genres => {
      dispatch({
        type: GET_HOME_CONTENT,
        payload: genres.results.lists
      });
    });
  };

  export const updateHomeDate = date => {
    return function(dispatch) {
      fetchJSON(
        `${CORS}https://api.nytimes.com/svc/books/v3/lists/overview.json?published_date=${date}&api-key=${NYT_API_KEY}`
      ).then(genres => {
        dispatch({
          type: UPDATE_CONTENT_DATE,
          payload: genres.results.lists
        });
      });
    };
  };

  export const genreView = (genreTxt, dateMin, dateMax = new Date()) => {
    return function(dispatch) {
      fetchJSON(
        `${CORS}https://api.nytimes.com/svc/books/v3/lists/${genreTxt}.json?api-key=${NYT_API_KEY}`
      ).then(genres => {
        dispatch({
          type: GET_NEW_GENRE,
          payload: genres.results,
          genreTxt,
          dateMin,
          dateMax
        });
      });
    };
  };
  
  export const updateGenreDate = (date, genreTxt) => {
    return function(dispatch) {
      fetchJSON(
        `${CORS}https://api.nytimes.com/svc/books/v3/lists/${date}/${genreTxt}.json?api-key=${NYT_API_KEY}`
      ).then(genres => {
        dispatch({
          type: UPDATE_CONTENT_DATE,
          payload: genres.results
        });
      });
    };
  };

  export const changeWeek = (date) => {
    return {type: CHANGE_WEEK,
            payload: date
    }
};

  export const genreLoading = (bool) => {
    return {
      type: GENRE_LOAD,
      payload: bool
    }
  }
  
  

