import { useState, useRef } from "react";

export default function Player() {
  //this playerName useRef will always be an object that has only the current property
  const playerName = useRef();
  //we must use it in this case with useState because on the first cycle playerName.current will be undefined
  //and we must notice that whenever the ref changes the component function wont be rerendered!

  //and whenever a state changes the component WILL rerender
  const [enteredPlayerName, setEnteredPlayerName] = useState();

  function handleClick() {
    //with playerName.current we can access all the properties that are exposed
    //by the input html input the ref is used with
    setEnteredPlayerName(playerName.current.value); //so this will get the value property from the input
  }

  return (
    <section id="player">
      <h2>
        {/*in ternary expressions like enteredPlayerName ? enteredPlayerName : "unknown entity"
        we can use the following shotcut in js: */}
        Welcome {enteredPlayerName ?? "unknown entity"}
      </h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
