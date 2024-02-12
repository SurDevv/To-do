export default function Item (props) {
  return(
    <div>
      <p>{props.description}</p>
      <button>Forward</button>
      <button>Back</button>
      <button>X</button>
    </div>
  );
}