import React from "react";

interface IProps {
  title?: string;
  description?: string;
  image?: string;
}

const Banner: React.FC<IProps> = ({ title, description, image }) => {
  return (
    <div className='banner-wrapper'>
      <img
        src={`${process.env.REACT_APP_API_IMAGES}${image}`}
        alt='bannerimage'
        className='w-100'
      />
      <div className='text-container'>
        <div className='container'>
          <div className='title'>
            <h1>{title}</h1>
          </div>
          <div className='description'>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
