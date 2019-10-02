export const API_CALLS = {
    NYT: {
      NYT_API_KEY: process.env.REACT_APP_NYT_API_KEY,
      NYT_API: "https://api.nytimes.com/svc/books/v3/",
      OVRVW_QRY: "lists/overview.json?",
      ATHR_QRY: "reviews.json?author=",
      TTL_QRY: "reviews.json?title=",
      GNRE_QRY: "lists/",
      GNRE_LST_QRY: "lists/names.json?"
    },
    GR: {
      GR_KEY: process.env.REACT_APP_GR_API_KEY,
      GR_API: "https://www.goodreads.com/",
      GR_RVW_QRY: "book/review_counts.json?isbns=",
      GR_ISBN_QRY: "book/isbn/",
      GR_GNRL_QRY: "search/index.xml?key=",
      GR_BK_QRY: "book/show/",
      GR_QRY: "author/show/"
    }
  };
  
  export const fetchJSON = (input) => {
    return fetch(input).then(response => {
      try{
        if (response.ok) {
          return response.json();
        } 
        throw new Error()
      }
      catch(err){
        console.log(err.message)
      }
    });
  }
  
  export const fetchXML = (input) => {
    return fetch(input)
      .then(response => {
        try{
          if (response.ok) {
            return response.text();
          }
          throw new Error();
        }
        catch(err){
          console.log(err.message);
        }
      })
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"));
  }
  
  export const getAuthId = (input) => {
    return fetchXML(input)
    .then(data => {
      if (data.querySelector('author') === null){
        return 0
      }
      return data.querySelector("author").getAttribute("id");
    });
  }
  
  export const getBookId = (input) => {
    return fetchXML(input)
    .then(data => {
      return data.querySelector("book id").textContent;
    });
  }