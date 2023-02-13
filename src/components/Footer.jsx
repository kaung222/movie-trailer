import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="">
        <footer className="footer p-10 bg-neutral sm:flex md:flex-row flex-col sm:justify-around justify-center  gap-11 items-start bg-slate-200 text-neutral-content">
          <div className="mt-5">
            <span className="footer-title text-2xl font-bold mt-5 mb-2">
              Pages
            </span>
            <Link to="/" className="link link-hover my-2 block">
              Movies
            </Link>
            <Link to="/tv-show" className="link link-hover my-2 block">
              TV Shows
            </Link>
            <Link to="/trending" className="link link-hover my-2 block">
              Trending Movies And TV Shows
            </Link>
            <Link to="/pricing" className="link link-hover my-2 block">
              Pricing Plans
            </Link>
          </div>
          <div className=" mt-5">
            <span className="footer-title text-2xl font-bold mt-5 mb-2">
              Company
            </span>
            <Link to="/" className="link link-hover my-2 block">
              About us
            </Link>
            <Link to="/" className="link link-hover my-2 block">
              Contact
            </Link>
            <Link to="/" className="link link-hover my-2 block">
              Faqs
            </Link>
            <Link to="/" className="link link-hover my-2 block">
              Support
            </Link>
          </div>
          <div className=" mt-5">
            <span className="footer-title text-2xl font-bold mb-2 mt-5">Legal</span>
            <Link to="/" className="link link-hover my-2 block">
              Terms of use
            </Link>
            <Link to="/" className="link link-hover my-2 block">
              Privacy policy
            </Link>
            <Link to="/" className="link link-hover my-2 block">
              Cookie policy
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
