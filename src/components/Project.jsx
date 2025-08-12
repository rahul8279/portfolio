import React from "react";
import { PROJECTS } from ".";
import { motion } from "framer-motion";

function project() {
  return (
    <div className="pb-4 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Project
      </motion.h2>
      <div>
        {PROJECTS.map((pro, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={pro.image}
                width={250}
                height={250}
                alt={pro.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold text-2xl ">{pro?.title}</h3>
              <p className="mb-4 text-stone-400 ">{pro?.description}</p>
              {pro.technologies.map((tech, index) => (
                <span
                  className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                  key={index}
                >
                  {tech}
                </span>
              ))}
              <div className="flex gap-3 items-center">
                <a
                  className="mr-2 mt-3 rounded bg-stone-900 p-1 px-2 text-xl font-medium text-stone-300"
                  href={pro?.Github}
                >
                  Github
                </a>
                <a
                  className="mr-2 mt-3 rounded bg-stone-900 p-1 px-2 text-xl font-medium text-stone-300"
                  href={pro?.Demo}
                >
                  Demo
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default project;
