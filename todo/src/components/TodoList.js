import React from "react"
import {connect} from "react-redux";
import {toggle} from '../actions/actions'
import Todo from './Todo';


 const TodoList = (props) => {

    return(
      <div>
         {props.todos.map(todo =>
            <Todo 
               key={todo.id}
               todo={todo}
               id={todo.id}
               task={todo.task}
               completed={todo.completed}
               toggle={() => props.toggle(todo.id)}
            />
            )}
      </div>
   )
}
const mapStateToProps = (state) => {
   return {todos: state.todos}
}
 export default connect(mapStateToProps, {toggle})(TodoList)