import { TOPDESTINATIONS } from "@/lib/constants";
import React from "react";
import TopDestinationCard from "./TopDestinationCard";

const TopDestinations = () => {
  return (
    <section className="container mx-auto px-5 lg:px-10 my-10 lg:my-16">
      <h3 className="text-3xl font-semibold text-white tracking-tight">Top Vaction Destinations</h3>
      <div className="flex mt-5 overflow-x-scroll no-scrollbar justify-start space-x-8 lg:px-5 ">
        {TOPDESTINATIONS.map((item) => (
          <TopDestinationCard
            key={item.location}
            imageUrl={item.image}
            location={item.location}
            href={item.href}
          />
        ))}
      </div>
    </section>
  );
};

export default TopDestinations;
