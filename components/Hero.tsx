import React from "react";
import SearchBar from "./SearchBar";
import MobileSearchBar from "./MobileSearchBar";

const Hero = () => {
  return (
    <div className="container mx-auto px-5 lg:px-10 my-5">
      <h1 className="text-4xl md:text-6xl text-white font-bold">The whole world awaits.</h1>
      <SearchBar />
      <MobileSearchBar />
    </div>
  );
};

export default Hero;
