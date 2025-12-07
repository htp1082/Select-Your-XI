import React from "react";
import deleteImg from "../../assets/delete.png";

const SelectedCard = ({ player, remove }) => {
  const removeHandler = () => {
    remove(player);
  };
  return (
    <div className="flex items-center border border-green-600 p-4 mt-4 rounded-xl">
      <img
        className="h-24 w-24 rounded-2xl"
        src={player.img}
        alt={player.playerName}
      />
      <div className="ml-4">
        <h2>{player.playerName}</h2>
        <p>{player.role}</p>
      </div>
      <div className="ml-auto">
        <img
          onClick={removeHandler}
          className="w-12 h-12 cursor-pointer"
          src={deleteImg}
          alt="delete"
        />
      </div>
    </div>
  );
};

export default SelectedCard;
