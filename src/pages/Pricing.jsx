import React from "react";
import { BsCheck2 } from "react-icons/bs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Pricing = () => {
  return (
    <div>
        <Navbar/>
      <div className=" flex h-[500px] justify-center items-center gap-5">
        <div className="card bg-slate-200 w-[230px] h-[400px] text-center py-5 px-3">
          <p className="text-xl">Basic</p>
          <p className="my-5 text-3xl">$120</p>
          <p>/month</p>
          <div className="mt-10">
            <p className="flex justify-start items-center gap-6 my-3 font-extralight">
              <BsCheck2 /> all movies
            </p>
            <p className="flex justify-start items-center gap-6 my-3 font-extralight">
              <BsCheck2 /> commentale
            </p>
            <p className="flex justify-start items-center gap-6 my-3 font-extralight">
              <BsCheck2 /> all access to skippale
            </p>
            <p className="flex justify-start items-center gap-6 my-3 font-extralight">
              <BsCheck2 /> all bar nyar
            </p>
            <p className="flex justify-start items-center gap-6 my-3 font-extralight">
              <BsCheck2 /> all dar bel
            </p>
          </div>
        </div>
        <div className="card bg-slate-200 w-[230px] h-[400px] text-center py-5 px-3">
          <p className="text-xl">Standard</p>
          <p className="my-5 text-3xl">$120</p>
          <p>/month</p>
          <div className="mt-10">
            <p className="flex justify-start items-center gap-6 my-3 font-extralight">
              <BsCheck2 /> all movies
            </p>
            <p className="flex justify-start items-center gap-6 my-3 font-extralight">
              <BsCheck2 /> commentale
            </p>
            <p className="flex justify-start items-center gap-6 my-3 font-extralight">
              <BsCheck2 /> all access to skippale
            </p>
            <p className="flex justify-start items-center gap-6 my-3 font-extralight">
              <BsCheck2 /> all bar nyar
            </p>
            <p className="flex justify-start items-center gap-6 my-3 font-extralight">
              <BsCheck2 /> all dar bel
            </p>
          </div>
        </div>
        <div className="card bg-slate-200 w-[230px] h-[400px] text-center py-5 px-3">
          <p className="text-xl">Premium</p>
          <p className="my-5 text-3xl">$120</p>
          <p>/month</p>
          <div className="mt-10">
            <p className="flex justify-start items-center gap-6 my-3 font-extralight">
              <BsCheck2 /> all movies
            </p>
            <p className="flex justify-start items-center gap-6 my-3 font-extralight">
              <BsCheck2 /> commentale
            </p>
            <p className="flex justify-start items-center gap-6 my-3 font-extralight">
              <BsCheck2 /> all access to skippale
            </p>
            <p className="flex justify-start items-center gap-6 my-3 font-extralight">
              <BsCheck2 /> all bar nyar
            </p>
            <p className="flex justify-start items-center gap-6 my-3 font-extralight">
              <BsCheck2 /> all dar bel
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Pricing;
