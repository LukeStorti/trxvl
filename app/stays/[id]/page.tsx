"use client";

import StayCardIcon from "@/components/StayCardIcon";
import TopDestinations from "@/components/TopDestinations";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { ACCOMMODATIONDATA } from "@/lib/accommodationData";
import { PopoverContent } from "@radix-ui/react-popover";
import { Star } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const StayDetail = ({ params }: { params: { id: number } }) => {
  const [date, setDate] = useState<any>({
    from: undefined,
    to: undefined,
  });
  const data = ACCOMMODATIONDATA[params.id];

  return (
    <div className="container mx-auto px-5 lg:px-10 py-5 ">
      <div className="flex flex-col  items-center  gap-8">
        <h3 className="text-4xl md:text-6xl text-white font-bold italic">{data.title}</h3>
        <div className="relative w-[300px] h-[300px] md:w-3/4 md:h-[600px]">
          <Image
            src={data.imageURL}
            alt={`image of ${data.title}`}
            fill
            className="rounded-md h-full object-cover"
            priority={true}
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>

        <Card className="w-full text-center">
          <CardHeader>
            <CardTitle>{data.title}</CardTitle>
            <CardDescription className="flex items-center justify-center space-x-8">
              <span>{data.location}</span>
              <span className="flex space-x-1 items-center text-black">
                <Star size={15} fill="black" />
                <span className="text-md font-semibold text-black">{data.rating}</span>
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="flex w-full md:w-1/2 items-center justify-between my-4">
              <StayCardIcon
                icon="/icons/plane.png"
                title={data.flights === 1 ? `${data.flights} Flight` : `${data.flights} Flights`}
              />
              <StayCardIcon
                icon="/icons/hotel.png"
                title={data.hotel === 1 ? `${data.hotel} Hotel` : `${data.hotel} Hotels`}
              />
              <StayCardIcon
                icon="/icons/car.png"
                title={
                  data.transfers === 1
                    ? `${data.transfers} Transfer`
                    : `${data.transfers} Transfers`
                }
              />
              <StayCardIcon icon="/icons/activity.png" title={`${data.activities} Activities`} />
            </div>
            <div className="flex space-x-4 items-center text-muted-foreground my-2">
              {`${data.duration[0]} Days ${data.duration[1]} Nights`}
            </div>

            <div className="mx-auto my-2 flex flex-col items-start space-y-2 px-4">
              {data.details.map((item) => (
                <li key={item} className="text-muted-foreground text-center">
                  {item}
                </li>
              ))}
            </div>

            <div className="flex space-x-4 items-center my-4">
              <p className="text-muted-foreground line-through">${data.price * 1.5}</p>
              <h5 className="text-xl font-bold">${data.price}</h5>
            </div>

            <Popover>
              <PopoverTrigger asChild>
                <Button className="w-[85%]">Book Now</Button>
              </PopoverTrigger>
              <PopoverContent
                className="rounded bg-white w-auto p-2 my-2 mx-auto z-50"
                align="center"
              >
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StayDetail;
