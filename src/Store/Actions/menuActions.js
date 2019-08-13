import { GET_GENRES, IS_LOADING } from "./types";
import {API_CALLS} from "../../Util/APICalls";

const { NYT_API_KEY } = API_CALLS["NYT"];
const CORS = "https://cors-anywhere.herokuapp.com/";

export const getGenres = dispatch => {
  fetch(
    `${CORS}https://api.nytimes.com/svc/books/v3/lists/names.json?&api-key=${NYT_API_KEY}`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Bad Response...");
      }
    })
    .then(genres =>
      dispatch({
        type: GET_GENRES,
        payload: genres.results
      })
    )
    .then(() => dispatch({type: IS_LOADING, payload: false}));
};
