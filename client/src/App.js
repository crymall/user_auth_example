import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Users from './users/Users';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/users/new">Register</Link> {" ~ "}
          <Link to="/users/login">Log In</Link>
        </nav>

        <Route path="/users" component={Users} />
      </div>
    );
  }
}

export default App;
