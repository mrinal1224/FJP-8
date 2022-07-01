import React, { Component } from 'react'

export class Todo extends Component {


       constructor(){
              super()

              this.state ={
                     tasks:[],
                     currTask : ''
              }
       }


       handleChange =(e)=>{
              console.log(e.target.value)
              this.setState({
                    currTask :e.target.value
              })
       }



       handleAddTask = ()=>{
            this.setState({
               tasks : [...this.state.tasks , {task:this.state.currTask}]
            })


            
       }



  render() {
    return (
      <div>
       <input type='text' onChange={this.handleChange}/>
       <button onClick={this.handleAddTask}>Add Task</button>
      </div>
    )
  }
}

export default Todo