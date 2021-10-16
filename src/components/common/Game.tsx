import React from "react";
import { Link } from "react-router-dom";
import { IGameData } from "../../models/models";

interface IProps {
  game: IGameData;
}

const Game: React.FC<IProps> = ({ game }) => {
  return (
    <>
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
    </>
  );
};

export default Game;
