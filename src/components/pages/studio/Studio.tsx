import React from "react";
import { useAsyncData } from "../../../hooks/useAsyncData";
import { IStudioPageData, ITeamMemberData } from "../../../models/models";
import Banner from "../../common/Banner";
import CSS from "csstype";
import TeamMemberCard from "./TeamMemberCard";
import { useFireBaseStorageUrl } from "../../../hooks/useFireBaseStorageUrl";
import { FileTypes } from "../../../utils/consts";

const Studio: React.FC = () => {
  const [{ data }] = useAsyncData<IStudioPageData>("Studio/getStudio");
  const [teamMembers] = useAsyncData<ITeamMemberData[]>(
    "TeamMember/getTeamMembers"
  );
  const imageUrl = useFireBaseStorageUrl(data?.image ?? "", FileTypes.Image);

  const sectionStyles: CSS.Properties = {
    backgroundImage: window.innerWidth < 768 ? "none" : `url(${imageUrl})`,
    backgroundPosition:
      window.innerWidth >= 768 && window.innerWidth < 1024
        ? "center center"
        : "bottom center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% auto",
  };
  return (
    <div className='studio-wrapper'>
      <Banner
        title={data?.bannerTitle}
        description={data?.bannerDescription}
        image={data?.bannerImage}
      />
      <div className='studio-content' style={sectionStyles}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5'>
              <div className='content-title'>
                <h1>{data?.title}</h1>
              </div>
              <div
                className='content-description'
                dangerouslySetInnerHTML={{
                  __html: data?.description ? data.description : "",
                }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className='team-members-content'>
        <div className='container'>
          <div className='team-members-content-header'>
            <h2 className='section-heading'>MEET THE TEAM</h2>
          </div>
          <div className='row'>
            {teamMembers?.data?.map((teamMember) => (
              <div className='col-md-4' key={teamMember.id}>
                <TeamMemberCard
                  id={teamMember.id}
                  fullName={teamMember.fullName}
                  position={teamMember.position}
                  image={teamMember.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;
