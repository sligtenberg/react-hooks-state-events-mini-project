import React, {useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const options = categories.filter((category) => {
    return category !== "All"
  })
  .map((category) => {
    return <option key={category}>{category}</option>
  })

  const [taskForm, setTaskForm] = useState({text: "", category: ""})

  function handleTaskFormTextEntry(event) {
    setTaskForm({text: event.target.value, category: taskForm.category})
  }

  function handleTaskFormCatagoryChange(event) {
    setTaskForm({text: taskForm.text, category: event.target.value})
  }

  function handleNewTaskFormSubmit(event) {
    event.preventDefault()
    onTaskFormSubmit(taskForm)
  }

 // console.log(taskForm)

  return (
    <form className="new-task-form" onSubmit={handleNewTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={taskForm.text} onChange={handleTaskFormTextEntry}/>
      </label>
      <label>
        Category
        <select name="category" value={taskForm.category} onChange={handleTaskFormCatagoryChange}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
