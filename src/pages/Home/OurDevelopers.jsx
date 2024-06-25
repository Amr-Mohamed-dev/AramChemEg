import { NavLink } from "react-router-dom";
import { developersData } from "../../db";
const OurDevelopers = () => {
  return (
    <section className="bg-gray-100 pb-10 pt-20 lg:pb-20 lg:pt-[80px] ">
      <div className=" flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-[60px] text-center lg:mb-20">
            <span className="mb-2 uppercase block text-lg font-semibold text-primary">
              our developers
            </span>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
              Our Recent News
            </h2>
            <p className="text-base text-body-color ">
              The most premium real estate developers in Egypt
            </p>
          </div>
        </div>
      </div>

      <div className="mx-10 lg:mx-32">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {developersData.slice(0, 3).map((project) => {
            return (
              <div
                href="#"
                key={project.image}
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  className="object-cover w-full rounded-t-lg h-full  md:w-48 md:rounded-none md:rounded-s-lg"
                  src={project.image}
                  alt
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <NavLink to={"/developers"} className="mx-auto flex justify-center mt-10">
        <button className="font-normal uppercase px-8 py-2 rounded-sm border-2 tracking-wider border-gray-400 text-gray-900 cursor-pointer text-sm duration-300 transition hover:bg-secondary hover:border-secondary mt-4">
          View All
        </button>
      </NavLink>
    </section>
  );
};

export default OurDevelopers;
