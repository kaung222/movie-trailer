import React, { useEffect, useState } from "react";
import axios from "axios";
import noImage from "./noImage.jpg";
import { Link } from "react-router-dom";

const Actors = ({ movie }) => {
  const [actors, setActors] = useState([]);
  const imgUrl = "https://image.tmdb.org/t/p/original";
  const url = `https://api.themoviedb.org/3/movie/${movie.id}/credits`;
  const fetchData = async () => {
    const { data } = await axios.get(url, {
      params: {
        api_key: "5406820cc1d8ad083fab52d6b3c1addd",
      },
    });
    setActors(data.cast.slice(0, 8));
    console.log(data.cast.slice(0, 10));
  };
  useEffect(() => {
    fetchData();
  }, [movie]);
  return (
    <div>
      <div className="">
        <h1 className=" text-white text-3xl">Casts</h1>
        <div className=" flex flex-wrap w-16px mt-5">
          {actors.map((actor) => {
            return (
              <div key={actor.id} className=" w-20 hover:scale-150 ">
                <Link to={`/actor/${actor.id}`}>
                  <img
                    src={
                      actor.profile_path
                        ? `${imgUrl}${actor.profile_path}`
                        : noImage
                    }
                    alt=""
                    className="w-22 h-21 cursor-pointer"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Actors;
