import React, { useState } from "react";
import styles from "./task.module.css";
import Counter  from "../Counter/Counter";
const Task = ({todo,isComplete,Remove}) => {
  const [isCheked,setisCheked]=useState(false);
  console.log(isCheked)
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div >
    {todo.map((todos)=>(
        <li data-cy="task" className={styles.task} key={todos.id}>
        <input type="checkbox" data-cy="task-checkbox" 
        onClick={()=>{
          isComplete(todos.id)
        }}
        />
        <div data-cy="task-text" className={todos.done? styles.strike:""}>{todos.text}</div>
        <Counter/>
        
        <button data-cy="task-remove-button"
        onClick={()=>{
          Remove(todos.id)
        }}
        >delete</button>
      </li>
        ))}
    </div>
    
  );
};

export default Task;
