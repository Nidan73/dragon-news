import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import News from "../Components/News";

const CategoryNews = () => {
  const { id } = useParams();
  const newsData = useLoaderData();
  console.log(newsData);
  const [news, setNews] = useState([]);
  useEffect(() => {
    if (id == "0") {
      return setNews(newsData);
    } else if (id == "1") {
      const filteredNews = newsData.filter(
        (news) => news.others.is_trending === true,
      );
      setNews(filteredNews);
    } else {
      const filteredNews = newsData.filter((news) => news.category_id == id);
      setNews(filteredNews);
    }
  }, [id, newsData]);

  return (
    <div className="">
      Category News {news.length}
      <div className="mt-3 grid grid-cols-1 my-4 p-3 gap-5">
        {news.map((news) => (
          <News key={news.id} news={news}></News>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
