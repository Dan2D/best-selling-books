(window["webpackJsonpbest-selling-books"]=window["webpackJsonpbest-selling-books"]||[]).push([[4],{139:function(t,e,o){"use strict";function n(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t){return(a="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}o.r(e);var c=o(79);function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var s=o(0),l=o.n(s),f=o(83),b=o(9),p=b.a.GR.GR_KEY,y=function(t){function e(t){var o,n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,(o=!(r=i(e).call(this,t))||"object"!==a(r)&&"function"!==typeof r?Object(c.a)(n):r).state={rating:0,id:""},o}var o,r,y;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,s["Component"]),o=e,(r=[{key:"componentDidMount",value:function(){var t=this;Object(b.c)("".concat("https://cors-anywhere.herokuapp.com/","https://www.goodreads.com/search/index.xml?key=").concat(p,"&q=").concat(this.props.isbn)).then(function(e){if("0"!==e.querySelector("search total-results").textContent){var o=e.querySelector("results work best_book id").textContent,n=e.querySelector("results work average_rating").textContent;t.setState({rating:n,id:o})}})}},{key:"render",value:function(){return l.a.createElement("div",{className:"book-container__sub-info"},l.a.createElement("a",{className:"book-buy-link",href:this.props.buyLnk.url,rel:"noopener noreferrer",target:"_blank"},"Buy this Book"),l.a.createElement("div",{className:"sub-info__rating"},l.a.createElement(f.a,{rating:this.state.rating})),l.a.createElement("a",{href:"https://www.goodreads.com/book/show/".concat(this.state.id),rel:"noopener noreferrer",target:"_blank"},"Read Reviews"))}}])&&n(o.prototype,r),y&&n(o,y),e}();e.default=y}}]);
//# sourceMappingURL=4.bc644273.chunk.js.map