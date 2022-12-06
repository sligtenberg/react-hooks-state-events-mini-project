import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask }) {
  const taskComponents = tasks.map(task => {
    return <Task key={task.text} text={task.text} category={task.category} deleteTask={deleteTask}/>
  })
  return (
    <div className="tasks">
      {taskComponents}
    </div>
  );
}

export default TaskList;