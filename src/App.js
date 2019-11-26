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
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "./reducers/add"

const store = createStore(rootReducer)

store.subscribe(() => {
  console.log(store.getState());
});

function App() {
  return (
    <Provider store={store}>

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
    </Provider>

  );
}

export default App;
