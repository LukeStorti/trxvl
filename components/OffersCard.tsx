import Image from "next/image";
import { Button } from "./ui/button";

const OffersCard = ({
  imageUrl,
  flight,
  title,
  description,
}: {
  imageUrl: string;
  flight: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex rounded shadow-lg items-center my-4 h-48 w-full md:w-1/2">
      <div className="relative w-44 h-48 rounded overflow-hidden">
        <Image
          src={imageUrl}
          alt={`location image`}
          width={176}
          height={192}
          className="rounded-md object-fill"
        />
      </div>
      <div className="flex flex-col p-2 ml-2 justify-between w-3/4 h-full">
        <p className="text-muted-foreground text-sm ">{flight}</p>
        <h4 className="font-semibold text-lg line-clamp-2">{title}</h4>
        <p className="text-muted-foreground line-clamp-1 md:line-clamp-none">{description}</p>
        <Button className="w-full md:w-1/2 mt-2">Book Now</Button>
      </div>
    </div>
  );
};

export default OffersCard;
