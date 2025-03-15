import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const player = useRef();
  const [playerName, setPlayerName] = useState(null);

  const handleClick = () => {
    setPlayerName(player.current.value);
    player.current.value = ""; // clear the input field
  };
  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown Identity"}</h2>
      <p>
        <input ref={player} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
