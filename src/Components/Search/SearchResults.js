import React, {useEffect} from "react";
import Loader from "../Parts/Loader";
import {getSearchTitle, getSearchAuth} from "../../Store/Actions/searchActions";
import {connect} from "react-redux";
import SearchHeader from "./SearchHeader";
import SearchBook from "./SearchBook";
import SearchPagination from "./SearchPagination";
import NotFound from "./404";
import "./Search.css";

const mapDispatchToProps = dispatch => {
    return {
        getSearchTitle: (text, pg) => {
            dispatch(getSearchTitle(text, pg));
        },
        getSearchAuth: (text) => {
            dispatch(getSearchAuth(text));
        }
    }
}
function SrchRslt(props) {
    const {getSearchTitle, getSearchAuth} = props;
    document.documentElement.scrollTo(0,0);
    useEffect(() => {
        if (props.match.params.type === "title"){
            getSearchTitle(props.match.params.text, props.match.params.pg);
        }
        else {
            getSearchAuth(props.match.params.text);
        }
    }, [getSearchTitle, getSearchAuth, props.match.params])

    if (props.searchLoading || props.menuLoading){
      return <Loader isLoading={props.searchLoading}/>
    }

    if (props.results === 0) {
      return <NotFound />;
    }

    let bksPrPg = props.match.params.type === "title" ? 20 : null;
    let pgTotal = props.results > 2000 ? 100 : Math.ceil(props.results / bksPrPg);

    let bookCode = props.bookArr.map((book, indx) => {
      return (
        <SearchBook
          key={book.title + indx}
          searchType={props.match.params.type}
          author={book.author}
          indx={book.indx}
          id={book.id}
          title={book.title}
          cover={book.coverImg}
          pubDt={book.pubYr}
        />
      );
    });

    return (
      <div className="srch-container">
        {props.search.type === "author" ? (
          <SearchHeader
            author={props.author.name}
            authorDscrpt={props.author.dscrpt}
            homeTown={props.author.home}
            authLnk={props.author.link}
            authImg={props.author.avatar}
          />
        ) : (
          <h2>TITLE SEARCH RESULTS</h2>
        )}
        <div className="srch-bk-list">{bookCode}</div>
        {props.match.params.type === "author" ? null : (
          <SearchPagination
            onPgClick={(srchTxt, srchTyp, pg) =>
              props.onPgClick(srchTxt, srchTyp, pg)
            }
            searchTxt={props.match.params.text}
            searchType={props.match.params.type}
            pg={parseInt(props.match.params.pg)}
            pgTotal={pgTotal}
          />
        )}
      </div>
    );
  }

const MemoSrchRslt = React.memo(SrchRslt, (prevProps, nextProps) => {
  if (
      prevProps.bookArr === nextProps.bookArr 
      && prevProps.searchLoading === nextProps.searchLoading
      && prevProps.match.params === nextProps.match.params){
    return true
  }
  return false
})


const mapStateToProps = (state) => {
  return {
    search: state.search,
    bookArr: state.search.books,
    pg: state.search.pg,
    results: state.search.results,
    author: state.search.author,
    menuLoading: state.menu.menuLoading,
    searchLoading: state.search.searchLoading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemoSrchRslt);


