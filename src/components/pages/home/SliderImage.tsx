import React from "react";
import { useFireBaseStorageUrl } from "../../../hooks/useFireBaseStorageUrl";
import { FileTypes } from "../../../utils/consts";

interface IProps {
  Image: string;
  Title: string;
}

const SliderImage: React.FC<IProps> = ({ Image, Title }) => {
  const imageUrl = useFireBaseStorageUrl(Image, FileTypes.Image);

  return (
    <>
      {imageUrl !== "" ? (
        <img src={imageUrl} alt={Title} className='w-100' />
      ) : (
        <div style={{ height: "350px", backgroundColor: "#03090d" }}></div>
      )}
    </>
  );
};

export default SliderImage;
