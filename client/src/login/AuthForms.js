import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import Auth from "../utils/Auth";

class AuthForm extends Component {
  state = {
    username: "",
    password: "",
    loggedIn: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  registerUser = e => {
    e.preventDefault();
    const { username, password } = this.state;

    axios
      .post("/users/new", { username, password })
      .then(() => {
        Auth.authenticateUser(username);
        axios.post("/users/login", { username, password });
      })
      .then(() => {
        this.props.toggleAuthenticateStatus();
      })
      .then(() => {
        this.setState({
          username: "",
          password: "",
          loggedIn: true
        });
      });
  };

  loginUser = e => {
    e.preventDefault();
    const { username, password } = this.state;

    axios
      .post("/users/login", { username, password })
      .then(() => {
        Auth.authenticateUser(username);
      })
      .then(() => {
        this.props.toggleAuthenticateStatus();
      })
      .then(() => {
        this.setState({
          username: "",
          password: "",
          loggedIn: true
        });
      });
  };

  render() {
    const { username, password, loggedIn } = this.state;
    const path = this.props.match.path;

    return (
      <React.Fragment>
        <h1> {path === "/auth/login" ? "Login" : "Register"} </h1>
        <form
          onSubmit={path === "/auth/login" ? this.loginUser : this.registerUser}
        >
          <input
            type="text"
            value={username}
            name="username"
            placeholder="username"
            onChange={this.handleChange}
          />
          <input
            type="text"
            value={password}
            name="password"
            placeholder="password"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{loggedIn ? "Success!" : ""}</p>
      </React.Fragment>
    );
  }
}

export default withRouter(AuthForm);
