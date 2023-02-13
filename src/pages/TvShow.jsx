import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MovieCard from "./MovieCard";
import MovieContainer from "./MovieContainer";

const TvShow = () => {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");
  const [showMovieContainer, setShowMovieContainer] = useState(false);
  const shown = input ? "search" : "discover";
  const url = `https://api.themoviedb.org/3/${shown}/tv`;
  const fetchData = async () => {
    const { data } = await axios.get(url, {
      params: {
        api_key: "5406820cc1d8ad083fab52d6b3c1addd",
        query: input,
      },
    });
    setMovies(data.results);
    console.log(data.results);
  };
  useEffect(() => {
    fetchData();
  }, [input]);
  return (
    <>
      <div className=" relative">
        <Navbar setInput={setInput} />
        <div className=" flex flex-wrap justify-center items-center gap-3 bg-white">
          {movies.map((movie) => {
            return (
              <div className="bg-slate-100  my-3 p-4" key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            );
          })}
          {showMovieContainer ? (
            <MovieContainer setShowMovieContainer={setShowMovieContainer} />
          ) : (
            ""
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TvShow;
