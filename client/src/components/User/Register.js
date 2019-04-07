import React, { Component } from 'react';
import { registerUser } from '../../snippet';

class Register extends Component {
  state = {
    email: '',
    password: '',
    errors: []
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = async e => {
    const { email, password } = this.state;
    e.preventDefault();
    const response = await registerUser(email, password);
    console.log(response);
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
          <input type="submit" value="Register" />
        </div>
      </form>
    );
  }
}

export default Register;
