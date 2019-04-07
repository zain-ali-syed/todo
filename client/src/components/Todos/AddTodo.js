import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    title: '',
    notes: '',
    dueDate: ''
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { title, notes, dueDate } = this.state;
    const addedTodo = this.props.addTodo(title, notes, dueDate);
    if (addedTodo) this.setState({ title: '', notes: '', dueDate: '' });
  };

  render() {
    return (
      <div
        className="row"
        style={{
          backgroundColor: 'white',
          padding: '10px 50px',
          borderRadius: '10px',
          marginTop: '10px'
        }}
      >
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s12 m6">
              <i className="material-icons prefix">account_circle</i>
              <input
                id="title"
                type="text"
                onChange={this.handleChange}
                value={this.state.title}
              />
              <label htmlFor="title">Todo</label>
            </div>
            <div className="input-field col s12 m6">
              <i className="material-icons prefix">note</i>
              <input
                id="notes"
                type="text"
                onChange={this.handleChange}
                value={this.state.notes}
              />
              <label htmlFor="notes">Notes</label>
            </div>

            <div className="row">
              <button className="btn blue accent-2 col s12" type="submit">
                Add Todo
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTodo;
