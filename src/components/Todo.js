import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todo extends React.Component {
  render() {
    //todo is a for each variable
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

Todo.propTypes = {
  todos: PropTypes.array.isRequired,
};
export default Todo;
