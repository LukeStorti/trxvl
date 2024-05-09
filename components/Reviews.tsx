import { REVIEWSDATA } from "@/lib/constants";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <section className="container mx-auto px-5 lg:px-10 my-16">
      <h3 className="text-3xl font-semibold tracking-tight">Trusted by many</h3>
      <div className="flex mt-5 overflow-x-scroll no-scrollbar justify-start space-x-8 lg:px-5">
        {REVIEWSDATA.map((item) => (
          <ReviewCard
            key={item.name}
            name={item.name}
            location={item.location}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
