import React, { useState } from "react";
import AppsCard from "../Components/AppsCard";
import useApps from "../Hooks/useApps";

const Apps = () => {
  const { apps } = useApps();
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;

  return (
    <div>
      <div className="text-center py-8">
        <h2 className="font-bold text-4xl mb-4">Trending Apps</h2>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="max-w-[1280px] mx-auto flex justify-between">
        <h2 className="font-bold text-xl">
          <span>({searchedApps.length})</span> Apps Found
        </h2>
        <label className="input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
          />
        </label>
      </div>

      {searchedApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-[1280px] mx-auto gap-8 py-4">
          {searchedApps.map((app) => (
            <AppsCard key={app.id} app={app}></AppsCard>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-xl text-gray-500">
          No apps found.
        </div>
      )}
    </div>
  );
};

export default Apps;
