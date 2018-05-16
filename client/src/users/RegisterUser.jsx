import React from 'react';
import axios from 'axios'; //because Newton said so

class RegisterUser extends React.Component {
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
      .post("/users/new", {
        username: usernameInput,
        password: passwordInput
      })
      .then((res) => {
        this.setState({
          usernameInput: "",
          passwordInput: "",
          message: "Register Success"
        })
      })
      .catch((err) => {
        this.setState({
          usernameInput: "",
          passwordInput: "",
          message: "Something went wrong."
        })
      })
  }

  render() {
    const { usernameInput, passwordInput, message } = this.state

    return (
      <div>
        <h1>Register</h1>

        Username:
        <input type="text" value={usernameInput} onChange={this.handleUsernameChange}/>

        Password:
        <input type="text" value={passwordInput} onChange={this.handlePasswordChange}/>

        <button onClick={this.submitForm}>Register</button>

        {message}
      </div>
    )
  }
}

export default RegisterUser;
