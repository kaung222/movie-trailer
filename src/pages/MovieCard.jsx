import React, { useState, useEffect } from "react";
import noImage from "../components/noImage.jpg";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import MovieContainer from "./MovieContainer";
import axios from "axios";

const MovieCard = ({ movie }) => {
  const [showMovieContainer, setShowMovieContainer] = useState(false);
  const [movieKey, setMovieKey] = useState("");
  const [toggle, setToggle] = useState(false);
  const imageUrl = "https://image.tmdb.org/t/p/original";
  const movieId = movie.id;
  const playMovieBtn = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowMovieContainer(true);
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
    const { data } = await axios.get(url, {
      params: {
        api_key: "5406820cc1d8ad083fab52d6b3c1addd",
      },
    });
    const selectedTrailer = data.results.filter(
      (trailer) =>
        trailer.type == "Trailer" || trailer.name == "Official Trailer"
    );
    setMovieKey(selectedTrailer[0].key);
  };

  return (
    <div className="">
      <Link to={`/movie/detail/${movie.id}`} state={{ movie }}>
        <div className="flex w-[300px] flex-col hover:scale-105 transition duration-100 items-center relative">
          <img
            src={
              movie.poster_path ? `${imageUrl}${movie.poster_path}` : noImage
            }
            alt="movie_poster"
            width={220}
            onMouseEnter={() => setToggle(true)}
            onMouseLeave={() => setToggle(false)}
          />
          {/* <p className={movie.title.length > 25 ? "text-base" : "text-xl"}> */}
          {movie.name ? (
            <p className="my-3">{movie.name}</p>
          ) : (
            <p className="my-3">
              {movie.title.substring(0, 24)}
              {movie.title.length > 24 && "..."}
            </p>
          )}
          {/* {toggle && ( */}
            <button
              className=" absolute items-center top-44 z-10 "
              onClick={(e) => playMovieBtn(e)}
            >
              <AiOutlinePlayCircle className="text-sky-500 text-3xl" />
            </button>
          {/* )} */}
        </div>
      </Link>
      {showMovieContainer ? (
        <MovieContainer
          setShowMovieContainer={setShowMovieContainer}
          movieKey={movieKey}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default MovieCard;
