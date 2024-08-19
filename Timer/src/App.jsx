import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not Easy" targetTime={20} />
        <TimerChallenge title="Getting tough" targetTime={30} />
        <TimerChallenge title="Pro" targetTime={40} />
      </div>
    </>
  );
}

export default App;
