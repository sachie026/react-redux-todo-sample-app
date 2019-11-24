import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import List from "./components/list"
import Add from "./components/add"
import Header from "./components/header"

function App() {
  return (
    <Router >
      <Header>
      <nav>
          <ul className="todo-list">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
            <li>
              <Link to="/add">Add</Link>
            </li>
          </ul>
        </nav>
        <p></p>

      </Header>
      
        <Switch>
          <Route path  = "/list">
              <List />
          </Route>

          <Route path  = "/home">
              Home
          </Route>

          <Route path  = "/add">
              <Add />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
