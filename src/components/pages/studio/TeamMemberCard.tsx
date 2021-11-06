import React from "react";
import { Link } from "react-router-dom";

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
  let title = fullName.split(" ");
  return (
    <div className='team-member-card'>
      <div className='card'>
        <Link to={`team-member/${id}`}>
          <img
            className='card-img w-100'
            src={`${process.env.REACT_APP_API_IMAGES}${image}`}
            alt='Cardimage'
          />
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
