import React from "react";
import { useFireBaseStorageUrl } from "../../hooks/useFireBaseStorageUrl";
import { FileTypes } from "../../utils/consts";

interface IProps {
  title?: string;
  description?: string;
  image?: string;
}

const Banner: React.FC<IProps> = ({ title, description, image }) => {
  const bannerImage = useFireBaseStorageUrl(image ?? "", FileTypes.Image);

  return (
    <div className='banner-wrapper'>
      <img src={bannerImage} alt='bannerimage' className='w-100' />
      <div className='text-container'>
        <div className='container'>
          <div className='title'>
            <h1>{title?.toUpperCase()}</h1>
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
