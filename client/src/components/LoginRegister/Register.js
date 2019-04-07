import React, { Component } from 'react';
import M from 'materialize-css';
import { registerUser } from '../../snippet';
import Form from './Form';

class Register extends Component {
  state = {
    email: '',
    password: '',
    errors: []
  };

  componentDidMount() {
    M.AutoInit();
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = async e => {
    const { email, password } = this.state;
    e.preventDefault();
    const response = await registerUser(email, password);
    if (!response.data.email) {
      this.setState(prevState => ({
        errors: [...prevState.errors, response.data.message]
      }));
    } else {
      // send user to login page after registration
      this.props.history.push('/login');
    }
  };

  render() {
    return (
      <>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          email={this.state.email}
          password={this.state.password}
          title="Registration Details"
          buttonText="Register"
        />
        <div className="center-align">{this.state.errors}</div>
      </>
    );
  }
}

export default Register;
