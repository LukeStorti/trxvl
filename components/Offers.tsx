import { OFFERSDATA } from "@/lib/constants";
import OffersCard from "./OffersCard";

const Offers = () => {
  return (
    <section className="container mx-auto px-5 lg:px-10 my-8 md:my-16">
      <h3 className="text-3xl font-semibold tracking-tight">Offers</h3>
      <div className="flex mt-5 overflow-x-scroll no-scrollbar justify-start space-x-8 lg:px-5">
        {OFFERSDATA.map((item) => (
          <OffersCard
            key={item.title}
            imageUrl={item.image}
            flight={item.flight}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Offers;
