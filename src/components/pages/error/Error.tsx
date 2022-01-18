import React from "react";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../../routes/consts";

interface IProps {
  statusCode: number;
  title: string;
  description: string;
  buttonIsExist: boolean;
}

const Error: React.FC<IProps> = ({
  statusCode,
  title,
  description,
  buttonIsExist,
}) => {
  return (
    <div className='error-wrapper'>
      <div id='notfound'>
        <div className='notfound-bg'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className='notfound'>
          <div className='notfound-404'>
            <h1>{statusCode}</h1>
          </div>
          <h2>{title}</h2>
          <p>{description}</p>
          {buttonIsExist ? <Link to={APP_ROUTES.Home.PATH}>Home</Link> : ""}
        </div>
      </div>
    </div>
  );
};

export default Error;
