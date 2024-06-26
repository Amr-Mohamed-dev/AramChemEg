import { NavLink } from "react-router-dom";
import { Statistic } from "../../components/Status";
import { ProductssData } from "../../db";

const OurProjects = () => {
  return (
    <section className=" pb-10 pt-20 lg:pb-20 lg:pt-[60px]">
      <div className="md:mx-[300px]">
        <div className=" flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] text-center lg:mb-20">
              <h2 className="mb-4 text-3xl font-bold text-primary  sm:text-4xl md:text-[40px]">
                Our Recent Products
              </h2>
              <p className="text-base text-body-color text-gray-800">
                The most premium Chemicals and Technologies for Polymers in
                Egypt
              </p>
            </div>
          </div>
        </div>
        {/* <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-3 sm:p-8"> */}
        <div className="flex sm:flex-col md:flex-row flex-wrap justify-center items-center gap-4">
          {ProductssData.map((project) => (
            <div
              key={project.image}
              className={` w-[80%] md:w-[30%] rounded-lg pb-8 shadow-sm text-center bg-projectCard $}`}
            >
              <div className="overflow-hidden rounded-lg h-[70%]">
                <img
                  className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-full"
                  src={project.image}
                />
              </div>
              <div className="h-[20%]">
                <h3 className="pt-5 text-md font-semibold text-gray-300 block">
                  {project.CardTitle}
                </h3>
                <NavLink to={"/products"}>
                  <button className="font-normal px-8 py-2 rounded-sm border-2 tracking-wider border-gray-400 text-gray-100 cursor-pointer text-sm duration-300 transition hover:bg-secondary hover:border-secondary mt-4">
                    Explore
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
