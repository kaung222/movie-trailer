import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import MovieContainer from "./MovieContainer";
import MovieCard from "./MovieCard";
import Actors from "../components/Actors";
import Footer from "../components/Footer";

const MovieDetail = () => {
  const location = useLocation();
  const [showMovieContainer, setShowMovieContainer] = useState(false);
  const [relatedMovies, setRelatedMoives] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [selelectedMovie, setMovie] = useState([]);
  const [toggle, setToggle] = useState(false);
  const movie = location.state.movie;
  console.log(movie);

  const movieType = movie.first_air_date ? "tv" : "movie";
  const getRelatedMovies = async () => {
    // const id = movie.id;
    const url = `https://api.themoviedb.org/3/${movieType}/${movie.id}/recommendations`;
    const { data } = await axios.get(url, {
      params: {
        api_key: "5406820cc1d8ad083fab52d6b3c1addd",
      },
    });
    setRelatedMoives(data.results);
  };
  const getMoiveData = async () => {
    const url_movieData = `https://api.themoviedb.org/3/${movieType}/${movie.id}`;
    const { data } = await axios.get(url_movieData, {
      params: {
        api_key: "5406820cc1d8ad083fab52d6b3c1addd",
      },
    });
    setMovie(data);
    console.log(data.genres[0].name);
  };
  const getSimilarMovies = async () => {
    // const id = movie.id;
    const url_similar = `https://api.themoviedb.org/3/${movieType}/${movie.id}/similar`;
    const { data } = await axios.get(url_similar, {
      params: {
        api_key: "5406820cc1d8ad083fab52d6b3c1addd",
      },
    });
    setSimilarMovies(data.results);
  };

  useEffect(() => {
    getRelatedMovies();
    getMoiveData();
    getSimilarMovies();
  }, [movie]);
  return (
    <>
      <Navbar />
      <div className="w-full h-auto  flex items-center justify-center relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${selelectedMovie.backdrop_path}`}
          alt=""
          className="absolute w-full object-cover h-full z-0 top-0 left-0"
        />
        <div className=" w-[1000px] p-5 px-[150px] mt-[100px] bg-slate-200 bg-transparent rounded-lg z-10">
          <div className=" flex justify-between items-center">
            <h1 className="text-xl my-3 text-sky-600">
              {selelectedMovie.original_title
                ? selelectedMovie.original_title
                : selelectedMovie.name}
            </h1>
            <div className=" text-white">
              <Link to="/">
                <span> Movie </span>
              </Link>
              / <span> Detail </span> /
              <span onMouseOver={() => setToggle(!toggle)}> ...</span>
              <p className={` ${toggle ? "flex" : "hidden"}`}>
                {selelectedMovie.name}
              </p>
            </div>
          </div>
          <div className="flex items-center sm:flex-row flex-col justify-center gap-5">
            <img
              src={`https://image.tmdb.org/t/p/w500${selelectedMovie.poster_path}`}
              alt=""
              className=" rounded-lg"
              width={300}
            />
            <div className=" flex-col gap-6 w-[300px] flex">
              <div className="flex flex-wrap gap-2">
                {selelectedMovie?.genres?.map((genre) => {
                  return (
                    <p
                      key={genre?.id}
                      className=" bg-white px-5 text-slate-400 py-1 rounded-full"
                    >
                      {genre?.name}
                    </p>
                  );
                })}
              </div>

              <p className=" text-slate-200">
                {selelectedMovie.overview
                  ? selelectedMovie.overview
                  : "No overview avaiable!"}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className=" bg-white px-5 text-slate-400 py-1 rounded-full">
                  Popularity : {selelectedMovie.popularity}
                </span>
                <span className=" bg-white px-5 text-slate-400 py-1 rounded-full">
                  {selelectedMovie.release_date}
                </span>
                <span className=" bg-white px-5 text-slate-400 py-1 rounded-full">
                  Invest : ${selelectedMovie.budget}
                </span>
                <span className=" bg-white px-5 text-slate-400 py-1 rounded-full">
                  Profit : ${selelectedMovie.revenue}
                </span>
              </div>

              <button
                className=" bg-sky-800 px-3 py-2 text-white"
                onClick={() => watchMovie(movie.id)}
              >
                Watch Movie Now
              </button>
            </div>
          </div>
          <Actors movie={movie} />
        </div>
      </div>
      {showMovieContainer ? (
        <MovieContainer setShowMovieContainer={setShowMovieContainer} />
      ) : (
        ""
      )}
      {relatedMovies.length > 0 ? (
        <div className=" px-5 mt-10">
          <h1 className=" text-2xl">Related Movies</h1>
          <div className=" flex overflow-x-auto gap-3 bg-white">
            {relatedMovies.map((movie) => {
              return (
                <div className="bg-slate-100 my-3 p-4" key={movie.id}>
                  <MovieCard movie={movie} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
      {similarMovies.length > 0 ? (
        <div className=" px-5 mt-10 ">
          <h1 className=" text-2xl">Suggest for you </h1>
          <div className=" flex overflow-x-auto gap-3 bg-white">
            {similarMovies.map((movie) => {
              return (
                <div className="bg-slate-100 my-3 p-4" key={movie.id}>
                  <MovieCard movie={movie} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
      <Footer />
    </>
  );
};

export default MovieDetail;
