import { useEffect, useState } from 'react';
import './App.css'
import Box from './components/Box/Box'
import Input from './components/Input'

const arr = [];

function App() {

const[tasks, setTasks] = useState ([])

useEffect(() => {
  setTasks (arr)
},[]) 

function delTask (taskName) {
   const newTasks = tasks.filter ((task) => task.name != taskName)
   setTasks(newTasks)
}

function addTask (text) {
  const found = tasks.findIndex((task) => task.name === text);
// 
  if (text!=="" && found == -1) {
  const newTask = {
    name: text,
    status:"TODO"}
    setTasks ([...tasks, newTask]) 
  } else { alert ("Nazwa jest pusta lub task o danej nazwie istnieje.")}
}

function moveForward (taskName) {
  tasks.map((task) => {
    if (task.name === taskName) {
      if (task.status === "TODO") task.status = "INPROGRESS" 
      else if (task.status === "INPROGRESS") task.status = "COMPLETED"
    }
    return task;
  })
  setTasks ([...tasks]) 
};

function moveBack (taskName) {
  tasks.map((task) => {
    if (task.name === taskName) {
      if (task.status === "COMPLETED") task.status = "INPROGRESS" 
      else if (task.status === "INPROGRESS") task.status = "TODO"
    }
    return task;
  })
  setTasks ([...tasks]) 
};

  return (
    <main className='main'>
      <Box title = "To do" items = {tasks.filter((task) => task.status === "TODO")} delFunction = {delTask} moveForward = {moveForward} moveBack = {moveBack}/>
      <Box title = "In progress" items = {tasks.filter((task) => task.status === "INPROGRESS")} delFunction = {delTask} moveForward = {moveForward} moveBack = {moveBack}/>
      <Box title = "Completed" items = {tasks.filter((task) => task.status === "COMPLETED")} delFunction = {delTask} moveForward = {moveForward} moveBack = {moveBack}/>
      <Input add = {addTask}/>
    </main>
  );
  }

export default App
