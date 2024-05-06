import { Search } from "lucide-react";
import { Input } from "./ui/input";
import DatePicker from "./DatePicker";
import { Button } from "./ui/button";
import PartyGroupSelector from "./PartyGroupSelector";

const SearchBar = () => {
  return (
    <div className="hidden my-10 px-4 h-16 rounded-lg w-full backdrop-blur bg-white/25 shadow-lg md:flex items-center space-x-4 justify-between">
      <div className="flex items-center">
        <Search color="white" />
        <Input
          className="bg-transparent border-none outline-none mx-2 text-white placeholder:text-white focus-visible:border-none"
          placeholder="Seach destinations, hotels"
        />
      </div>
      <DatePicker />
      <PartyGroupSelector />
      <Button variant="secondary" className=" text-primary">
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
