import React from "react";
import { Link } from "react-router-dom";
import { ICategory } from "../../models/models";

interface IProps {
  category: ICategory;
}

const CategoryButton: React.FC<IProps> = ({ category }) => {
  return (
    <Link to={`categories/${category.id}`} className='btn category-btn'>
      {category.name}
    </Link>
  );
};

export default CategoryButton;
