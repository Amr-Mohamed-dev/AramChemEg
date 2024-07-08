import { ProductssData } from "../../db";
import { useState } from "react";

const OurProjects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleHoverOut = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="pb-10 pt-20 lg:pb-20 lg:pt-[60px] px-3">
      <div className="md:mx-[8vw]">
        <div className="flex sm:flex-col md:flex-row flex-wrap justify-center items-center gap-4 h-full">
          {ProductssData.map((project, index) => (
            <div
              key={project.image}
              className={`relative h-full md:w-[20vw] overflow-hidden shadow-sm text-center bg-projectCard`}
              onMouseOver={() => handleHover(index)}
              onMouseOut={handleHoverOut}
            >
              <div
                className={`w-full absolute top-4 pb-3 z-40 md:text-[1vw] font-bold text-gray-200`}
              >
                <q
                  className={`${
                    index === hoveredIndex ? "border-b-[3px]" : "border-b-0 "
                  } duration-200 pb-1 border-white/55`}
                >
                  {project.CardTitle}
                </q>
              </div>
              <img
                className="w-full cursor-pointer rounded-lg h-full"
                src={project.image}
              />
              <div
                className={`absolute rounded-lg h-full w-full top-0 ${
                  index === hoveredIndex ? "right-[0px]" : "right-[500px]"
                } duration-500 bg-black/60 pt-5 flex flex-col gap-7`}
              >
                <p className="text-gray-100 pt-12 px-4 md:text-[1.6vh]">
                  <b className="text-md font-extrabold">
                    {project.paragraphHeader}
                  </b>{" "}
                  {project.des}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;

{
  /* <div className="absolute overflow-hidden rounded-lg h-full w-full top-0 left-0">
<img
  className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-full"
  src={project.image}
/>
</div>
<div className="absolute h-full w-full top-0 left-0">
<h3 className="pt-5 text-md font-semibold text-gray-300 block">
  {project.CardTitle}
</h3>
<NavLink to={"/products"}>
  <button className="font-normal px-8 py-2 rounded-sm border-2 tracking-wider border-gray-400 text-gray-100 cursor-pointer text-sm duration-300 transition hover:bg-secondary hover:border-secondary mt-4">
    Explore
  </button>
</NavLink>
</div>? */
}
