import React from 'react';
import axios from 'axios';

class LoginUser extends React.Component {
  constructor() {
    super();
    this.state = {
      usernameInput: "",
      passwordInput: "",
      message: ""
    }
  }

  handleUsernameChange = (e) => {
    this.setState({
      usernameInput: e.target.value
    });
  }

  handlePasswordChange = (e) => {
    this.setState({
      passwordInput: e.target.value
    })
  }

  submitForm = () => {
    const { usernameInput, passwordInput } = this.state;

    axios
      .post("/users/login", {
        username: usernameInput,
        password: passwordInput
      })
      .then((res) => {
        this.props.setUser(res.data)
        this.props.toggleLogin()
        this.setState({
          usernameInput: "",
          passwordInput: "",
          message: "Login Success"
        })
      })
      .catch((err) => {
        this.setState({
          usernameInput: "",
          passwordInput: "",
          message: "Username / Password Incorrect."
        })
      })
  }

  logout = () => {
    axios.post('/users/logout')
         .then((res) => {
           this.props.removeUser();
           this.props.toggleLogin();
           this.setState({
             usernameInput: "",
             passwordInput: "",
             message: res.data
           })
         })
         .catch((res) => {
           this.setState({
             message: "Please log in first."
           })
         })
  }

  render() {
    const { usernameInput, passwordInput, message } = this.state

    if (!this.props.user) {
      return (
        <div>
          <a style={{color: "red"}} onClick={this.logout}> Log Out </a>

          <br></br>

          <h1>Log In</h1>

          Username:
          <input type="text" value={usernameInput} onChange={this.handleUsernameChange}/>

          Password:
          <input type="text" value={passwordInput} onChange={this.handlePasswordChange}/>

          <button onClick={this.submitForm}>Login</button>

          {message}
        </div>
      )
    } else {
      return (
        <div>
          <br></br>

          <a style={{color: "red"}} onClick={this.logout}> Log Out </a>

          <br></br>

          Welcome, {this.props.user}!

          <br></br>

          {this.props.message}
        </div>
      )
    }
  }
}

export default LoginUser
