import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import TodosList from './components/Todos/TodosList';
import Register from './components/LoginRegister/Register';
import Login from './components/LoginRegister/Login';

import PrivateRoute from './components/PrivateRoute';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import Test from './Test';

class App extends Component {
  render() {
    return (
      <Layout>
        <BrowserRouter>
          <Switch>
            <PrivateRoute
              exact
              path="/"
              loggedIn={this.props.loggedIn}
              component={TodosList}
            />
            <PrivateRoute
              exact
              path="/todos"
              loggedIn={this.props.loggedIn}
              component={TodosList}
            />
            <ProtectedRoute
              exact
              path="/register"
              loggedIn={this.props.loggedIn}
              component={Register}
            />
            <ProtectedRoute
              exact
              path="/login"
              loggedIn={this.props.loggedIn}
              component={Login}
            />
            <Route path="/test" component={Test} />
          </Switch>
        </BrowserRouter>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  };
};

export default connect(mapStateToProps)(App);
