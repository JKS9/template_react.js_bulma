import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/componentsFooter';
import Header from './components/Header/componentsHeader';
import PageNotFound from './components/PageNotFound/componentsPageNotFound';

import ScrollButton from './components/Button/componentsScrollButtonToTop';

import Home from './views/Home/viewsHome';

import 'bulma/css/bulma.css';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <ScrollButton />
          <Footer></Footer>
        </Router>
      </div>
    );
  }
}
