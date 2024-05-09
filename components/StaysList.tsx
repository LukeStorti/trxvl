"use client";
import { accommodationDataProps } from "@/lib/accommodationData";
import StaysCard from "./StaysCard";
import { useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import Image from "next/image";

const StaysList = ({ data }: { data: accommodationDataProps[] }) => {
  const [filter, setFilter] = useState("");
  const filteredData = data.filter((item) => {
    if (filter === "") {
      return true;
    }
    return (
      item.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
      item.location.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  });
  return (
    <>
      <div className="mx-auto my-10 w-full md:w-1/3 flex items-center bg-white px-2 rounded">
        <Input
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search Locations"
          className="outline-none border-none"
        />
        <Search />
      </div>
      <div>
        {filteredData.length > 0 ? (
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 my-8">
            {filteredData.map((item) => (
              <StaysCard
                key={item.id}
                imageURL={item.imageURL}
                title={item.title}
                rating={item.rating}
                duration={item.duration}
                flights={item.flights}
                hotel={item.hotel}
                transfers={item.transfers}
                activities={item.activities}
                location={item.location}
                details={item.details}
                price={item.price}
                id={item.id}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col w-full items-center h-screen">
            <div className="relative w-52 h-52 mx-auto">
              <Image src="/images/empty.png" alt="empty search" fill />
            </div>
            <p className="text-white text-xl font-semibold tracking-tight">
              No results for this search! Try something else...
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default StaysList;
