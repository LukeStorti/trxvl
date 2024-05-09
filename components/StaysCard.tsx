import { accommodationDataProps } from "@/lib/accommodationData";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Star } from "lucide-react";
import StayCardIcon from "./StayCardIcon";
import { Button } from "./ui/button";
import Link from "next/link";

const StaysCard = ({
  title,
  rating,
  duration,
  flights,
  hotel,
  transfers,
  activities,
  details,
  price,
  imageURL,
  location,
  id,
}: accommodationDataProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center p-2">
        <div className="relative w-full h-64">
          <Image
            src={imageURL}
            alt={`image of ${title}`}
            fill
            className="rounded-md h-full object-cover"
            priority={true}
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>

        <div className="flex justify-between w-full mt-2">
          <h4 className="text-md font-semibold w-full">{title}</h4>

          <span className="flex space-x-1 items-center">
            <Star size={20} fill="black" />
            <h4 className="text-md font-semibold">{rating}</h4>
          </span>
        </div>
        <h5 className="text-sm text-muted-foreground w-full mb-1">{location}</h5>
        <span className="text-left w-full flex space-x-1 text-muted-foreground text-sm">
          {`${duration[0]} Days ${duration[1]} Nights`}
        </span>
        <div className="flex w-full items-center justify-between my-4">
          <StayCardIcon
            icon="/icons/plane.png"
            title={flights === 1 ? `${flights} Flight` : `${flights} Flights`}
          />
          <StayCardIcon
            icon="/icons/hotel.png"
            title={hotel === 1 ? `${hotel} Hotel` : `${hotel} Hotels`}
          />
          <StayCardIcon
            icon="/icons/car.png"
            title={transfers === 1 ? `${transfers} Transfer` : `${transfers} Transfers`}
          />
          <StayCardIcon icon="/icons/activity.png" title={`${activities} Activities`} />
        </div>
        <div className="w-full my-2 flex flex-col space-y-2 px-4">
          {details.map((item) => (
            <li key={item} className="text-muted-foreground">
              {item}
            </li>
          ))}
        </div>
        <div className="my-2 flex items-center w-full justify-between px-4">
          <div className="flex space-x-2 items-center">
            <p className="text-muted-foreground line-through">${price * 1.5}</p>
            <h5 className="text-xl font-bold">${price}</h5>
          </div>
          <Button className="w-1/2" asChild>
            <Link href={`/stays/${id}`}>Book</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StaysCard;
