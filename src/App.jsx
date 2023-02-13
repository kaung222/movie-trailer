import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import TvShow from "./pages/TvShow";
import Trending from "./pages/Trending";
import Pricing from "./pages/Pricing";
import MovieDetail from "./pages/MovieDetail";
import Actor from "./pages/Actor";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tv-show" element={<TvShow />} />
      <Route path="/trending" element={<Trending />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/actor/:id" element={<Actor />} />
      <Route path="/movie/detail/:id" element={<MovieDetail />} />
    </Routes>
  );
};

export default App;
