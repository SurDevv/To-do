import { useState } from "react";

export default function Item (props) {


  return(
    <div>
      <p>{props.description}</p>
      <button>Forward</button>
      <button>Back</button>
      <button onClick={() => props.delFunction(props.description)}>X</button>
    </div>
  );
}