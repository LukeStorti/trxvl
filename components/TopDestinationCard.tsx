import Image from "next/image";
import Link from "next/link";

const TopDestinationCard = ({
  imageUrl,
  location,
  href,
}: {
  imageUrl: string;
  location: string;
  href: string;
}) => {
  return (
    <Link href={href}>
      <div className="w-52 h-52 rounded-md overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={imageUrl}
            alt={`image of ${location}`}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-md"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          <h4 className="absolute left-2 bottom-2 text-white font-semibold">{location}</h4>
        </div>
      </div>
    </Link>
  );
};

export default TopDestinationCard;
