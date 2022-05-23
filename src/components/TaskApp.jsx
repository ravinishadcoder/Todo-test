import React, { useState } from "react";
import AddTask from "../components/AddTask/AddTask"
import Task from "./Task/Task";
import styles from "./taskApp.module.css";
import { v4 as uuidv4 } from 'uuid';
import data from "../data/tasks.json"

//console.log(data)
const TaskApp = () => {
   
  
  const [todo,setTodo]=useState(data);
  //console.log(todo)
  const addInput = (value)=>{
  setTodo([...todo,{id:uuidv4(),text:value,done:false}]);
    console.log(todo)
  }
  const Remove = (id)=>{
    console.log(id)
    let newtodo = [...todo];
    newtodo.splice(id,1);
    setTodo(newtodo);
  }
  
  
  const isComplete = (id)=>{
    console.log(id)
    const newtodo = [...todo];
    newtodo[id].done=true;
    setTodo(newtodo);
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <AddTask addInput={addInput}/>
      <Task todo={todo} isComplete={isComplete} Remove={Remove}/>
      
      {/* Add Task */}
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;
