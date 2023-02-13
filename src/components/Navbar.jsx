import React from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { debounce } from "lodash";
import Profile from "./Profile";
import Hulk from "./Hulk.png";
import SideBar from "./SideBar";

const Navbar = ({ setInput }) => {
  const [toggle, setToggle] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [sideBar, setSidebar] = useState(false);

  const onClickHandler = () => {
    setToggle(!toggle);
    // input.focus();
  };
  window.addEventListener("scroll", () => {
    setShowProfile(false);
  });

  return (
    <div className=" relative">
      <div className=" bg-slate-100 text-slate-500 flex justify-between h-[56px] items-center py-2">
        <div className=" flex justify-between items-center gap-10">
          <h1
            className="text-[25px] font-simibold text-sky-500 px-5"
            onClick={() => setSidebar(!sideBar)}
          >
            M
          </h1>

          <div className=" sm:flex justify-between hidden items-center gap-3">
            <NavLink to="/">
              <span className=" text-lg">MOVIES</span>
            </NavLink>
            <NavLink to="/tv-show">
              <span className=" text-lg">TV SHOWS</span>
            </NavLink>
            <NavLink to="/trending">
              <span className=" text-lg">TRENDING</span>
            </NavLink>
            {/* <NavLink to="/pricing">
              <span className=" text-lg">PRICING</span>
            </NavLink> */}
          </div>
        </div>
        <div
          className={`bg-white flex ${
            toggle && "px-5 py-2"
          } justify-center items-center rounded-full `}
        >
          {toggle && (
            <input
              type="text"
              onChange={debounce((e) => setInput(e.target.value), 1000)}
              placeholder="Seach"
              className="outline-none text-slate-900"
            />
          )}
          <button
            className="text-slate-900 outline-none p-1"
            onClick={onClickHandler}
          >
            <BsSearch />
          </button>
        </div>
        <div
          className="px-5 cursor-pointer"
          onClick={() => setShowProfile(true)}
        >
          <img
            src={Hulk}
            className="w-[25px] h-[25px] border-2 border-blue-400 rounded-full"
            alt="profile"
          />
        </div>
      </div>
      {showProfile ? <Profile setShowProfile={setShowProfile} /> : ""}
      {sideBar ? <SideBar setSidebar={setSidebar} /> : ""}
    </div>
  );
};

export default Navbar;
