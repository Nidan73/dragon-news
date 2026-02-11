import React, { use } from "react";
import { NavLink } from "react-router";
const categoryPromise = fetch("/categories.json").then((res) => res.json());
const Category = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h3 className="font-bold">All Category {categories.length}</h3>
      <div className="grid grid-cols-1 gap-3 mt-5">
        {categories.map((category) => (
          <NavLink
            to={`./category/${category.id}`}
            key={category.id}
            className="btn hover:bg-base-200 bg-base-100 border-0"
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Category;
