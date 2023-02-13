import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GrClose } from "react-icons/gr";

const SideBar = ({ setSidebar }) => {
  return (
    <div>
      <div className=" w-[300px] absolute top-0 left-0  bg-slate-300 z-40 p-3 h-screen">
        <div className=" relative items-center justify-center  flex-col flex  gap-5 ">
          <p className="text-[25px] font-simibold text-sky-500 px-5 my-8">M</p>
          <NavLink to="/">
            <span className=" text-lg">MOVIES</span>
          </NavLink>
          <NavLink to="/tv-show">
            <span className=" text-lg">TV SHOWS</span>
          </NavLink>
          <NavLink to="/trending">
            <span className=" text-lg">TRENDING</span>
          </NavLink>
          <button
            onClick={() => setSidebar(false)}
            className=" absolute top-2 right-2"
          >
            <GrClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
