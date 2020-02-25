import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import AddUser from './pages/AddUser';
import AgregarProducto from './pages/AgregarProducto';
import ListarProducto from './pages/ListarProducto';

function App() {
  return (
    <Router> 
      <Switch>
        
        <Route path='/listarProduct'>
          <ListarProducto/>
        </Route>

        <Route path='/addProduct'>
          <AgregarProducto/>
        </Route>

        <Route path="/addUser">
          <AddUser/>
        </Route>
        
        <Route path="/home">
          <HomePage/>
        </Route>
        
        <Route path="/">
          <LoginPage/>
        </Route>
      
      </Switch>
    </Router>
  );
}

export default App;
