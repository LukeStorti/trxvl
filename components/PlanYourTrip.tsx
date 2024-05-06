import Image from "next/image";

const PlanYourTrip = () => {
  return (
    <div className="border w-full sm:w-3/4 mx-auto h-[300px] relative">
      <div className="relative w-full h-full">
        <Image
          src="/images/map.png"
          alt="map"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-md"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h4 className="text-white font-semibold text-3xl">Plan your trip with travel expert</h4>
          <p className="text-white text-lg">
            Our professional advisors can craft your perfect itinerary
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanYourTrip;
