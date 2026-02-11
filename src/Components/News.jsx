// src/components/News.jsx
import React from "react";
import { FaRegBookmark, FaShareAlt, FaEye, FaStar } from "react-icons/fa";
import { format } from "date-fns";

const News = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, tags, details } =
    news;

  const published = author?.published_date
    ? format(new Date(author.published_date), "yyyy-MM-dd")
    : "—";

  const shortDetails =
    details?.length > 170 ? details.slice(0, 170) + "..." : details;

  const ratingNumber = Number(rating?.number || 0);

  return (
    <div className="card bg-base-100 shadow-md border border-base-200 rounded-xl">
      {/* Header */}
      <div className="flex items-start justify-between p-4 bg-base-200 rounded-t-xl">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author?.img} alt={author?.name || "Author"} />
            </div>
          </div>

          <div className="leading-tight">
            <h3 className="font-semibold">{author?.name || "Unknown"}</h3>
            <p className="text-sm opacity-70">{published}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="btn btn-ghost btn-sm">
            <FaRegBookmark className="text-lg" />
          </button>
          <button className="btn btn-ghost btn-sm">
            <FaShareAlt className="text-lg" />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="card-body p-4">
        <h2 className="card-title text-xl leading-snug">{title}</h2>

        {/* Badge (trending, etc.) */}
        {rating?.badge && (
          <div className="mt-1">
            <span className="badge badge-warning capitalize">
              {rating.badge}
            </span>
          </div>
        )}

        {/* Image */}
        <figure className="mt-3">
          <img
            className="w-full h-56 object-cover rounded-lg"
            src={thumbnail_url}
            alt={title}
          />
        </figure>

        {/* Meta / Tags */}
        <div className="mt-3 text-sm opacity-70">
          {tags?.length ? (
            <p>
              Tag Cloud Tags:{" "}
              {tags.map((t, idx) => (
                <span key={t} className="capitalize">
                  {t}
                  {idx !== tags.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
          ) : null}
        </div>

        {/* Details */}
        <p className="mt-2 text-sm">{shortDetails}</p>

        <button className="btn btn-link px-0 text-error w-fit">
          Read More
        </button>

        <div className="divider my-2" />

        {/* Footer row */}
        <div className="flex items-center justify-between">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < ratingNumber ? "text-warning" : "text-base-300"
                  }
                />
              ))}
            </div>
            <span className="font-semibold">{ratingNumber.toFixed(1)}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 opacity-80">
            <FaEye />
            <span className="font-medium">{total_view ?? 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
