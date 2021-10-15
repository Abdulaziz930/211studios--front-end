import React from "react";
import { Link } from "react-router-dom";
import { useAsyncData } from "../../../hooks/useAsyncData";
import { IGameData } from "../../../models/models";

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
                  <div className='card'>
                    <Link to={`games/${game.id}`}>
                      <img
                        className='card-img-top img-fluid'
                        src={`http://localhost:3000/images/${game.image}`}
                        alt={game.name}
                      />
                    </Link>
                    <Link
                      to={`categories/${game.category.id}`}
                      className='btn category-btn'>
                      {game.category.name}
                    </Link>
                    <div className='card-body'>
                      <h5 className='card-title'>
                        <Link to={`games/${game.id}`}>{game.name}</Link>
                      </h5>
                      <p
                        className='card-text'
                        dangerouslySetInnerHTML={{
                          __html: game.description.slice(0, 120),
                        }}></p>
                      <Link to={`games/${game.id}`} className='btn'>
                        View Game
                      </Link>
                    </div>
                  </div>
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
