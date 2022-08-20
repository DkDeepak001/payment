import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes,Switch } from 'react-router-dom'
import Home from './home';
import Sucess from './sucess';
import Failed from './failed';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/sucess/:id" component={Sucess}></Route>
        <Route exact path="/failed" component={Failed}></Route>
      </Switch>
    </Router>
  );
}

export default App;
