import { Button } from "react-bootstrap";

function IconButton(props) {
  return (
  <Button className={props.classes} onClick={props.onClickAction}>
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

export default IconButton;
