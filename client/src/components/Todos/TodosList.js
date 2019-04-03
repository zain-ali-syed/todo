import React, { Component } from 'react';
import axios from 'axios';

class TodosList extends Component {
  componentDidMount() {
    axios
      .get('http://localhost:3000/api/todos')
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return <div />;
  }
}

export default TodosList;
