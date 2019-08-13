import {
    UPDATE_CONTENT_DATE,
    GET_HOME_CONTENT,
    GET_NEW_GENRE,
    GET_GENRES,
    CHANGE_WEEK,
    SEARCH_TITLE,
    SEARCH_AUTH,
    DETAIL_BK_VIEW,
    NO_DATA,
    IS_LOADING
  } from "./types";
  import {API_CALLS, fetchJSON, fetchXML} from "../../Util/APICalls";
  
  
  const { NYT_API_KEY } = API_CALLS["NYT"];
  const { GR_KEY } = API_CALLS["GR"];
  const CORS = "https://cors-anywhere.herokuapp.com/";

  export const getHomeContent = dispatch => {
    console.log(dispatch)
    return fetchJSON(
      `${CORS}https://api.nytimes.com/svc/books/v3/lists/overview.json?current/&api-key=${NYT_API_KEY}`
    ).then(genres => {
      dispatch({
        type: GET_HOME_CONTENT,
        payload: genres.results.lists
      });
    });
  };

  export const getHomeAndGenreMenu = dispatch => {
    return fetchJSON(
      `${CORS}https://api.nytimes.com/svc/books/v3/lists/names.json?&api-key=${NYT_API_KEY}`)
      .then(genres =>
        dispatch({
          type: GET_GENRES,
          payload: genres.results
        })
      )
    .then(() => 
      fetchJSON(
        `${CORS}https://api.nytimes.com/svc/books/v3/lists/overview.json?current/&api-key=${NYT_API_KEY}`)
        .then(genres => {
        dispatch({
          type: GET_HOME_CONTENT,
          payload: genres.results.lists
        });
      })
    )
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

  export const genreView = (genreTxt) => {
    console.log(genreTxt, "GENRE")
    return function(dispatch) {
      dispatch({type: IS_LOADING, payload: true});
      fetchJSON(
        `${CORS}https://api.nytimes.com/svc/books/v3/lists/${genreTxt}.json?api-key=${NYT_API_KEY}`
      ).then(genres => {
        dispatch({
          type: GET_NEW_GENRE,
          payload: genres.results,
          genreTxt,
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

  export const isLoading = (bool) => {
    return {
      type: IS_LOADING,
      payload: bool
    }
  }
  
  

