import { useRef, useState } from "react";

export default function Player() {
  const [name, setName] = useState("");
  const PlayerName = useRef(null);
  function clickHandler() {
    setName(PlayerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {name ? name : "unknown entity"}</h2>
      <p>
        <input type="text" ref={PlayerName} />
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
