import Item from "../Item";
import "./Box.css"
export default function Box (props) {
  const arr = ["Zadanie 1", "Zadanie 2"];
  
  return (
    <div className="box">
      <h2>{props.title}</h2>
      <div>
        {arr.map((item)=>{
        return <Item description = {item} />
         })}
      </div>
    </div>
  )
}