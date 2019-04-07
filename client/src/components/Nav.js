import React from 'react';
import { connect } from 'react-redux';
import Logo from '../images/logo.png';

const Nav = ({ email, logOut }) => {
  return (
    <nav>
      <a href="#!" className="brand-logo center hide-on-small-only">
        <img src={Logo} alt="logo" />
      </a>
      <div className="nav-wrapper">
        <span className="navTitle">{email && <b>{email}</b>}</span>
        <span className="navTitle right">
          {email && <span onClick={logOut}>Logout</span>}
        </span>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    email: state.email
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch({ type: 'LOGOUT_USER' })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
