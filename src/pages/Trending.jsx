import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MovieCard from "./MovieCard";
import MovieContainer from "./MovieContainer";

const Trending = () => {
  const [movies, setMovies] = useState([]);
  const [today, setToday] = useState(true);
  const [input, setInput] = useState("");
  const shown = today ? "day" : "week";
  const [showMovieContainer, setShowMovieContainer] = useState(false);

  const url = `https://api.themoviedb.org/3/trending/all/${shown}`;
  const searchUrl = `https://api.themoviedb.org/3/${input}/multi`;
  const fetchData = async () => {
    if (input) {
      const { data } = await axios.get(searchUrl, {
        params: {
          api_key: "5406820cc1d8ad083fab52d6b3c1addd",
          query: input,
        },
      });
      setMovies(data.results);
      console.log(data.results);
    } else {
      const { data } = await axios.get(url, {
        params: {
          api_key: "5406820cc1d8ad083fab52d6b3c1addd",
        },
      });
      setMovies(data.results);
      console.log(data.results);
    }
  };
  useEffect(() => {
    fetchData();
  }, [input, today]);
  const playMovieBtn = (e) => {
    setShowMovieContainer(true);
    e.stopPropagation();
  };
  return (
    <>
      <div className="">
        <Navbar setInput={setInput} />
        <div className=" flex justify-between items-center px-5 py-2">
          <p className=" text-xl "> {today ? "Today" : "This Week"} Trending</p>
          <button
            className=" bg-sky-800 px-4 py-1 rounded w-36 text-white"
            onClick={() => setToday(!today)}
          >
            {today ? "Today" : "This Week"}
          </button>
        </div>
        <div className=" flex flex-wrap justify-center items-center gap-3 bg-white">
          {movies.map((movie) => {
            return (
              <div className="bg-slate-100  my-3 p-4" key={movie.id}>
                <MovieCard movie={movie} playMovieBtn={playMovieBtn} />
              </div>
            );
          })}
        </div>
        {showMovieContainer ? (
          <MovieContainer setShowMovieContainer={setShowMovieContainer} />
        ) : (
          ""
        )}
      </div>
      <Footer />
    </>
  );
};

export default Trending;
