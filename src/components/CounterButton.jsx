import { useState } from "react";

function CounterButton(props) {

  return <button onClick={props.onClickAction}>+1</button>;
}

export default CounterButton;
