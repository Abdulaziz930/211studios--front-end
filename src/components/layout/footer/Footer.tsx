import React from "react";
import { Link } from "react-router-dom";
import { useAsyncData } from "../../../hooks/useAsyncData";
import {
  IFooterDescriptionData,
  ISocialMediaData,
} from "../../../models/models";
import { APP_ROUTES } from "../../../routes/consts";

const Footer: React.FC = () => {
  const [footerDescription] =
    useAsyncData<IFooterDescriptionData>("Bio/getFooterBio");
  const [socialMedias] = useAsyncData<ISocialMediaData[]>(
    "Social/getSocialMedias"
  );

  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='footer-bio'>
              <div className='logo-box'>
                <Link to={APP_ROUTES.Home.PATH}>
                  <img
                    src='http://localhost:3000/images/211logo.png'
                    alt='footer-logo'
                    className='img-fluid'
                  />
                </Link>
              </div>
              <div className='description'>
                <p>{footerDescription.data?.footerDescription}</p>
              </div>
              <div className='social-medias'>
                {socialMedias.data?.map((social) => (
                  <a
                    href={social.socialLink}
                    target='_blank'
                    rel='noreferrer'
                    key={social.id}
                    dangerouslySetInnerHTML={{ __html: social.socialIcon }}></a>
                ))}
              </div>
            </div>
          </div>
          <div className='col-md-8'>
            <div className='footer-pages'>
              <h2>Company</h2>
              <ul>
                <li>
                  <Link to={APP_ROUTES.GAME.PATH}>
                    <i className='fas fa-angle-right'></i> Our Games
                  </Link>
                </li>
                <li>
                  <Link to={APP_ROUTES.STUDIO.PATH}>
                    <i className='fas fa-angle-right'></i> Our Studios
                  </Link>
                </li>
                <li>
                  <Link to={APP_ROUTES.BLOG.PATH}>
                    <i className='fas fa-angle-right'></i> Blog
                  </Link>
                </li>
                <li>
                  <Link to={APP_ROUTES.CONTACT.PATH}>
                    <i className='fas fa-angle-right'></i> Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='copy-right'>
              <p>All Rights Reserved. Designed & Developed by 211 Studios</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
