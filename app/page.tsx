import BrowseProperty from "@/components/BrowseProperty";
import CategoryFilter from "@/components/CategoryFilter";

import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import PlanYourTrip from "@/components/PlanYourTrip";
import TopDestinations from "@/components/TopDestinations";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-5 lg:px-10 py-5 ">
        <Hero />
        <CategoryFilter />
        <TopDestinations />
        <Offers />
        <BrowseProperty />
        <PlanYourTrip />
      </div>
    </>
  );
}
