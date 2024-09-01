import CarouselPic from "../../components/Carousel";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[91vh] md:h-[81vh] px-[10vw] flex flex-col justify-around md:flex-row md:justify-center items-center overflow-hidden bg-gradient-to-r from-blue-900 via-blue-600 to-blue-300">
      <div className="absolute inset-0 z-0 creative-background">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2">
          <circle cx="50" cy="50" r="15" />
          <circle cx="150" cy="150" r="20" />
          <circle cx="100" cy="100" r="30" />
          <circle cx="30" cy="170" r="25" />
          <circle cx="170" cy="30" r="20" />
        </svg>
      </div>
      <div className="relative z-10 md:ml-10 lg:pt-10 w-full md:w-1/2 flex flex-col gap-3">
        <h1 className="text-[3vh] lg:text-[3vw] text-primary font-bold lg:flex">
          Experience ... Know How .. Innovation
        </h1>
        <p className="text-[14px] font-bold lg:text-[1vw] text-gray-100 lg:flex">
          AramChem is a customer-focused industrial company, founded in Egypt in
          1992.
        </p>
        <p className="text-[14px] font-bold lg:text-[1vw] text-gray-100 lg:flex">
          We have provided our customers with a variety of epoxy hardeners and
          modified resins, catalysts, and additives of proven quality for more
          than 28 years.
        </p>
        <p className="text-[14px] font-bold lg:text-[1vw] text-gray-100 lg:flex mb-8">
          These products are used in the production of various paints, coatings,
          repair mortars, and construction materials based on epoxy and
          polyurethane modified epoxy systems.
        </p>
      </div>
      <div className="relative z-10 md:ml-10 lg:pt-10 md:w-1/2">
        <CarouselPic />
      </div>
    </div>
  );
};

export default HeroSection;
