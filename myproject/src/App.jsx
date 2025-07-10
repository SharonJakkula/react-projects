import React, {useState} from 'react';
import './App.css';
import TodoList from './TodoList';

const App = () => {
  const [task,setTask]=useState("");
  const [todos,setTodos]=useState([]);

  const changeHandler=e=>{
    setTask(e.target.value)
  }
  const submitHandler=e=>{
    e.preventDefault()
  const newTodos=[...todos,task];
  setTodos(newTodos);
  setTask("");
}

const deleteHandler = (indexValue)=>{
  const newTodos=todos.filter((todo,index)=>index !== indexValue);
  setTodos(newTodos);
}
  return(
    <div className="center">
      <center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">My Things To Do</h5>
            <form onSubmit={submitHandler}>
              <input type="text" name="task" value={task} onChange={changeHandler}/> &nbsp;&nbsp;
              <input type="submit" value="Add" name="Add"/>
            </form>
            <TodoList todolist={todos} deleteHandler={deleteHandler}/>
            </div>
            </div>
            </center>
            </div>
 
  )
}

export default App
