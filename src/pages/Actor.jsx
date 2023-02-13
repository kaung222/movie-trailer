import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MovieCard from "./MovieCard";

const Actor = () => {
  const { id } = useParams();
  const [actor, setActor] = useState({});
  const [movies, setMovies] = useState([]);
  console.log(id);
  const url = `https://api.themoviedb.org/3/person/${id}?api_key=5406820cc1d8ad083fab52d6b3c1addd`;
  const crdUrl = `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=5406820cc1d8ad083fab52d6b3c1addd`;

  const getActor = async () => {
    const { data } = await axios.get(url);
    console.log(data);
    setActor(data);
  };
  const getCrd = async () => {
    const { data } = await axios.get(crdUrl);
    console.log(data.crew);
    setMovies(data.crew);
  };
  useEffect(() => {
    getActor();
    getCrd();
  }, []);
  return (
    <>
      <Navbar />
      <div className="">
        <div className=" mt-5 flex-col flex justify-center items-center px-7">
          <img
            src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
            alt=""
            className="w-[200px]"
          />

          <p className=" text-xl my-4">{actor.name}</p>
          <p>{actor.biography}</p>
          <p>DOB :{actor.birthday} </p>
          <p>Home Town : {actor.place_of_birth}</p>
          <p>Gender : {actor.gender == 2 && "Male"}</p>
        </div>
      </div>
      <div className=" p-9">
        <h1 className=" text-2xl my-5">
          Movies of <span className="text-sky-700">{actor.name}</span>
        </h1>
        <div className=" flex overflow-x-auto min-w-full min-h-[100px] gap-3 bg-white">
          {movies.length == 0 ? (
            <p className=" text-center">No video Available!</p>
          ) : (
            movies.map((movie) => {
              return (
                <div className="bg-slate-100 my-3 p-4" key={movie.id}>
                  <MovieCard movie={movie} />
                </div>
              );
            })
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Actor;
