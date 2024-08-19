import { useState } from "react";

const Player = ({ initalname, symbol, active }) => {
  const [editing, setEditing] = useState(false);
  const [Playername, setName] = useState(initalname);

  function clickEditHandler() {
    setEditing((editing) => !editing);
  }

  function changeHadler(event) {
    setName(event.target.value);
  }
  let editName = <span className="player-name">{Playername}</span>;

  if (editing === true) {
    editName = <input type="text" value={Playername} onChange={changeHadler} />;
  }
  return (
    <>
      <li className={active ? "active" : ""}>
        <span className="player">
          {editName}
          <span className="player-symbol">{symbol}</span>

          <button onClick={clickEditHandler}>
            {editing ? "save" : "Edit"}
          </button>
        </span>
      </li>
    </>
  );
};

export default Player;
