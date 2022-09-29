import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Route, Routes } from 'react-router-dom';
import { About1, AboutApp, AboutAuthor, Home } from './Menu'
import NotFound from "./Menu/NotFound"

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path = "/" element = {<Home></Home>}></Route>
        <Route path = "about" element = {<About1></About1>}>
          <Route path = "about-app" element = {<AboutApp></AboutApp>}></Route>
          <Route path = "about-author" element = {<AboutAuthor></AboutAuthor>}></Route>
        </Route>
        <Route path = "*" element = {<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
