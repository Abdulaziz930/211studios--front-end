import React from "react";
import { Link } from "react-router-dom";
import { useFireBaseStorageUrl } from "../../../hooks/useFireBaseStorageUrl";
import { FileTypes } from "../../../utils/consts";

interface IProps {
  id: string;
  fullName: string;
  position: string;
  image: string;
}

const TeamMemberCard: React.FC<IProps> = ({
  id,
  fullName,
  position,
  image,
}) => {
  const imageUrl = useFireBaseStorageUrl(image, FileTypes.Image);
  let title = fullName.split(" ");
  return (
    <div className='team-member-card'>
      <div className='card'>
        <Link to={`team-member/${id}`}>
          {imageUrl !== "" ? (
            <img className='card-img w-100' src={imageUrl} alt='Cardimage' />
          ) : (
            <div style={{ height: "350px", backgroundColor: "#03090d" }}></div>
          )}
          <div className='card-img-overlay overlay-text'>
            <div className='card-heading'>
              {title.map((item, index) => {
                return index === 0 ? (
                  <h2 className='card-title strong-title'>{item}</h2>
                ) : (
                  <h4 className='card-title small-title'>{item}</h4>
                );
              })}
            </div>
            <p className='card-text'>{position}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TeamMemberCard;
