import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import MovieCard from "./MovieCard";
import { GrLinkPrevious, GrLinkNext, GrClose } from "react-icons/gr";
import Footer from "../components/Footer";
// import { Link } from "react-router-dom";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [topRatedMovies, setTopRatedMoives] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [input, setInput] = useState("");
  const [showBtns, setShowBtns] = useState(false);

  const [page, setPage] = useState(1);
  const shown = input ? "search" : "discover";
  const url = `https://api.themoviedb.org/3/${shown}/movie`;
  const fetchData = async () => {
    const { data } = await axios.get(url, {
      params: {
        api_key: "5406820cc1d8ad083fab52d6b3c1addd",
        query: input,
        sort_by: "popularity.desc",
        page: page,
      },
    });
    setMovies(data.results);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    // console.log(data.results);
  };

  const getUpcomingMovies = async () => {
    const url_latest = `https://api.themoviedb.org/3/movie/upcoming`;
    const { data } = await axios.get(url_latest, {
      params: {
        api_key: "5406820cc1d8ad083fab52d6b3c1addd",
      },
    });
    setUpcomingMovies(data.results);
    // console.log(data.results);
  };
  const getTopRatedMovies = async () => {
    const url_top_rated = `https://api.themoviedb.org/3/movie/top_rated`;
    const { data } = await axios.get(url_top_rated, {
      params: {
        api_key: "5406820cc1d8ad083fab52d6b3c1addd",
      },
    });
    setTopRatedMoives(data.results);
    // console.log(data);
  };
  useEffect(() => {
    fetchData();
    setIsLoading(true);
    getTopRatedMovies();
    getUpcomingMovies();
  }, [input, page]);
  const prePage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const nextPage = () => {
    if (page < 50) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <div className=" relative  ">
        <Navbar setInput={setInput} />
        <h3 className=" text-3xl mx-5 my-3">Popular Movies</h3>
        {isLoading ? (
          <div className="w-full h-[300px] text-center py-16">
            <p> LOADING ...You are smart! Remember to clik for our heros</p>
            <p>Wait 5 sec to see all your favs</p>
            <a href="https://www.youtube.com/watch?v=MLlaDundKV4" className=" text-sl underline">click</a>
          </div>
        ) : (
          <div className=" flex flex-wrap justify-center items-center gap-3 bg-white">
            {movies.map((movie) => {
              return (
                <div className="bg-slate-100 my-3 p-4" key={movie.id}>
                  <MovieCard movie={movie} />
                </div>
              );
            })}
          </div>
        )}
        <div className=" px-5 mt-10">
          <h1 className=" text-2xl">Top Rated Movies</h1>
          <div className=" flex overflow-x-auto gap-3 bg-white">
            {topRatedMovies.map((movie) => {
              return (
                <div className="bg-slate-100 my-3 p-4" key={movie.id}>
                  <MovieCard movie={movie} />
                </div>
              );
            })}
          </div>
        </div>
        <div className=" px-5 mt-10">
          <h1 className=" text-2xl">Upcoming Movies</h1>
          <div className=" flex overflow-x-auto gap-3 bg-white">
            {upcomingMovies.map((movie) => {
              return (
                <div className="bg-slate-100 my-3 p-4" key={movie.id}>
                  <MovieCard movie={movie} />
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={` sticky bottom-0 left-0 flex items-center z-20 justify-around ${
            showBtns && "bg-sky-800"
          } text-white`}
        >
          <button
            className={` ${
              showBtns ? "" : "rounded-full"
            } p-5 mb-4 bg-sky-800 text-white`}
            onClick={() => setShowBtns(!showBtns)}
          >
            Your Choice
          </button>
          {showBtns && (
            <div className="flex my-5 items-center justify-center gap-5 ">
              <button className=" px-5 py-1" onClick={() => prePage()}>
                <GrLinkPrevious className="text-white" />
              </button>
              <span className=" text-center w-28">Page {page}....</span>
              <button className=" px-5 py-1 " onClick={() => nextPage()}>
                <GrLinkNext className="text-white" />
              </button>
            </div>
          )}
          {showBtns && (
            <button className=" p-3" onClick={() => setShowBtns(false)}>
              <GrClose />
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
