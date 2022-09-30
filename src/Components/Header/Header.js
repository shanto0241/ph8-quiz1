import React from "react";
import logo from "../../images/gh-logo.png";
import user from "../../images/student-4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="bg-gray-500">
      <div className="flex justify-between items-center w-10/12 m-auto py-1">
        <img src={logo} alt="" className="w-28 shadow-md" />
        <h1 className="text-5xl text-gray-50 font-mono">guitar Hero.Inc</h1>
        <div className="flex items-center gap-4 py-2">
          <div className="text-end">
            <p className="text-gray-50 text-md tracking-wide font-sans">
              Augusta Zukowich
            </p>
            <div className="text-gray-300 flex items-center gap-2">
              <FontAwesomeIcon className=" w-4" icon={faLocation} />
              <p className="text-sm">inlo, Austria</p>
            </div>
          </div>
          <img
            src={user}
            alt=""
            className="w-14 rounded-xl border border-gray-900 shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
