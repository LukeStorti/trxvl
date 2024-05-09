"use client";

import { format } from "date-fns";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";

import { Calendar } from "./ui/calendar";
const DatePicker = () => {
  const [date, setDate] = useState<any>({
    from: undefined,
    to: undefined,
  });

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              "justify-start text-left font-normal bg-transparent border-none hover:bg-transparent ",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon color="white" />
            {date?.from ? (
              date.to ? (
                <>
                  <span className="text-white ml-2">
                    {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                  </span>
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <div className="text-white ml-2 flex items-center gap-2">
                <span>Check In </span>
                <span> - </span> <span>Check Out</span>
              </div>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 m-2" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePicker;
