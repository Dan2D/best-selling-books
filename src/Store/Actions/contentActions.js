import {
    UPDATE_CONTENT_DATE,
    GET_HOME_CONTENT,
    GET_NEW_GENRE,
    SEARCH_TITLE,
    SEARCH_AUTH,
    DETAIL_BK_VIEW,
    NO_DATA,
    IS_LOADING
  } from "./types";

  export const isLoading = (bool) => {
    return {
      type: IS_LOADING,
      payload: bool
    }
  }