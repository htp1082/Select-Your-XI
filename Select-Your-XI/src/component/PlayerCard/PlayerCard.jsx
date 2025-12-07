import React, { useState } from "react";
import userIcon from "../../assets/user.png";
import nationality from "../../assets/flag-png.png";
import { toast } from "react-toastify";

const PlayerCard = ({ player, available, setAvailable, playerPurches, setPlayerPurches }) => {
  const [isSelected, setIsSelected] = useState(false);

  const coinHandler = () => {
    if (available < player.price) {
      toast("Not Enough Balance");
      return;
    }

    if(playerPurches.length===6){
      toast("6 Player already Added")
      return
    }

    setIsSelected(true);
    setAvailable(available - player.price);
    setPlayerPurches([...playerPurches, player]);
  };

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={player.img} alt={player.playerName} className="h-[200px] w-full object-cover" />
      </figure>
      <div className="card-body">
        <div className="flex items-center mb-2">
          <img className="w-5 h-5" src={userIcon} alt="user" />
          <h2 className="ml-2">{player.playerName}</h2>
        </div>

        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <img className="w-5 h-5" src={nationality} alt="flag" />
            <p className="ml-2">{player.country}</p>
          </div>
          <button className="btn">{player.role}</button>
        </div>

        <div className="flex justify-between mb-1">
          <p>Rating:</p>
          <p>{player.rating}</p>
        </div>

        <div className="flex justify-between mb-1">
          <p>Batting Style:</p>
          <p>{player.battingStyle}</p>
        </div>

        <div className="flex justify-between mb-1">
          <p>Bowling Style:</p>
          <p>{player.bowlingStyle}</p>
        </div>

        <div className="flex justify-between items-center mt-2">
          <p>Price: {player.price}</p>
          <button className="btn" onClick={coinHandler}>
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;