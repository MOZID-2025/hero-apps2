import React from "react";
import playstore from ".././assets/playstore.png";
import appstore from ".././assets/app-store.png";
import hero from ".././assets/hero.png";
import { Link } from "react-router";
import useApps from "../Hooks/useApps";
import AppsCard from "../Components/AppsCard";
const Home = () => {
  const { apps } = useApps();
  const featuresApp = apps.slice(0, 8);

  return (
    <div className="bg-[#F5F5F5] py-12">
      <div className="text-center">
        <h2 className="font-extrabold text-5xl inter-font">
          We Build <br />{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
            Productive
          </span>{" "}
          Apps
        </h2>
        <p className="text-[#627382] mt-10">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
      </div>
      <div className="flex gap-3 items-center justify-center mt-8">
        <button className="btn">
          <img src={playstore} alt="" /> Google Play
        </button>
        <button className="btn">
          {" "}
          <img src={appstore} alt="" />
          App Store
        </button>
      </div>
      <div className="">
        <img className="mx-auto mt-6" src={hero} alt="" />
      </div>

      <section className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-20 text-white text-center inter-font">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Trusted By Millions, Built For You
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-sm uppercase opacity-80 mb-1">Total Downloads</p>
            <h3 className="text-5xl font-bold">29.6M</h3>
            <p className="text-sm text-gray-200 mt-1">
              21% More Than Last Month
            </p>
          </div>

          <div>
            <p className="text-sm uppercase opacity-80 mb-1">Total Reviews</p>
            <h3 className="text-5xl font-bold">906K</h3>
            <p className="text-sm text-gray-200 mt-1">
              46% More Than Last Month
            </p>
          </div>

          <div>
            <p className="text-sm uppercase opacity-80 mb-1">Active Apps</p>
            <h3 className="text-5xl font-bold">132+</h3>
            <p className="text-sm text-gray-200 mt-1">31 More Will Launch</p>
          </div>
        </div>
      </section>

      <div>
        <div className="text-center py-8">
          <h2 className="font-bold text-4xl mb-4">Trending Apps</h2>
          <p>Explore All Trending Apps on the Market developed by us</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-[1280px] mx-auto gap-8 py-4">
          {featuresApp.map((app) => (
            <AppsCard key={app.id} app={app}></AppsCard>
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            to="/apps"
            className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-8"
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
