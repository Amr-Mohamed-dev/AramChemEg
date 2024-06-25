import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <div className=" w-full h-[55vh]  bg-gray-300 flex justify-start items-center text-white">
      <div className=" ml-10 lg:pt-10 md:mx-[300px]">
        <h1 className="text-[55px] lg:text-[90px] font-bold lg:flex">
          Find Your
          <span className="text-primary ml-4 text-[52px] lg:text-[90px] tracking-wider">
            <Typewriter
              options={{
                strings: "Dream Home",
                autoStart: true,
                loop: true,
                delay: 400,
              }}
            />
          </span>
        </h1>
        <h1 className="text-[30px] lg:text-5xl font-bold pt-6">
          @Scouts Real estate
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
