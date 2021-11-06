import React from "react";
import { Link } from "react-router-dom";
import { IGameData } from "../../models/models";
import CategoryButton from "./CategoryButton";
import { useHistory } from "react-router-dom";

interface IProps {
  game: IGameData;
  isDetail: boolean;
}

const Game: React.FC<IProps> = ({ game, isDetail }) => {
  const { push } = useHistory();
  return (
    <>
      <div className='card game-card'>
        {isDetail ? (
          <img
            className='card-img-top img-fluid'
            src={`${process.env.REACT_APP_API_IMAGES}${game.image}`}
            alt={game.name}
            onClick={() => push(`${game.id}`)}
          />
        ) : (
          <Link to={`games/${game.id}`}>
            <img
              className='card-img-top img-fluid'
              src={`${process.env.REACT_APP_API_IMAGES}${game.image}`}
              alt={game.name}
            />
          </Link>
        )}
        <CategoryButton category={game.category} />
        <div className='card-body'>
          <h5 className='card-title'>
            {isDetail ? (
              <p onClick={() => push(`${game.id}`)} className='heading'>
                {game.name}
              </p>
            ) : (
              <Link to={`games/${game.id}`} className='heading'>
                {game.name}
              </Link>
            )}
          </h5>
          <p
            className='card-text'
            dangerouslySetInnerHTML={{
              __html: game.description.slice(0, 120),
            }}></p>
          {isDetail ? (
            <p onClick={() => push(`${game.id}`)} className='btn'>
              View Game
            </p>
          ) : (
            <Link to={`games/${game.id}`} className='btn'>
              View Game
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Game;
