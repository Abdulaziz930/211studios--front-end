import React from "react";
import { ICategory } from "../../models/models";

interface IProps {
  category: ICategory;
}

const CategoryButton: React.FC<IProps> = ({ category }) => {
  return <p className='btn category-btn'>{category.name}</p>;
};

export default CategoryButton;
