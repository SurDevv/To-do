import './App.css'
import Box from './components/Box/Box'
import Input from './components/Input'



const arr = ["Zadanie 1", "Zadanie 2"];

function App() {
  return (
    <main className='main'>
      <Box title = "To do" items = {[]}/>
      <Box title = "In progress"/>
      <Box title = "Completed"/>
      <Input />
    </main>
  );
}

export default App
