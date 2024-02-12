import './App.css'
import Box from './components/Box/Box'
import Input from './components/Input'
import {useEffect, useState} from "react";

const arr = ["Zadanie 1", "Zadanie 2", "Zadanie 3"];

function App() {
    const [items, setItems] = useState([])
    useEffect(() => {
        setItems(arr)
    }, []);
    return (
        <main className='main'>
            <Box title="To do" items={items}/>
            <Box title="In progress" items={[]}/>
            <Box title="Completed" items={[]}/>
            <Input/>
        </main>
    );
}

export default App
