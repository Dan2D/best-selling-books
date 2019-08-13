import {DETAIL_BK_VIEW, DETAIL_LOAD} from "./types";
  import {API_CALLS, fetchXML, getBookId} from "../../Util/APICalls";

  const { GR_KEY } = API_CALLS["GR"];
  const CORS = "https://cors-anywhere.herokuapp.com/";

export const getBookDetail = (cover, isbn) => {
    return function(dispatch){
      let bkId;
      return getBookId(`${CORS}https://www.goodreads.com/book/isbn/${isbn}?key=${GR_KEY}`)
      .then(id => {
        bkId = id;
        return fetchXML(`${CORS}https://www.goodreads.com/book/show/${id}?key=${GR_KEY}`)
      })
      .then(data => {
        let author = data.querySelector("authors");
        author = author.querySelectorAll("author name");
        let authors = Array.from(author).map(author => author.textContent)
        let bookInfo = {
          title: data.querySelector("book title").textContent,
          dscrpt: data.querySelector("book description").textContent,
          author: authors,
          pubYr: data.querySelector("book original_publication_year").textContent,
          pubMt: data.querySelector("book original_publication_month").textContent,
          pubDy: data.querySelector("book original_publication_day").textContent,
          pgNum: data.querySelector("book num_pages").textContent,
          rating: data.querySelector("book average_rating").textContent,
          isbn13: data.querySelector("book isbn13").textContent,
        }
        dispatch({
          type: DETAIL_BK_VIEW,
          bookInfo,
          cover,
          id: bkId
        });
      });
    }
  }

  export const detailLoading = (bool) => {
    return {
      type: DETAIL_LOAD,
      payload: bool
    }
  }