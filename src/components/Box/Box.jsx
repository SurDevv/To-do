import Item from "./Item/Item";
import "./Box.css";
export default function Box(props) {
  return (
    <div className="box">
      <div className="box-title">
        <h2>{props.title}</h2>
      </div>
      <div className="box-item">
        {props.items.map((item, index) => {
          return (
            <Item
              description={item.name}
              delFunction={props.delFunction}
              itemIndex={index + 1}
              moveForward={props.moveForward}
              moveBack={props.moveBack}
              status={item.status}
            />
          );
        })}
      </div>
    </div>
  );
}
