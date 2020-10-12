import React, { useEffect, useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([
    {"id": "1234", "taskContent": "asdf"},
    {"id": "5678", "taskContent": "qwer"},
    {"id": "9012", "taskContent": "zxcv"}
    ])
  const [newTaskItem, updateNewTaskItem] = useState("")

  let addNewTaskToList = function (taskItem){
    let taskListCopy = [...taskList]
    taskListCopy.push(taskItem)
    setTaskList(taskListCopy)
    console.log(taskList)
  }

  // let deleteTaskFromList = function(taskItemId) {

  // }

  return (
    <div className="App">
      <input type="text" value={newTaskItem} onChange={ (e) => updateNewTaskItem(e.target.value)} />
      <input type="button" value="Lisää tehtävä" onClick={() => addNewTaskToList(newTaskItem)} />

      { taskList.map( (singleTask) => <p>{singleTask.taskContent}</p>)}
      {/* <button type="button" onClick={() => increaseCounter(counter + 1)}>Laskurin arvo {counter}</button> */}
    </div>
  )
};
export default App;
