import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import addUser from './pages/addUser';

function App() {
  return (
    <Router>
      <Switch>
        
        <Router path="/addUser">
          <addUser />
        </Router>
        
        <Route path="/home">
          <HomePage />
        </Route>
        
        <Route path="/">
          <LoginPage />
        </Route>
      
      </Switch>
    </Router>
  );
}

export default App;
