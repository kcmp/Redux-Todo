import React from "react"
import {connect} from "react-redux";
import {add, clear} from '../actions/actions';


class Form extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         input: "",
      }
   }

   inputHandler = e => {
      this.setState({
      input: e.target.value,
    })
   }

   addHandler = e => {
      this.props.add(this.state.input)
      this.setState({
         input: "",
      })
   }

   clearCompleted = e => {
      this.props.clear()
   }
    render(){
      return(
         <div>
            <form onSubmit={(e) => e.preventDefault()}>
               <input 
                  value={this.state.input} 
                  placeholder="Enter Todo"
                  maxLength="50"
                  onChange={this.inputHandler}
                  onKeyDown={(event) => {
                     if (event.keyCode === 13) {
                        this.addHandler()
                     }
                  }} 
               />
               <button onClick={() => this.addHandler(this.props.input)}>Add</button>
               <button onClick={() => this.clearCompleted(this.props.input)}>Clear Complete</button>
            </form>
         </div>
      )
   }
}

export default connect(null, {add, clear})(Form) 