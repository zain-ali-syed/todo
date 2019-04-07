import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getTodos, deleteTodo, addTodo, editTodo } from '../../snippet';
import TodosItem from './TodosItem';
import AddTodo from './AddTodo';

class TodosList extends Component {
  state = {
    todos: [],
    todosCompleted: []
  };

  componentDidMount() {
    console.log('TODO mounted');
    this.fetchTodos();
  }

  fetchTodos = async () => {
    const response = await getTodos();
    const todos = _.filter(response.data, { completed: false });
    const todosCompleted = _.filter(response.data, { completed: true });
    this.setState(() => ({ todos, todosCompleted }));
  };

  handleDelete = async id => {
    await deleteTodo(id);
    this.fetchTodos();
  };

  handleAddTodo = async (title, notes) => {
    try {
      await addTodo(title, notes);
      this.fetchTodos();
      return true;
    } catch (err) {
      throw new Error('There has been an error ', err);
    }
  };

  handleEditTodo = async (id, title, notes, completed) => {
    await editTodo(id, title, notes, completed);
    this.fetchTodos();
  };

  renderTodos = todos => {
    return todos.map(({ _id: id, title, notes, completed, dueDate }) => (
      <TodosItem
        id={id}
        title={title}
        notes={notes}
        completed={completed}
        dueDate={dueDate}
        deleteTodo={this.handleDelete}
        editTodo={this.handleEditTodo}
        completedTodo={this.completedTodo}
        key={id}
      />
    ));
  };

  render() {
    console.log('render of todos logged in ', this.props.loggedIn);

    if (this.props.loggedIn === 'no') {
      this.props.history.push('/login');
    }

    const { todos, todosCompleted } = this.state;
    if (!todos.length && !todosCompleted) return <div>Loading</div>;

    return (
      <>
        <h5>Add a new todo!</h5>

        <AddTodo addTodo={this.handleAddTodo} />
        <h5>Still Todo!</h5>

        <ul className="collection">{this.renderTodos(todos)}</ul>
        <h5>Completed Todos</h5>
        <ul className="collection completedTodos">
          {this.renderTodos(todosCompleted)}
        </ul>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  };
};

export default connect(mapStateToProps)(TodosList);
