import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

const categories = CATEGORIES
const tasks = TASKS

function App() {
  const [filter, setFilter] = useState("All");
  
  function handleTaskFilter(event){
    setFilter(event.target.textContent)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} filter={filter} handleTaskFilter={handleTaskFilter}/>
      <NewTaskForm />
      <TaskList tasks={tasks} selectedCat={filter}/>
    </div>
  );
}

export default App;
