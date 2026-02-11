import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import NavBar from "../Components/NavBar";
import Leftaside from "../Components/HomeLayouts/Leftaside";
import Rightaside from "../Components/HomeLayouts/Rightaside";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto">
          <NavBar></NavBar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-3 grid grid-cols-12">
        <aside className="col-span-3">
          <Leftaside></Leftaside>
        </aside>
        <section className=" col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <Rightaside></Rightaside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
