
export function isbnAssign(book) {
    let url = book.amazon_product_url;
    let isbn = url.match(/[^/dp/]*(?=\?)/g)[0];
    return isbn;
}

export function dateFormat(date){
    date = new Date(date);
    if (date >= new Date() - 7) {
        return "Current";
    }
    let dateStr = date.toISOString().substr(0, 10);
    dateStr = dateStr.split("-");
    dateStr.push(dateStr.shift());
    dateStr = dateStr.join("/");
    return dateStr;
}

export function monthDateStatus(genre){
    if (genre.includes("Audio") ||
        genre === "Business" ||
        genre === "Science" ||
        genre === "Sports and Fitness"
      ) {
       return "(List is updated monthly)";
      }
      return "";
}