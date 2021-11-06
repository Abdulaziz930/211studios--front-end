import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

interface IAuthorData {
  id: string;
  fullName: string;
  position?: string;
  image: string;
}

interface IProps {
  id: number;
  title: string;
  content: string;
  image: string;
  lastModificationDate: string;
  author: IAuthorData;
}

const BlogCard: React.FC<IProps> = ({
  title,
  content,
  image,
  lastModificationDate,
  author,
  id,
}) => {
  return (
    <div className='blog-card-wrapper'>
      <div className='card'>
        <Link to={`/blog/${id}`}>
          <img
            src={`${process.env.REACT_APP_API_IMAGES}${image}`}
            alt='blog_image'
            className='card-img-top img-fluid'
          />
        </Link>
        <div className='card-body'>
          <h2 className='card-title'>
            <Link to={`/blog/${id}`} className='card-footer-item'>
              {title}
            </Link>
          </h2>
          <p
            className='card-text'
            dangerouslySetInnerHTML={{
              __html: content.slice(0, 190),
            }}></p>
        </div>
        <div className='card-footer'>
          <Link to={`/blog/author/${author.id}`} className='card-footer-item'>
            <img
              src={`${process.env.REACT_APP_API_IMAGES}${author.image}`}
              alt='author_image'
            />
            <span className='author-name'>{author.fullName}</span>
          </Link>
          <span className='date card-footer-item'>
            {moment(lastModificationDate).format("L")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
