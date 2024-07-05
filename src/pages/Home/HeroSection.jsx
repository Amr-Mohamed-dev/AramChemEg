import CarouselPic from "../../components/Carousel";
const HeroSection = () => {
  return (
    <div className="w-full pt-6 md:pt-0 px-[10vw] md:flex justify-center items-center">
      <div className=" md:ml-10 lg:pt-10 w-full md:w-1/2 flex flex-col gap-3">
        <h1 className="text-[3vh] lg:text-[3vw] text-primary font-bold lg:flex">
          Experience ... Know How .. Innovation
        </h1>
        <p className="text-[14px] font-bold lg:text-[1vw] text-blue-900 lg:flex">
          AramChem is a customer focused industrial company, founded in Egypt in
          1992.
        </p>
        <p className="text-[14px] font-bold lg:text-[1vw] text-blue-900 lg:flex">
          It has provided its customers with a variety of epoxy hardeners and
          modified resins, catalysts and additives of proven and consistent
          quality for more than 28 years.
        </p>
        <p className="text-[14px] font-bold lg:text-[1vw] text-blue-900 lg:flex mb-8">
          These are for the production of different types of paints, coatings,
          repair mortars and other construction materials based on epoxy and
          polyurethane modified epoxy systems.
        </p>
      </div>
      <div className="md:ml-10 lg:pt-10 md:w-1/2">
        <CarouselPic />
      </div>
    </div>
  );
};

export default HeroSection;
