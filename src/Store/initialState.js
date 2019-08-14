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
           dateCurr: new Date(),
           dateMin: new Date("2008-06-08"),
           dateMax: new Date(),
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
  