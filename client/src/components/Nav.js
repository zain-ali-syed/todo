import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';



const Nav = ({email, logOut}) => {
    return (
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">{email && <b>{email}</b>}</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                { email && <li onClick={logOut}>Logout</li> }    
              </ul>
            </div>
        </nav>
       
    );
};

const mapStateToProps = (state) => {
  return {
    email: state.email
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch({ type: "LOGOUT_USER" })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
