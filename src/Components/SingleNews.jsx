import React from "react";
import { Link } from "react-router";

const SingleNews = ({ newData }) => {
  const { category_id, title, image_url, details } = newData;

  return (
    <div className="bg-white mx-8 p-10 rounded-md overflow-hidden shadow-sm">
      {/* Image */}
      <img
        src={image_url}
        alt={title}
        className="w-full h-[400px] object-cover"
      />

      <div className="p-6">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>

        {/* Meta text */}
        <p className="text-sm text-gray-500 mb-4">
          {new Date(newData.author?.published_date).toDateString()} | Tags:{" "}
          {newData.tags?.join(", ")}
        </p>

        {/* Details */}
        <p className="text-gray-600 leading-7 text-justify">{details}</p>

        {/* Button */}
        <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition">
          <Link to={`/category/${category_id}`}>
            ← All news in this category
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SingleNews;
