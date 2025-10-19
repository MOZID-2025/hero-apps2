import React from "react";
import { Link, useRouteError } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import errorImg from "../assets/OBJECTS.png";
const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <div className="mt-10">
        <img className="mx-auto" src={errorImg} alt="" />
      </div>
      <div className="text-center mt-10 mb-10">
        <h2 className="text-3xl font-bold mb-4">Oops, page not found!</h2>
        <p className="mb-8">The page you are looking for is not available.</p>
        <Link to={"/"}>
          {" "}
          <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
            Go Back!
          </button>
        </Link>
      </div>

      <div>{error.message}</div>
      <Footer />
    </>
  );
};

export default ErrorPage;
