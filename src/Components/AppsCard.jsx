import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const AppsCard = ({ app }) => {
  const { title, image, ratingAvg, downloads, id } = app;
  return (
    <Link to={`/app/${id}`}>
      <div className="card bg-base-100 border shadow-sm hover:scale-105 transition ease-in-out">
        <div className="h-60 overflow-hidden p-4">
          <img className="w-full object-cover" src={image} alt="Shoes" />
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <div className="">
            <div className="flex justify-between w-full">
              <span className="bg-[#F1F5E8] py-2  px-4 rounded-xl font-bold flex gap-3 items-center text-[#00D390]">
                <FaDownload />
                {downloads} M
              </span>
              <span className="bg-[#FFF0E1] py-2  px-4 rounded-xl font-bold flex gap-3 items-center text-[#FF8811]">
                <FaStar />
                {ratingAvg}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppsCard;
