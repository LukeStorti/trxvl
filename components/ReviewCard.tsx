import Image from "next/image";
import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const ReviewCard = ({
  name,
  location,
  description,
  image,
}: {
  name: string;
  location: string;
  description: string;
  image: string;
}) => {
  return (
    <Card className="shadow-md ">
      <CardContent className="w-[350px] h-52 rounded-md flex flex-col items-center">
        <Avatar className="w-12 h-12 mt-2 object-cover">
          <AvatarImage src={image} />
        </Avatar>

        <div className="w-full h-full flex flex-col items-center mt-2 px-4">
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="flex justify-between w-full items-center mt-4">
          <div className="flex items-center space-x-1">
            <Star size={20} fill="#2563eb" className="text-primary" />
            <Star size={20} fill="#2563eb" className="text-primary" />
            <Star size={20} fill="#2563eb" className="text-primary" />
            <Star size={20} fill="#2563eb" className="text-primary" />
            <Star size={20} fill="#2563eb" className="text-primary" />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">{name}</p>
            <p className="text-muted-foreground ">{location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
