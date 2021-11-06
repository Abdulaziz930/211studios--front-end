import React from "react";
import { useParams } from "react-router";
import { useAsyncData } from "../../../hooks/useAsyncData";
import {
  ITeamMemberBannerData,
  ITeamMemberDetailData,
} from "../../../models/models";
import Banner from "../../common/Banner";

const TeamMemberDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [{ data }] = useAsyncData<ITeamMemberDetailData>(
    `TeamMember/getTeamMemberDetail/${id}`
  );
  const [banner] = useAsyncData<ITeamMemberBannerData>(
    "TeamMember/getTeamMemberDetailBanner"
  );
  return (
    <div className='team-member-detail-wrapper'>
      <Banner
        title={banner.data?.title}
        description={banner.data?.description}
        image={banner.data?.image}
      />
      <div className='team-member-detail-content-wrapper'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='imgBox'>
                <img
                  src={`${process.env.REACT_APP_API_IMAGES}${data?.image}`}
                  className='img-fluid'
                  alt='teamMemberImage'
                />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='team-member-detail-content'>
                <div className='fullname'>
                  <h1>{data?.fullName}</h1>
                </div>
                <div className='position'>
                  <h4>{data?.position}</h4>
                </div>
                <div className='description'>
                  <p>{data?.description}</p>
                </div>
                <div className='social-medias'>
                  {data?.userSocialMediasDto.map((socialMedia) => (
                    <a
                      href={socialMedia.link}
                      target='_blank'
                      rel='noreferrer'
                      dangerouslySetInnerHTML={{
                        __html: socialMedia.icon,
                      }}></a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberDetail;
