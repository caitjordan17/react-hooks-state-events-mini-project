
import Task from "./Task"

function TaskList({tasks, selectedCat}) {
  // console.log("selectedCat:", selectedCat)
  

  const tasksToDisplay = tasks.filter((task) => {
    if (selectedCat === "All") return true;
    if (selectedCat != "All") return task.category === selectedCat;
  })
    // here's where I'll put filter conditions based on which category button was clicked
  
  const taskList = tasksToDisplay.map((task) => ( 
    <Task key={task.text} category={task.category} text={task.text} />
  ))
  // console.log("taskList:", taskList)
  return (
    <div className="tasks">{taskList}</div>
  );
}

export default TaskList;
