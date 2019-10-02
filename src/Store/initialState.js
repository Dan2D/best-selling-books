export const initialState = {
    content: {
        text: "",
    },
       detail: {
        book: {},
           cover: "",
           detailLoading: true,
           error: null
           
       },
       genres: {
           dateCurr: new Date(),
           dateMin: new Date("2008-06-08"),
           dateMax: new Date(),
           genreLoading: true,
           list: {},
           text: "",
           error: null
       },
       menu: {
           genreMenu: {},
           menuLoading: true,
           error: null
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
            type: "title",
            error: null
       }
  };
  