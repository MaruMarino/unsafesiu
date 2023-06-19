import { Button } from "react-bootstrap";

function CounterButton(props) {
  return (
  <Button className={props.classes}>
    {props.text}
    <div className="icon">
      <img
        src={props.icon}
        alt=""
        style={{
          height: "100%",
        }}
      />
    </div>
  </Button>
  )
}

export default CounterButton;
