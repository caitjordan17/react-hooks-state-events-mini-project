import React, {useState} from "react";

function Task({text, category, handleDeleteClick }) {
  console.log("text in task:", text)
  // const [isDeleted, setIsDeleted] = useState(false);

  // function handleDeleteClick(){
  //   setIsDeleted((isDeleted) => !isDeleted);
  // }

  return (
   <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteClick}>X</button>
    </div>
  );
}

export default Task;
