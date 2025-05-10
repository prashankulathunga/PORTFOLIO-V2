import React from "react";
import ProjectCard from "./ProjectCard";
import { title } from "framer-motion/client";
import { motion, easeInOut } from "framer-motion";
import LaptopIMG1 from '../assets/laptop1.png'
import LaptopIMG2 from '../assets/laptop2.png'
import { faPython, faReact, faNodeJs, faCss } from '@fortawesome/free-brands-svg-icons';

function Project() {
  const projectArray = [
    {
      title: "PAWNING ANALYTICS",
      description: '"Pawn Analytics is a data-driven system that analyzes pawning trends, predicts gold price fluctuations, and optimizes loan valuations using machine learning. It helps pawnshops make informed decisions, minimize risks, and maximize profitability."',
      image: LaptopIMG1,
      number:1,
      tech: ['Python', 'ReactJs', 'NodeJS', 'TailwindCSS'], 
      icon:[faPython, faReact, faNodeJs],
      link:'https://github.com/prashankulathunga/GOLD_PRICE_PREDICT-SYSTEM',
    },
    {
      title: "FACE ATTENDANCE",
      description: '"A Face Identification System built with React Vite (frontend), Node.js (backend), and a Python-based AI model enables secure and efficient facial recognition. The system processes real-time face data, verifies identities, and ensures seamless authentication."',
      image: LaptopIMG2,
      number:2,
      tech: ['Python', 'ReactJs', 'NodeJs'],
      icon:[faPython, faReact, faNodeJs],
      link:'https://github.com/prashankulathunga/RFIAS',
    },
    {
      title: "PORTFOLIO",
      description: '"A responsive portfolio built with React.js and Tailwind CSS, featuring smooth animations using Framer Motion. It showcases my skills, projects, and contact info with dynamic content and a clean, scalable design for an engaging user experience."',
      image: LaptopIMG1,
      number:3,
      tech: ['ReactJs', 'TailwindCSS', 'Motion'],
      icon:[faReact],
      link:'',
    },
  ];

  return (
    <div id="project" className="bg-gradient-to-b to-gray-600">
        <div className="w-full bg-gradient-to-r rounded-full from-transparent via-gray-100 to-transparent p-0.5"></div>
      <div className="lg:pt-24 py-12">
        {/* <img className='absolute -z-876' src={cloudIMG} alt="" /> */}
        <div className="container m-auto p-4 md:px-12 px-1">
          <div className="pb-12 px-4 text-center">
            <motion.h2 viewport={{ once: true }}
                  initial={{ opacity: 0, y:150}}
                  whileInView={{ opacity: 1, y:0}}
                  transition={{ type: "spring", stiffness: 100 }} className="text-3xl md:text-5xl font-bold mb-4 md:mb-8 poetsen text-center">
            Projects I've Led
            </motion.h2>
            <motion.p viewport={{ once: true }}
                  initial={{ opacity: 0, y:150}}
                  whileInView={{ opacity: 1, y:0}}
                  transition={{ type: "spring", stiffness: 60, delay:0.1 }} className=" text-xs lg:text-base font-thin opacity-85 lg:px-72">
            A showcase of my key projects, highlighting my skills in full-stack development, machine learning, and cloud computing, with links to demos and GitHub.
            </motion.p>
          </div>
          <div className="grid grid-cols-12 lg:gap-8 gap-4">
            {projectArray.map((projects) => {
              return (
                <motion.div viewport={{ once: true }}
                initial={{ opacity: 0, y:150}}
                whileInView={{ opacity: 1, y:0}}
                transition={{ type: "spring", stiffness: 40, delay:0.1}} className="col-span-12 lg:col-span-4 first mb-12 lg:mb-2">
                  <ProjectCard title={projects.title} description={projects.description} image={projects.image} number={projects.number} tech={projects.tech} icon={projects.icon} link={projects.link} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
