import React from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

export default function Categories() {
  const navigate = useNavigate();
  const allCategories = useSelector((state) => state.categories.allCategories);

  return (
    <div>
      <h1 className="text-title2 font-semibold mb-4 px-4 pb-6">Categories</h1>
      <div className="grid grid-cols-4 gap-6 p-4">
        {allCategories.map((category) => (
          <div
            key={category}
            onClick={() => navigate(`/categories/${category}`)}
            className={`capitalize ${
              category === "men's clothing" && "bg-green-500/[.60]"
            } ${category === "women's clothing" && "bg-red-500/[.60]"} ${
              category === "jewelery" && "bg-blue-500/[.60]"
            } ${
              category === "electronics" && "bg-black/[.60]"
            } py-10 px-4 text-center font-primary text-title2 text-white rounded-md hover:cursor-pointer`}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}
