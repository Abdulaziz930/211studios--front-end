import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useAsyncData } from "../../../hooks/useAsyncData";
import { IBlogData } from "../../../models/models";
import moment from "moment";

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [{ data }] = useAsyncData<IBlogData>(`Blog/getBlog/${id}`);
  return (
    <div className='blog-detail-wrapper'>
      <div className='blog-detail-header'>
        <img
          className='img-fluid'
          src={`${process.env.REACT_APP_API_IMAGES}${data?.image}`}
          alt={data?.title}
        />
        <div className='header-title'>
          <div className='container'>
            <div className='title'>
              <h1>{data?.title}</h1>
            </div>
            <div className='footer'>
              <Link
                to={`/blog/author/${data?.appUserDto.id}`}
                className='card-footer-item'>
                <img
                  src={`${process.env.REACT_APP_API_IMAGES}${data?.appUserDto.image}`}
                  alt='author_image'
                />
                <span className='author-name'>{data?.appUserDto.fullName}</span>
              </Link>
              <span className='date card-footer-item'>
                {moment(data?.lastModificationDate).format("L")}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='blog-detail-content'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <div
                className='content'
                dangerouslySetInnerHTML={{ __html: data?.content ?? "" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
