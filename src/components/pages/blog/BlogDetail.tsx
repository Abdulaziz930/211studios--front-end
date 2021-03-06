import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useAsyncData } from "../../../hooks/useAsyncData";
import { IBlogData } from "../../../models/models";
import moment from "moment";
import { FileTypes } from "../../../utils/consts";
import { useFireBaseStorageUrl } from "../../../hooks/useFireBaseStorageUrl";

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [{ data }] = useAsyncData<IBlogData>(`Blog/getBlog/${id}`);
  const imageUrl = useFireBaseStorageUrl(data?.image ?? "", FileTypes.Image);
  const authorImageUrl = useFireBaseStorageUrl(
    data?.appUserDto.image ?? "",
    FileTypes.Image
  );
  return (
    <div className='blog-detail-wrapper'>
      <div className='blog-detail-header'>
        {imageUrl !== "" ? (
          <img className='img-fluid' src={imageUrl} alt={data?.title} />
        ) : (
          <div style={{ height: "350px", backgroundColor: "#03090d" }}></div>
        )}
        <div className='header-title'>
          <div className='container'>
            <div className='title'>
              <h1>{data?.title}</h1>
            </div>
            <div className='footer'>
              <Link
                to={`/blog/author/${data?.appUserDto.id}`}
                className='card-footer-item'>
                {authorImageUrl !== "" ? (
                  <img src={authorImageUrl} alt='author_image' />
                ) : (
                  <div
                    style={{
                      height: "30px",
                      width: "30px",
                      backgroundColor: "#03090d",
                    }}></div>
                )}
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
