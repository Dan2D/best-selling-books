import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "../Header/Header";
import Home from "../Home/Home";
import Genres from "../Genres/Genres";
import DetailBook from "../DetailBook/DetailBook";
import SearchResults from "../Search/SearchResults";
import Footer from "../Footer/Footer";
import './App.css';

function App() {
  return (
    <Router basename="/best-selling-books/">
      <div className="App">
        <Route path="/" component={Header}/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/genre/:genre"  component={Genres} />
          <Route path="/book/:id"  component={DetailBook} />
          <Route path="/search/:type=:text&pg=:pg" component={SearchResults} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
