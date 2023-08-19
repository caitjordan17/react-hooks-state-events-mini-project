import React from "react";

function Task({text, category, onDeleteTask}) {
  function handleDelete(){
    onDeleteTask(text);
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;


//onClick event to trigger a function with an argument of the text that is passed as props 
// from App, just passing through TaskList. In apps it would be a function that has the task 
// text to delete as an argument and filter tasks based on if task.text != deleted task text