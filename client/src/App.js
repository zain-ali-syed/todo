import React, { Component } from 'react';
import TodosList from './components/Todos/TodosList';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default App;
