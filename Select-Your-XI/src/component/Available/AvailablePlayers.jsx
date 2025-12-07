import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({ playerFech, available, setAvailable, playerPurches, setPlayerPurches }) => {
  const playerData = use(playerFech);

  return (
    <div className="max-w-[1200px] w-full p-4">
      <h1 className="text-center mb-4">Total Players: {playerData.length}</h1>
      <div className="grid grid-cols-3 gap-4">
        {playerData.map((player) => (
          <PlayerCard
            key={player.playerId}
            player={player}
            available={available}
            setAvailable={setAvailable}
            playerPurches={playerPurches}
            setPlayerPurches={setPlayerPurches}
          />
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;