import Item from "../Item";
import "./Box.css"

export default function Box(props) {
    return (
        <div className="box">
            <h2>{props.title}</h2>
            <div>
                {props.items.map((item) => {
                    return <Item key={item} description={item}/>
                })}
            </div>
        </div>
    )
}