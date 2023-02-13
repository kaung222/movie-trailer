import React from "react";
import Hulk from "./Hulk.png";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";

const Profile = ({ setShowProfile }) => {
  return (
    <div>
      <div className=" w-[300px] absolute top-0 right-0  bg-slate-300 z-40 p-3 h-screen">
        <div className=" relative items-center justify-center  flex-col flex  gap-5 ">
          <img
            src={Hulk}
            alt=""
            width={100}
            className=" border-b-2 border-sky-800 "
          />
          <h3 className=" text-2xl text-sky-800">James Marcus</h3>
          <h2 className="text-lg ">Favorite Movies</h2>
          <div className="flex flex-wrap gap-1">
            <span className=" p-2 hover:underline">Hulk</span>

            <span className=" p-2 hover:underline">Spider Man</span>
            <span className=" p-2 hover:underline">Thanos</span>
          </div>
          <h2 className=" text-left"> Uploaded Images</h2>
          <div className=" flex flex-wrap  gap-2">
            <img src={Hulk} alt="" width={100} />
          </div>
          <button
            className=" absolute top-1 left-1"
            onClick={() => setShowProfile(false)}
          >
            <GrClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
