import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-blue-200 font-bold text-green-500">
        Login Page
        <h1>Login Page</h1>
        <button
          className="fixed z-10 mb-[80vh] mr-[10vh] rounded-full border-[5px] border-black bg-gray-600 px-2 py-2 text-center text-black dark:border-white dark:text-white"
          onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </>
  );
}

export default Login;
