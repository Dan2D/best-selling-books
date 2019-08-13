export const initialState = {
    content: {
        text: "",
        isLoading: true
    },
       detail: {
           cover: "",
           book: {}
       },
       genres: {
           dateCurr: "",
           dateMin: "",
           dateMax: "",
           list: {},
           text: ""
       },
       menu: {},
       search: {
            books: [],
            pg: 0,
            prevSearch: "",
            prevType: "",
            results: 0,
            text: "",
            type: ""
       }
  };
  