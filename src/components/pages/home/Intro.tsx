import React from "react";
import { useAsyncData } from "../../../hooks/useAsyncData";
import { ISliderItem } from "../../../models/models";
import { Carousel } from "react-bootstrap";

const Intro: React.FC = () => {
  const [{ data }] = useAsyncData<ISliderItem[]>("Home/getSliders");

  return (
    <div className='intro'>
      <Carousel>
        {data?.map((slider) => (
          <Carousel.Item key={slider.id}>
            <img
              className='w-100'
              src={`${process.env.REACT_APP_API_IMAGES}${slider.image}`}
              alt={slider.title}
            />
            <Carousel.Caption>
              <div className='row'>
                <div className='col-xl-5'>
                  <h3>{slider.title}</h3>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Intro;
