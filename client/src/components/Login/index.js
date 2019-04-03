import React, { Component } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = false;

const apiURL = 'http://127.0.0.1:3000/api/login';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: []
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.login(this.state);
  };

  login = ({ email, password }) => {
    axios
      .post(apiURL, {
        email,
        password
      })
      .then(res => console.log('got back ', res))
      .catch(error => console.log('the error ', error));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="inner-wrap">
          <label htmlFor="email">
            Email Address
            <input
              type="email"
              id="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </label>
          <label htmlFor="password">
            Password
            <textarea
              id="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </label>
        </div>

        <div className="button-section">
          <input type="submit" value="Login" />
        </div>
      </form>
    );
  }
}

export default Login;
