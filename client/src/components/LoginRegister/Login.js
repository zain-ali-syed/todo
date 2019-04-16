import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import { connect } from 'react-redux';
import M from 'materialize-css';
import Isemail from 'isemail';
import { loginUser } from '../../api/apiCalls';
import Form from './Form';

class Login extends Component {
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

  formValid = () => {
    const { email, password } = this.state;
    const errorMessages = [];
    this.setState({ errors: [] });

    if (!Isemail.validate(email)) {
      errorMessages.push('Please enter a valid email');
    }
    if (password.length < 6)
      errorMessages.push(
        'Please enter a valid password of at least 4 characters'
      );

    if (errorMessages.length === 0) {
      return true;
    }

    this.setState(() => ({ errors: errorMessages }));

    return false;
  };

  handleSubmit = async e => {
    const { email, password } = this.state;
    e.preventDefault();

    if (!this.formValid()) return;

    const response = await loginUser(email, password);
    if (response.data.success) {
      const { email } = jwtDecode(response.data.token);
      this.props.loggedIn({ email, token: response.data.token });
      this.props.history.push('/todos');
    } else {
      this.setState(prevState => ({
        errors: [
          ...prevState.errors,
          "I'm sorry your login credentials are not correct"
        ]
      }));
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
          title="Login Details"
          buttonText="Login"
          type="login"
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

const mapDispatchToProps = dispatch => {
  return {
    loggedIn: data => dispatch({ type: 'LOGGED_IN', data })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
