import React from "react";
import { useAsyncData } from "../../../hooks/useAsyncData";
import { IStudioData } from "../../../models/models";
import { Link } from "react-router-dom";
import CSS from "csstype";

const OurCompany: React.FC = () => {
  const [{ data }] = useAsyncData<IStudioData>("Home/getStudio");

  const sectionStyles: CSS.Properties = {
    backgroundImage:
      window.innerWidth < 768
        ? "none"
        : `url(${process.env.REACT_APP_API_IMAGES}${data?.image})`,
    backgroundPosition: "bottom center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% auto",
  };

  return (
    <div className='our-company' style={sectionStyles}>
      <div className='container'>
        <div className='our-company-header'>
          <h2 className='section-heading'>Our Company</h2>
        </div>
        <div className='our-company-content'>
          <div className='row'>
            <div className='col-md-5'>
              <div className='content-title'>
                <h1>{data?.title}</h1>
              </div>
              <div
                className='content-description'
                dangerouslySetInnerHTML={{
                  __html: data?.description
                    ? data.description.slice(0, 250)
                    : "",
                }}></div>
              <div className='linkBox'>
                <Link to='our-studios'>Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCompany;
