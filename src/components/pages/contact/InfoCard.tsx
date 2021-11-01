import React from "react";
import { ISocialMediaData } from "../../../models/models";

interface IProps {
  heading: string;
  content?: string;
  icon?: string;
  isSocial: boolean;
  socials?: ISocialMediaData[];
}

const InfoCard: React.FC<IProps> = ({
  heading,
  content,
  icon,
  isSocial,
  socials,
}) => {
  return (
    <div className='info-card-wrapper'>
      <div className='section-heading'>
        <h2>{heading}</h2>
      </div>
      <div className='content'>
        {!isSocial ? (
          <>
            <div
              className='icon-box'
              dangerouslySetInnerHTML={{ __html: icon ?? "" }}></div>
            <p>{content}</p>
          </>
        ) : (
          socials?.map((social) => (
            <a
              href={social.socialLink}
              target='_blank'
              rel='noreferrer'
              key={social.id}
              dangerouslySetInnerHTML={{ __html: social.socialIcon }}
              className='social-icon'></a>
          ))
        )}
      </div>
    </div>
  );
};

export default InfoCard;
