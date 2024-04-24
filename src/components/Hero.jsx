import React from "react";
import logo from "../assets/logo.svg";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img className="w/28 object-contain" src={logo} alt="sumz_logo" />
        <button
          className="black_btn"
          type="button"
          onClick={() => {
            window.open("https://github.com/baninations");
          }}
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summerize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summerizer
        that transforms lengthy articles into clear and consice summaries
      </h2>
    </header>
  );
};

export default Hero;
