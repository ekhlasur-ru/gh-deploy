import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

function Nopage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gray-100">
        <div className="flex h-screen flex-col items-center justify-center">
          <h1 className="text-8xl font-bold text-gray-800">404</h1>
          <p className="text-4xl font-medium text-gray-800">Page Not Found</p>
          <button
            onClick={() => {
              navigate("/");
            }}
            className="mt-4 text-xl text-blue-600 hover:underline">
            Go Back to Home
          </button>
          <button
            className="my-4 flex rounded-lg hover:bg-red-600 items-center bg-red-500 px-4 text-xl font-semibold text-black dark:text-white"
            onClick={() => navigate(-1)}>
            <IoIosArrowBack className="text-[30px]" />
            Go Back
          </button>
        </div>
      </div>
    </>
  );
}

export default Nopage;
