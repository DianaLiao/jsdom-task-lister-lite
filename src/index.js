document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // const submitButton = document.querySelector("#create-task-form > input[type=submit]")
  // submitButton.addEventListener("click", console.log(event))
  
  const taskForm = document.querySelector("form#create-task-form")
  const taskList = document.querySelector("ul#tasks")
  taskForm.addEventListener("submit", (event) => {
    event.preventDefault()
    postTask()
    console.log("form form boop")
  })
  
  function postTask(){
    newTaskText = taskForm[0].value
    newTask = document.createElement("li")
    newTask.textContent = newTaskText

    taskList.append(newTask)
  }


});


