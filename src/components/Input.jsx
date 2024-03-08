import {useState } from 'react';

export default function Input (props) {
  const [text, setText] = useState ("")
  
  return (
    <div>
    <input onChange={(event) => setText (event.target.value)} type="text"/>
    <button onClick={() => props.add(text)}>Add</button>
    </div>
  );
}