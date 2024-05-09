"use client";
import { accommodationDataProps } from "@/lib/accommodationData";
import StaysCard from "./StaysCard";
import { useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

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
      <div className="my-10 w-full md:w-1/3 flex items-center bg-white px-2 rounded">
        <Input
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search Locations"
          className="outline-none border-none"
        />
        <Search />
      </div>
      <div>
        {filteredData.length > 0 ? (
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
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
          <div>
            <p>There are currently no stays for this location...</p>
          </div>
        )}
      </div>
    </>
  );
};

export default StaysList;
