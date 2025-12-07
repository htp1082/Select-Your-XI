import React from "react";
import SelectedCard from "../Selected Card/SelectedCard";

const Selected = ({ playerPurches,remove }) => {
  return (
    <div className="max-w-[1200px] mx-auto p-4">
      {playerPurches.length === 0 && <p>No players selected yet.</p>}
      {playerPurches.map((player, index) => (
        <SelectedCard key={index} player={player} remove={remove}/>
      ))}
    </div>
  );
};

export default Selected;