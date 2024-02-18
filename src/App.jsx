import { useEffect, useState } from 'react';
import './App.css'
import Box from './components/Box/Box'
import Input from './components/Input'

const arr = [{
  name: "zadanie1",
  status: "TODO"
}, 
{
  name: "zadanie2",
  status: "INPROGRESS"
}, 
{
  name: "zadanie3",
  status: "COMPLETED"
}];

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
  console.log (text)
  const newTask = {
    name: text,
    status:"TODO"}
    setTasks ([...tasks, newTask]) 
}

  return (
    <main className='main'>
      <Box title = "To do" items = {tasks.filter((task) => task.status === "TODO")} delFunction = {delTask}/>
      <Box title = "In progress" items = {tasks.filter((task) => task.status === "INPROGRESS")} delFunction = {delTask}/>
      <Box title = "Completed" items = {tasks.filter((task) => task.status === "COMPLETED")} delFunction = {delTask}/>
      <Input add = {addTask} />
    </main>
  );
}

export default App
