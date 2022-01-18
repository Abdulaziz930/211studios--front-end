import React from "react";
import { useParams } from "react-router";
import { useAsyncData } from "../../../hooks/useAsyncData";
import { IGameData, IGameDetailData } from "../../../models/models";
import CategoryButton from "../../common/CategoryButton";
import { LionPlayer } from "lion-player";
import moment from "moment";
import Game from "../../common/Game";
import { useFireBaseStorageUrl } from "../../../hooks/useFireBaseStorageUrl";
import { FileTypes } from "../../../utils/consts";

const GameDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [{ data }] = useAsyncData<IGameDetailData>(`Game/getGame/${id}`);
  const [games] = useAsyncData<IGameData[]>(
    `Game/getGamesByCategory/${data?.categories[0].id}/${data?.id}/3`
  );
  const imageUrl = useFireBaseStorageUrl(data?.image ?? "", FileTypes.Image);
  const videoUrl = useFireBaseStorageUrl(data?.video ?? "", FileTypes.Video);

  return (
    <div className='game-detail'>
      <div className='game-detail-header'>
        <img className='img-fluid' src={imageUrl} alt={data?.name} />
        <div className='header-title'>
          <div className='container'>
            {data?.categories.map((category) => (
              <CategoryButton category={category} key={category.id} />
            ))}
            <div className='title'>
              <h1>{data?.name}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='game-detail-content'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <div
                className='description'
                dangerouslySetInnerHTML={{
                  __html: data?.description ? data.description : "",
                }}></div>
              <div className='video-player'>
                <LionPlayer src={`${videoUrl}`} />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='details'>
                <div className='details-item relased-date'>
                  <h2>RELEASED ON</h2>
                  <p>{moment(data?.relaseDate).format("L")}</p>
                </div>
                {data?.lastUpdateDate !== null ? (
                  <div className='details-item update-date'>
                    <h2>LAST UPDATE DATE</h2>
                    <p>{moment(data?.lastUpdateDate).format("L")}</p>
                  </div>
                ) : (
                  ""
                )}
                <div className='details-item size-box'>
                  <h2>SIZE</h2>
                  <p>{data?.size}</p>
                </div>
                <div className='details-item platforms-box'>
                  <h2>PLATFORMS</h2>
                  <div className='platform-items'>
                    {data?.platforms.map((platform) => (
                      <p
                        className='platform-item'
                        dangerouslySetInnerHTML={{ __html: platform.logo }}></p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {games.data?.length === 0 ? (
              ""
            ) : (
              <div className='col-md-12'>
                <div className='more-games'>
                  <div className='more-games-header'>
                    <h2 className='section-heading'>MORE RELEASES</h2>
                  </div>
                  <div className='more-games-content'>
                    <div className='row'>
                      {games.data?.map((game) => (
                        <>
                          <div className='col-lg-4 col-md-6'>
                            <Game game={game} isDetail={true} key={game.id} />
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
