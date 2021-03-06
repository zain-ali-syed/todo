import React, { Component } from 'react';

// This component doubles up as a Todo EDITING component as well. Therefore define state and toggleEdit for this component
class TodosItem extends Component {
  state = {
    editMode: false,
    id: this.props.id,
    title: this.props.title,
    notes: this.props.notes,
    completed: this.props.completed,
    completedTodo: this.props.completedTodo
  };

  handleChange = e => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: value });
  };

  toggleEditMode = () => {
    this.setState(prevState => ({
      editMode: !prevState.editMode,
      title: this.props.title,
      notes: this.props.notes,
      completed: this.props.completed
    }));
  };

  render() {
    const { editMode, id, title, notes, completed } = this.state;
    const { deleteTodo, editTodo } = this.props;

    return (
      <li className="collection-item">
        <h6>
          {!editMode ? (
            <b>{title}</b>
          ) : (
            <input
              type="text"
              name="title"
              defaultValue={title}
              onChange={this.handleChange}
            />
          )}
        </h6>
        <p>
          {!editMode ? (
            <b>
              <i className="blue-text text-darken-2">{notes}</i>
            </b>
          ) : (
            <input
              type="text"
              name="notes"
              defaultValue={notes}
              onChange={this.handleChange}
            />
          )}
        </p>
        <label>
          {!editMode ? (
            <input
              type="checkbox"
              name="completed"
              checked={completed}
              onChange={e => {
                this.setState(
                  prevState => ({
                    completed: !prevState.completed
                  }),
                  () => editTodo(id, null, null, this.state.completed)
                );
              }}
            />
          ) : (
            <input
              type="checkbox"
              name="completed"
              onChange={this.handleChange}
            />
          )}
          <span>Completed</span>
        </label>
        <hr />
        <button
          className="btn green darken-3 waves-effect waves-light"
          type="button"
          onClick={() => deleteTodo(id)}
          style={{ marginRight: '10px' }}
        >
          Delete Todo
        </button>
        {!editMode ? (
          <button
            className="btn green darken-3 waves-effect waves-light"
            type="button"
            onClick={this.toggleEditMode}
          >
            {' '}
            Edit Todo
          </button>
        ) : (
          <button
            className="btn green darken-3 waves-effect waves-light"
            type="button"
            onClick={() => {
              this.setState({ editMode: false });
              editTodo(id, title, notes, completed);
            }}
          >
            Save Updates
          </button>
        )}
      </li>
    );
  }
}

export default TodosItem;
