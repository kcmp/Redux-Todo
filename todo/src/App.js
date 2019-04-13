import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Form from './components/Form';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>To Do</h1>
        <Form />
        <TodoList />
      </div>
    );
  }
}
 export default App;