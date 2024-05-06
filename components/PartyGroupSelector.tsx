"use client";

import { Minus, Plus, UsersRound } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const PartyGroupSelector = () => {
  const [guests, setGuests] = useState<{ guests: number; rooms: number }>({
    guests: 0,
    rooms: 0,
  });
  const incrementGuests = () => {
    setGuests((prevState) => ({
      ...prevState,
      guests: prevState.guests + 1,
    }));
  };

  // Function to decrement guests
  const decrementGuests = () => {
    if (guests.guests > 0) {
      setGuests((prevState) => ({
        ...prevState,
        guests: prevState.guests - 1,
      }));
    }
  };

  // Function to increment rooms
  const incrementRooms = () => {
    setGuests((prevState) => ({
      ...prevState,
      rooms: prevState.rooms + 1,
    }));
  };

  // Function to decrement rooms
  const decrementRooms = () => {
    if (guests.rooms > 0) {
      setGuests((prevState) => ({
        ...prevState,
        rooms: prevState.rooms - 1,
      }));
    }
  };
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "justify-start text-left font-normal bg-transparent border-none hover:bg-transparent "
            )}
          >
            <UsersRound color="white" />
            {guests.guests > 0 ? (
              <div className="flex items-center space-x-2 ml-2 text-white">
                <span>{guests.guests} Guests</span>
                <span>{guests.rooms} Rooms</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2 ml-2 text-white">
                <span>2 Adults</span>
                <span>1 Room</span> {/* Change "Rooms" to "Room" for singular */}
              </div>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-4 m-2 flex gap-10" align="start">
          <div className="flex flex-col items-center">
            <h3 className="font-semibold mb-4">Guests</h3>
            <div className="flex items-center space-x-4">
              <Button variant="secondary" size="icon" onClick={decrementGuests}>
                <Minus size={20} />
              </Button>
              <h3 className="font-bold">{guests.guests}</h3>
              <Button variant="secondary" size="icon" onClick={incrementGuests}>
                <Plus size={20} />
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-semibold mb-4">Rooms</h3>
            <div className="flex items-center space-x-4">
              <Button variant="secondary" size="icon" onClick={decrementRooms}>
                <Minus size={20} />
              </Button>
              <h3 className="font-bold">{guests.rooms}</h3>
              <Button variant="secondary" size="icon" onClick={incrementRooms}>
                <Plus size={20} />
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default PartyGroupSelector;
