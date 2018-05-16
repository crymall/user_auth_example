import React from 'react'
import { Route, Link, Switch } from 'react-router-dom';
import LoginUser from './LoginUser';
import RegisterUser from './RegisterUser';

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: ""
    }
  }

  toggleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  setUser = (data) => {
    this.setState({
      user: data.username
    })
  }

  removeUser = () => {
    this.setState({
      user: ""
    })
  }

  renderLogin = () => {
    return (
      <LoginUser toggleLogin={this.toggleLogin} setUser={this.setUser} removeUser={this.removeUser} message="" user={this.state.user} />
    )
  }

  renderRegister = () => {
    if (this.state.user) {
      return (
        <LoginUser toggleLogin={this.toggleLogin} setUser={this.setUser} removeUser={this.removeUser} message="Please log out before you register" user={this.state.user}/>
      )
    } else {
      return (
        <RegisterUser />
      )
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/users/login' render={this.renderLogin} />
          <Route exact path='/users/new' render={this.renderRegister} />
        </Switch>
      </div>
    )
  }
}

export default Users;
