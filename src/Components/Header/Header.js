import React from "react";
import logo from "../../images/gh-logo.png";

const Header = () => {
  return (
    <div className="bg-gray-500">
      <div className="flex justify-between items-center w-10/12 m-auto py-4">
        <img src={logo} alt="" className="w-16 shadow-md" />
        <h1 className="text-cyan-100 text-2xl text-semibold">
          welcome to the show hero...\m/
        </h1>
      </div>
    </div>
  );
};

export default Header;
