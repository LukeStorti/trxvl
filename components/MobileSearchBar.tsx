import { Search } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";
import DatePicker from "./DatePicker";
import PartyGroupSelector from "./PartyGroupSelector";
import { Button } from "./ui/button";

const MobileSearchBar = () => {
  return (
    <div className="flex flex-col md:hidden my-6 gap-4">
      <div className="flex items-center justify-center px-4 h-14 rounded-lg w-full backdrop-blur bg-white/25 shadow-lg">
        <Search color="white" />
        <Input
          className="bg-transparent border-none outline-none mx-2 text-white placeholder:text-white focus-visible:border-none"
          placeholder="Seach destinations, hotels"
        />
      </div>
      <div className="flex items-center justify-center px-4 h-14 rounded-lg w-full backdrop-blur bg-white/25 shadow-lg">
        <DatePicker />
      </div>
      <div className="flex items-center justify-center px-4 h-14 rounded-lg w-full backdrop-blur bg-white/25 shadow-lg">
        <PartyGroupSelector />
      </div>
      <Button className="h-14 text-xl">Search</Button>
    </div>
  );
};

export default MobileSearchBar;
