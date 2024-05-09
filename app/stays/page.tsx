import PlanYourTrip from "@/components/PlanYourTrip";
import StaysList from "@/components/StaysList";

import { ACCOMMODATIONDATA } from "@/lib/accommodationData";

const StayRoute = () => {
  return (
    <div className="min-h-screen container mx-auto px-5 lg:px-10 py-5 ">
      <h3 className="text-4xl md:text-6xl text-white font-bold">Find Your Ideal Getaway</h3>

      <StaysList data={ACCOMMODATIONDATA} />
      <PlanYourTrip />
    </div>
  );
};

export default StayRoute;
