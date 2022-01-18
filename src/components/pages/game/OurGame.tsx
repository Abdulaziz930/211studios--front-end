import React, { useState, useCallback, useEffect } from "react";
import { useAsyncData } from "../../../hooks/useAsyncData";
import { IBannerData, ICategory, IGameData } from "../../../models/models";
import Banner from "../../common/Banner";
import Game from "../../common/Game";

const OurGame: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [categoryId, setCategoryId] = useState<number>(0);
  const [games] = useAsyncData<IGameData[]>(
    `Game/getGamesByCategory/${count}/6?categoryId=${
      categoryId === 0 ? "" : categoryId
    }`
  );
  const [categories] = useAsyncData<ICategory[]>("Game/getCategories");
  const [gamesCount] = useAsyncData<number>("Game/getGamesCount");
  const [filteredGamesCount] = useAsyncData<number>(
    `Game/getGamesCount/${categoryId}`
  );
  const [gameBanner] = useAsyncData<IBannerData>("Game/getGameBanner");
  const [gameList, setGameList] = useState<IGameData[]>(games.data ?? []);

  useEffect(() => {
    let result: IGameData[] = [...gameList];
    games.data?.forEach((game) => {
      result.push(game);
    });
    setGameList(result);
  }, [games]);

  const handleClickLoadMore = useCallback(() => {
    setCount(gameList.length ?? 0);
  }, [gameList]);

  const handleClickCategory = useCallback(
    (e, id: number) => {
      setCategoryId(id);
      setCount(0);
      if (categoryId !== id) {
        setGameList([]);
      }
    },
    [categoryId]
  );

  const handleClickAll = useCallback(() => {
    if (categoryId !== 0) {
      setGameList([]);
    }
    setCount(0);
    setCategoryId(0);
  }, [categoryId]);

  return (
    <div className='our-games-wrapper'>
      <Banner
        title={gameBanner.data?.title}
        description={gameBanner.data?.description}
        image={gameBanner.data?.image}
      />
      <div className='game-content-wrapper'>
        <div className='container'>
          <div className='category-wrapper'>
            <button
              className={`btn ${categoryId === 0 ? "active" : ""}`}
              onClick={handleClickAll}>
              All
            </button>
            {categories.data?.map((category) => (
              <button
                className={`btn ${categoryId === category.id ? "active" : ""}`}
                onClick={(e) => handleClickCategory(e, category.id)}
                key={category.id}>
                {category.name}
              </button>
            ))}
          </div>
          <div className='games-wrapper'>
            <div className='row'>
              {gameList.map((game) => {
                return (
                  <div className='col-lg-4 col-md-6' key={game.id}>
                    <Game isDetail={false} game={game} />
                  </div>
                );
              })}
            </div>
            {categoryId === 0 ? (
              gameList.length !== gamesCount.data ? (
                <div className='load-more-box'>
                  <button
                    className='btn load-more'
                    onClick={handleClickLoadMore}>
                    Load More
                  </button>
                </div>
              ) : (
                ""
              )
            ) : gameList.length !== filteredGamesCount.data ? (
              <div className='load-more-box'>
                <button className='btn load-more' onClick={handleClickLoadMore}>
                  Load More
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGame;
