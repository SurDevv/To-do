import { useState } from "react";
import "./Input.css";

export default function Input(props) {
  const [text, setText] = useState("");

  return (
    <div className="input">
      <h2>What do you have to do?</h2>
      <input onChange={(event) => setText(event.target.value)} type="text" />
      <button onClick={() => props.add(text)}>Add task</button>
    </div>
  );
}
