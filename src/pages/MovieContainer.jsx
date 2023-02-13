import axios from "axios";
import React, { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";

const MovieContainer = ({ setShowMovieContainer, movieKey }) => {
 
  return (
    <div className=" flex justify-center items-center w-full h-[80vh] fixed z-30 top-24 right-0">
      <div className=" flex items-center justify-center lg:w-[800px] md:w-[570px] w-[380px] lg:h-[500px] md:h-[460px] h-[230px] bg-slate-300  relative p-5">
        <p className=" text-center">
          <iframe
            // width="720"
            // height="420"
            className=" lg:w-[720px] md:w-[500px] sm:w-[350px] lg:h-[420px] md:h-[370px] sm:h-[330px]"
            src={`https://www.youtube.com/embed/${movieKey}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </p>
        <button
          className=" absolute top-4 right-4 z-40 "
          onClick={() => setShowMovieContainer(false)}
        >
          <GrClose />
        </button>
      </div>
    </div>
  );
};

export default MovieContainer;
