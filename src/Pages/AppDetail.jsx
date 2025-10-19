import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import { RiDownload2Line } from "react-icons/ri";
import like from ".././assets/like.png";
import star from ".././assets/star.png";
import useApps from "../../../hero-apps1/src/Hooks/useApp";
import RatingChart from "../Components/RatingChart";

const AppDetail = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const app = apps.find((a) => String(a.id) === id);

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const existingList = JSON.parse(localStorage.getItem("install")) || [];
    const alreadyInstalled = existingList.some((item) => item.id === app?.id);
    if (alreadyInstalled) setIsInstalled(true);
  }, [app]);

  if (loading) return <p>Loading...</p>;
  const {
    image,
    title,
    downloads,
    ratingAvg,
    companyName,
    reviews,
    size,
    description,
  } = app || {};

  const handleAddToInstall = (e) => {
    e.preventDefault();
    if (isInstalled) return;

    const existingList = JSON.parse(localStorage.getItem("install")) || [];
    const alreadyInstalled = existingList.some((item) => item.id === app.id);

    if (!alreadyInstalled) {
      const updatedList = [...existingList, app];
      localStorage.setItem("install", JSON.stringify(updatedList));
      setIsInstalled(true);
    }
  };

  return (
    <div className="max-w-[1280px] mx-auto mt-10">
      <div className="flex flex-wrap items-start gap-8">
        <div>
          <img
            className="h-80 w-80 object-cover rounded-xl"
            src={image}
            alt={title}
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <Link>
            <p className="mb-6 mt-3 text-gray-500">
              Developed by: {companyName}
            </p>
          </Link>
          <hr />
          <div className="flex mt-10 gap-20">
            <div>
              <RiDownload2Line className="text-4xl" />
              <p>Downloads</p>
              <h2 className="font-bold text-2xl">{downloads} M</h2>
            </div>
            <div>
              <img src={star} alt="rating" className="w-8" />
              <p>Rating</p>
              <h2 className="font-bold text-2xl">{ratingAvg}</h2>
            </div>
            <div>
              <img src={like} alt="reviews" className="w-8" />
              <p>Reviews</p>
              <h2 className="font-bold text-2xl">{reviews} K</h2>
            </div>
          </div>

          <div>
            <button
              onClick={handleAddToInstall}
              className={`inline-block mt-10 px-6 py-3 rounded-md text-white font-bold bg-[#00D390] transition ${
                isInstalled
                  ? "opacity-70 cursor-not-allowed pointer-events-none"
                  : "hover:bg-[#00b87b]"
              }`}
            >
              {isInstalled ? "Installed" : `Install Now (${size}MB)`}
            </button>
          </div>
        </div>
      </div>
      <RatingChart ratings={app?.ratings} />

      <div className="m-10">
        <h2 className="text-2xl font-bold">Description</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetail;
