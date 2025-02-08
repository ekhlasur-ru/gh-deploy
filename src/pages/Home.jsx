import React, { useState } from "react";

function Home() {
  const [bgColor, setBgColor] = useState("bg-blue-200");

  const toggleColor = () => {
    setBgColor(bgColor === "bg-blue-200" ? "bg-green-200" : "bg-blue-200");
  };

  return (
    <>
      <div className={`flex h-screen w-full items-center justify-center ${bgColor} text-8xl font-bold text-green-500 shadow-lg`}>
        Home Page
      </div>
      <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleColor}
          className="px-4 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition-all">
          Toggle Background
        </button>
      </div>
    </>
  );
}

export default Home;
