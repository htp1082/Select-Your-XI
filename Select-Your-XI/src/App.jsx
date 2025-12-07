import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./component/Available/AvailablePlayers";
import Navbar from "./component/Navbar/navbar";
import Selected from "./component/Selected/Selected";

// JSON fetch
const playerFech = fetch("/players.json").then((res) => res.json());

function App() {
  const [toggle, setToggle] = useState(true);
  const [available, setAvailable] = useState(10000000);
  const [playerPurches, setPlayerPurches] = useState([]);

  const remove =(p)=>{
    const filterData = playerPurches.filter(ply=> ply.playerName!== p.playerName);
    setPlayerPurches(filterData)
    setAvailable(available+p.price)
  }

  return (
    <>
      <Navbar available={available} />
      <div className="flex justify-between max-w-[1200px] mx-auto mt-4">
        {toggle?"Available Players":`Selected Players ${playerPurches.length}/6`}
        <div>
          <button onClick={() => setToggle(true)} className="btn mr-2">
            Available
          </button>
          <button onClick={() => setToggle(false)} className="btn">
           Selected {playerPurches.length} 
          </button>
        </div>
      </div>

      {toggle ? (
        <Suspense fallback={<span className="loading loading-ball loading-xl"></span>}>
          <AvailablePlayers
            playerFech={playerFech}
            available={available}
            setAvailable={setAvailable}
            playerPurches={playerPurches}
            setPlayerPurches={setPlayerPurches}
          />
        </Suspense>
      ) : (
        <Selected playerPurches={playerPurches} remove={remove} />
      )}
    </>
  );
}

export default App;