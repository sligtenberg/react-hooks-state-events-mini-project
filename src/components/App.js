import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  function deleteTask(text) {
    setTasks(tasks.filter((task) => task.text !== text))
  }

  function onTaskFormSubmit(taskObj) {
    console.log(taskObj)
    setTasks([...tasks, taskObj])
  }

  const displayedTasks = tasks.filter((task) => task.category === selectedCategory || selectedCategory === "All")

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} setSelectCatagory={setSelectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={displayedTasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
