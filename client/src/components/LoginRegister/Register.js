import React, { Component } from 'react';
import M from 'materialize-css';
import Isemail from 'isemail';
import { registerUser } from '../../api/apiCalls';
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
    if (!this.formValid()) return;

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

  formValid = () => {
    const { email, password } = this.state;
    const errorMessages = [];
    this.setState({ errors: [] });

    if (!Isemail.validate(email)) {
      errorMessages.push('Please enter a valid email');
    }
    if (password.length < 4)
      errorMessages.push(
        'Please enter a valid password of at least 4 characters'
      );

    if (errorMessages.length === 0) {
      return true;
    }

    this.setState(() => ({ errors: errorMessages }));

    return false;
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
          type="register"
        />
        {this.state.errors.map(error => (
          <div className="center-align" key={error}>
            {error}
          </div>
        ))}
      </>
    );
  }
}

export default Register;
