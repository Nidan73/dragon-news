import React, { useEffect, useState } from "react";
import Rightaside from "../Components/HomeLayouts/Rightaside";
import NavBar from "../Components/NavBar";
import { useLoaderData, useParams } from "react-router";
import SingleNews from "../Components/SingleNews";

const NewsdetailsLayout = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [newData, setNewData] = useState([]);
  useEffect(() => {
    const singleNews = data.filter((news) => news.id == id);
    console.log(singleNews);
    setNewData(singleNews);
  }, [id, data]);

  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <main className="grid grid-cols-12">
        <section className="col-span-9">
          <div>
            {newData.map((newData) => (
              <SingleNews newData={newData} key={newData.id}></SingleNews>
            ))}
          </div>
        </section>
        <aside className="col-span-3">
          <Rightaside></Rightaside>
        </aside>
      </main>
    </div>
  );
};

export default NewsdetailsLayout;
