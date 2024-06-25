import { useState } from "react";
import { motion } from "framer-motion";
import PagesHeader from "../../components/PagesHeader";
import ProjectsCard from "../../components/ProjectsCard";

const Projects = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <PagesHeader
        header={"Our Projects"}
        title={"Our Recent Projects"}
        bg={"bgAboutUs"}
      />
      <section className="mx-5  pt-20 pb-12 lg:pt-[80px] lg:pb-[90px] dark:bg-dark">
        <div className="container mx-auto">
          {/* <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Our Portfolio
                </span>
                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  Our Recent Projects
                </h2>
                <p className="text-body-color text-base dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div> */}

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    All
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("residential")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "Residential"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Residential
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("administrative")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "design"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Administrative
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("commercial")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "marketing"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Commercial
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("coastal")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "development"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Coastal
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <ProjectsCard
              ImageHref="https://i.ibb.co/64WfFPt/image-01.jpg"
              category="Residential"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <ProjectsCard
              ImageHref="https://i.ibb.co/PT7ghRs/image-06.jpg"
              category="administrative"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <ProjectsCard
              ImageHref="https://i.ibb.co/vkt8C1P/image-02.jpg"
              category="administrative"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <ProjectsCard
              ImageHref="https://i.ibb.co/3FKqS1G/image-03.jpg"
              category="commercial"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <ProjectsCard
              ImageHref="https://i.ibb.co/m6dq2fX/image-04.jpg"
              category="coastal"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <ProjectsCard
              ImageHref="https://i.ibb.co/mCPjBsH/image-05.jpg"
              category="administrative"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
