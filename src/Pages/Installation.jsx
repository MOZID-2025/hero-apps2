import React, { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";
import { PiDownloadSimpleBold } from "react-icons/pi";
import toast, { Toaster } from "react-hot-toast"; // ✅ import toast

const Installation = () => {
  const [installation, setInstallation] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("install"));
    if (saveList) setInstallation(saveList);
  }, []);

  // 🔹 handle uninstall
  const handleUninstall = (id) => {
    const updatedList = installation.filter((app) => app.id !== id);
    setInstallation(updatedList);
    localStorage.setItem("install", JSON.stringify(updatedList));

    // 🔹 show toast
    toast.success("App uninstalled successfully!");
  };

  const sortedItem = (() => {
    if (sortOrder === "size-asc") {
      return [...installation].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "size-dsc") {
      return [...installation].sort((a, b) => b.size - a.size);
    } else {
      return installation;
    }
  })();

  return (
    <div>
      {/* 🔹 Toaster component */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="text-center mt-10">
        <h1 className="font-bold text-3xl mb-5">Your Installed Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="max-w-[1280px] mx-auto flex justify-between mt-10">
        <div>
          <h2 className="font-bold text-xl">
            <span>({sortedItem.length})</span> Apps Found
          </h2>
        </div>

        <div>
          <label className="form-control w-full max-w-xs">
            <select
              className="select select-bordered"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="none">Sort by Size</option>
              <option value="size-asc">Low -&gt; High</option>
              <option value="size-dsc">High -&gt; Low</option>
            </select>
          </label>
        </div>
      </div>

      <div>
        {sortedItem.map((a) => (
          <div
            key={a.id}
            className="max-w-[1280px] mx-auto flex justify-between items-center card card-side bg-base-100 shadow-sm border my-4"
          >
            <div className="flex items-center">
              <div>
                <img className="w-40 h-40" src={a.image} alt={a.title} />
              </div>
              <div>
                <h2 className="card-title mb-4">{a.title}</h2>
                <div className="flex justify-center items-center">
                  <div className="text-[#00D390] flex items-center">
                    <PiDownloadSimpleBold className="mr-2" />
                    <p className="mr-4">{a.downloads}M</p>
                  </div>
                  <div className="text-[#FF8811] flex items-center">
                    <IoStar className="mr-2" />
                    <p className="mr-4">{a.ratingAvg}</p>
                  </div>
                  <div className="flex items-center">
                    <p>{a.size} MB</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-body">
              <div className="card-actions justify-end">
                <button
                  className="btn btn-success text-white"
                  onClick={() => handleUninstall(a.id)}
                >
                  Uninstall
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
