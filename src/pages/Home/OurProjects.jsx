import { ProductssData } from "../../db";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OurProjects = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setSelectedId(null);
    }
  };

  return (
    <section className="pb-10 pt-20 lg:pb-20 lg:pt-[60px] px-3">
      <div className="md:mx-[8vw]">
        <div className="flex flex-wrap justify-center items-center gap-4 h-full">
          {ProductssData.map((project) => (
            <motion.div
              key={project.id}
              layoutId={project.id}
              className="relative w-full md:w-[24vw] h-[320px] overflow-hidden bg-gray-100 rounded-lg shadow-lg cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
              onClick={() => setSelectedId(project.id)}>
              <img
                className="w-full h-[200px] object-cover rounded-t-lg transition-transform duration-300 ease-in-out transform hover:rotate-2 "
                src={project.image}
                alt={project.CardTitle}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5  text-gray-900">
                <h3 className="text-xl font-semibold text-[#ed1d24] truncate mb-2 leading-tight">
                  {project.CardTitle}
                </h3>
                <p className="text-sm text-gray-900 truncate mt-1">
                  {project.des}
                </p>
              </div>
            </motion.div>
          ))}

          <AnimatePresence>
            {selectedId && (
              <motion.div
                layoutId={selectedId}
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 modal-overlay"
                onClick={handleClickOutside}>
                {ProductssData.map(
                  (project) =>
                    project.id === selectedId && (
                      <motion.div
                        key={project.id}
                        className="bg-gradient-to-br from-blue-500 via-teal-500 to-indigo-500 rounded-lg p-6 w-[90%] md:w-[40vw] text-center shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
                        <motion.img
                          src={project.image}
                          alt="project"
                          className="w-full rounded-t-lg object-cover h-40 md:h-48 mb-4"
                        />
                        <motion.h5 className="text-white text-lg md:text-2xl font-extrabold tracking-wide mt-2 mb-1">
                          {project.CardTitle}
                        </motion.h5>
                        <motion.h2 className="text-gray-100 text-base md:text-lg font-medium italic leading-relaxed">
                          {project.des}
                        </motion.h2>
                      </motion.div>
                    )
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
