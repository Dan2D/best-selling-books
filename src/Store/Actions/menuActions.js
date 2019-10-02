import {GET_GENRES_SUCCESS} from "./types";
import {API_CALLS, fetchJSON} from "../../Util/APICalls";

const { NYT_API_KEY } = API_CALLS["NYT"];
const CORS = "https://cors-anywhere.herokuapp.com/";

export const getGenres = dispatch => {
  fetchJSON(
    `${CORS}https://api.nytimes.com/svc/books/v3/lists/names.json?&api-key=${NYT_API_KEY}`
  )
    .then(genres =>
      dispatch({
        type: GET_GENRES_SUCCESS,
        payload: genres.results
      })
    )
};
