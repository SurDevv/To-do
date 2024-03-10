export default function Item (props) {


  return(
    <div>
      <p><strong>{props.itemIndex}. </strong>{props.description}</p>
      <button disabled = {props.status === "COMPLETED"} onClick={() => props.moveForward(props.description)}>Forward</button>
      <button disabled = {props.status === "TODO"} onClick={() => props.moveBack(props.description)}>Back</button>
      <button onClick={() => props.delFunction(props.description)}>X</button>
    </div>
  );
}