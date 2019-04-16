import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    title: '',
    notes: '',
    errors: []
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    if (!this.formValid()) return;
    const { title, notes } = this.state;
    const addedTodo = this.props.addTodo(title, notes);
    if (addedTodo) this.setState({ title: '', notes: '' });
  };

  formValid = () => {
    const { title } = this.state;
    const errorMessages = [];
    this.setState({ errors: [] });

    if (!title.length) errorMessages.push('Please enter a todo item');

    if (errorMessages.length === 0) {
      return true;
    }

    this.setState(() => ({ errors: errorMessages }));

    return false;
  };

  render() {
    return (
      <div
        className="row"
        style={{
          backgroundColor: 'white',
          padding: '10px 50px',
          borderRadius: '10px',
          marginTop: '10px',
          border: '1px solid #e1e1e1'
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
              <button
                className="btn green darken-3 waves-effect waves-light col s12"
                type="submit"
              >
                Add Todo
              </button>
            </div>
          </div>
        </form>
        {this.state.errors.map(error => (
          <div className="center-align" key={error}>
            {error}
          </div>
        ))}
      </div>
    );
  }
}

export default AddTodo;
