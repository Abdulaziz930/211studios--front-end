import React from "react";
// import { Link } from "react-router-dom";
import { useAsyncData } from "../../../hooks/useAsyncData";
import { IGameData } from "../../../models/models";
import Game from "../../common/Game";

const LastGames: React.FC = () => {
  const [{ data }] = useAsyncData<IGameData[]>("Home/getGames/6");
  return (
    <div className='last-games'>
      <div className='container'>
        <div className='games-header'>
          <h2>LATEST RELEASES</h2>
        </div>
        <div className='games-content'>
          <div className='row'>
            {data?.map((game) => {
              return (
                <div className='col-lg-4 col-md-6' key={game.id}>
                  <Game game={game} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastGames;
