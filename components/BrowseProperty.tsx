import { PROPERTYDATA } from "@/lib/constants";
import React from "react";
import TopDestinationCard from "./TopDestinationCard";

const BrowseProperty = () => {
  return (
    <section className="container mx-auto px-5 lg:px-10 my-16">
      <h3 className="text-3xl font-semibold tracking-tight">Browse by property type</h3>
      <div className="flex mt-5 overflow-x-scroll no-scrollbar justify-start space-x-8 lg:px-5">
        {PROPERTYDATA.map((item) => (
          <TopDestinationCard
            key={item.title}
            imageUrl={item.image}
            location={item.title}
            href={item.href}
          />
        ))}
      </div>
    </section>
  );
};

export default BrowseProperty;
