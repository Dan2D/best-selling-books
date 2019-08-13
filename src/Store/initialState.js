export const initialState = {
    content: {
        text: "",
    },
       detail: {
        book: {},
           cover: "",
           detailLoading: true
           
       },
       genres: {
           dateCurr: "",
           dateMin: "",
           dateMax: "",
           genreLoading: true,
           list: {},
           text: ""
       },
       menu: {
           genreMenu: {},
           menuLoading: true
       },
       search: {
           author: {},
            books: [],
            pg: 0,
            prevSearch: "",
            prevType: "",
            results: 0,
            searchLoading: true,
            text: "",
            type: "title"
       }
  };
  