import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, easeInOut } from "framer-motion";

function ProjectCard({ title, description, image, number, tech, icon, link }) {
  console.log("Tech solutions:", icon);

  return (
    <div className="px-2">
      <div className="card rounded-xl">
        <figure>
            <a href={link} target="_blank">
          <img className="px-4 drop-shadow-2xl" src={image} alt="Shoes" />
          </a>
        </figure>
        <div className="card-body rounded-xl relative">
          <motion.h2 viewport={{ once: true }}
                  initial={{ opacity: 0, y:100}}
                  whileInView={{ opacity: 1, y:0}}
                  transition={{ type: "spring", stiffness: 100, delay:0.1}} className="card-title text-xl poetsen">
            <div className="text-5xl font-thin opacity-80 tabular-nums">
              {number}
            </div>
            {title}{" "}
            <div className="card-actions justify-end mt-1">
              <div className="badge badge-warning badge-sm text-white rounded-full">
                latest
              </div>
            </div>
          </motion.h2>
          <div className="divider opacity-50"></div>
          <motion.p viewport={{ once: true }}
                  initial={{ opacity: 0, y:100}}
                  whileInView={{ opacity: 1, y:0}}
                  transition={{ type: "spring", stiffness: 100, delay:0.25}} className="opacity-90 text-sm lg:text-md font-light">
            {description}
          </motion.p>
          <div className="mt-4 text-xl poetsen">
            <div className="divider">Tech Stack</div>
          </div>
          <div className="mt-2">
            {tech.map((badge, indexTech) => (
              <>
                <motion.div viewport={{ once: true }}
                  initial={{ opacity: 0, y:100}}
                  whileInView={{ opacity: 1, y:0}}
                  transition={{ type: "spring", stiffness: 50, delay:0.3}}
                  key={indexTech}
                  className="badge bg-base-100/30 m-1 border-gray-600/30 py-4 rounded-xl my-1.5 font-bold" 
                >
                  <FontAwesomeIcon icon={icon[indexTech]} /> {badge}
                </motion.div>
              </>
            ))}
          </div>

          <div className="divider opacity-20"></div>

            <motion.div viewport={{ once: true }}
                  initial={{ opacity: 0, y:80}}
                  whileInView={{ opacity: 1, y:0}}
                  transition={{ type: "spring", stiffness: 50, delay:0.35}} className="-mt-4 p-2 px-4">
                <p className="text-thin"><span className="poetsen"> Note:</span> <span className="opacity-70 ml-1"> if you need to explore project please touch laptop and view more</span></p>
            </motion.div>


        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
