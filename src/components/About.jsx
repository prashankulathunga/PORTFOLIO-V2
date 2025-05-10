import React from "react";
import Card from "./Card";
import aboutIMG from "../assets/prashankulathunga2.jpeg";
import worldIMG from '../assets/world.png'
import { motion, easeInOut } from "framer-motion";
import { ArrowDownTrayIcon, FingerPrintIcon } from "@heroicons/react/24/outline";


const textVariant = {
  initial: {
    x: -800,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

const About = () => {
  return (
    <div id="about" className="min-h-svh relative lg:pb-16 pb-6">
        <img className="absolute grayscale -z-832327 opacity-1 mt-4 md:mt-2" src={worldIMG} alt="world-image" />
      <motion.div
      viewport={{ once: true }}
        initial={{ y: 300 }}
        whileInView={{ y: 0 }}
        className="pt-10"
      >
        <div className="container mx-auto p-4 relative">
          <div className="grid grid-cols-12 gap-2 md:gap-12">
            <div className="col-span-12 lg:col-span-6">
              <motion.div viewport={{ once: true }}
                  initial={{ opacity: 0, y: 300 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 60, }} className="pt-12 pb-10 md:px-12 text-sm md:text-base card bg-indigo-100/5 backdrop-blur-3xl lg:backdrop-blur-none rounded-2xl md:bg-white/0 card-xs md:shadow-none shadow-xl p-6 mb-6 lg:mb-2">
                    <div className="h-[20vh] md:h-[50vh] rounded-b-full blur-3xl -z-121 w-1/2 bg-indigo-400 absolute top-1/2 opacity-15 left-1/3 block md:hidden" />
                <motion.h2 viewport={{ once: true }}
                  initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="text-3xl md:text-5xl font-medium mb-4 md:mb-8 poetsen flex items-center gap-2"
                > <FingerPrintIcon className="h-8 w-8 text-gray-400" />
                  Who am I
                </motion.h2>
                <div className="opacity-90 font-light md:text-base text-sm md:pr-16">
                  <motion.p viewport={{ once: true }}
                    initial={{ opacity: 0, y:20}}
                    whileInView={{ opacity: 1, y:0}}
                    transition={{ type: "spring", stiffness: 60, delay: 0.6 }}
                    className="leading-relaxed"
                  >
                    Hello, I'm{" "}
                    <span className="font-medium">
                      Prashan Kulathunga
                    </span>
                    , a Computer Science undergraduate at the University of
                    Plymouth, with roots at NSBM Green University. I’m
                    passionate about building AI-powered applications and
                    exploring cloud architecture and MLOps.
                  </motion.p>
                  <br />
                  <motion.p viewport={{ once: true }}
                    initial={{ opacity: 0, y:20}}
                    whileInView={{ opacity: 1, y:0}}
                    transition={{ type: "spring", stiffness: 60, delay: 0.8 }}
                  >
                    My projects reflect a deep interest in full-stack
                    development, AI, and cloud computing. I value collaboration
                    and continuous learning, and I love contributing to
                    impactful tech solutions.
                  </motion.p>
                  <br />

                  <motion.p viewport={{ once: true }}
                    initial={{ opacity: 0, y:20}}
                    whileInView={{ opacity: 1, y:0}}
                    transition={{ type: "spring", stiffness: 60, delay: 1 }}
                    className="md:pl-0 text-medium opacity-95 mt-4"
                  >
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg> */}
                    Check out my{" "}
                    <a href="" target="_blank" className="link link-hover font-medium">
                      GitHub
                    </a>{" "}
                    or connect on{" "}
                    <a href="" target="_blank" className="link link-hover font-medium">
                      LinkedIn
                    </a>
                    .
                  </motion.p>
                </div>



                <motion.div viewport={{ once: true }}
                    initial={{ opacity: 0, y:20}}
                    whileInView={{ opacity: 1, y:0}}
                    transition={{ type: "spring", stiffness: 60, delay: 1.2 }} className="text-md mt-6 opacity-80">
                <p className="text-thin">If You Need Check Out My CV </p>
                <button className="btn btn-outline mt-4 border-gray-700 shadow-none"> Download <ArrowDownTrayIcon className="h-4 w-4 text-gray-300" /> </button>
              </motion.div>



              </motion.div>


              

              <div className="lg:w-3/4 mb-6 md:px-12 relative">
              <div className="h-[30vh] md:h-[50vh] rounded-b-full blur-3xl z-121 w-1/2 bg-indigo-400 absolute top-1/4 opacity-20" />
                <Card title='Tech Toys' />
              </div>



            </div>
            <div className="col-span-12 lg:col-span-6 lg:flex justify-center items-center">
              <motion.div className="relative lg:mb-0 backdrop-blur-3xl">
                <motion.img viewport={{ once: true }}
                  initial={{ opacity: 0, y: 250 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 100}}
                  className="rounded-2xl brightness-90 mask-squircle mask backdrop-opacity-10 drop-shadow-xl/50 backdrop-blur-3xl" 
                  src={aboutIMG}
                  alt="aboutImage"
                />
                <div className="h-[20vh] md:h-[50vh] rounded-b-full blur-3xl z-121 w-1/2 bg-gray-400 absolute top-1/2 opacity-15 left-1/3" />
                <div className="h-[30vh] md:h-[30vh] rounded-b-full blur-3xl z-121 w-1/2 bg-gray-400 absolute top-1/4 opacity-20" />


                      



              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
