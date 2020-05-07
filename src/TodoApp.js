import React from "react";
import "./styles.css";

let id = 0;
const Todo = props => (
  <li className="listItem">
    <input type="checkbox" checked={props.todo.checked} onChange={props.onToggle} />
    <button onClick={props.onDelete}>Delete</button>
    <span className={`${props.todo.checked ? "blue" : "red"}`}>{props.todo.text}</span>
  </li>
);

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  addTodo() {
    const text = prompt("Hello what are you doing today?");

    this.setState({
      todos: [
        ...this.state.todos,
        {
          text: text,
          checked: false,
          id: id++
        }
      ]
    });
  }

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  toggleTodo(id){
    this.setState({
      todos : this.state.todos.map(todo => {
        if(todo.id !== id){
          return todo
        }
        return {
          id : todo.id,
          text : todo.text,
          checked : !todo.checked
        }
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>React Todo</h1>
        <div>Length {this.state.todos.length}</div>
        <div>
          Checked {this.state.todos.filter(todo => !todo.checked).length}
          
        </div>
        
        <button onClick={() => this.addTodo()}>Add Todo</button>
        <ul>
          {this.state.todos.map(todo => (
            <Todo todo={todo} 
            onDelete={() => this.deleteTodo(todo.id)}
            onToggle={() => this.toggleTodo(todo.id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
