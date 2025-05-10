import React from "react";
import { motion, easeInOut } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { DevicePhoneMobileIcon, PlusIcon } from "@heroicons/react/24/outline";

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

const floatingAnimation = {
  y: [20, -20, 20],
  x: [-4, 4, -4],
};

const Hero = () => {
  return (
    <div className="-z-32740">
      <div className="container m-auto p-4">
        <motion.div className="flex items-center justify-center h-screen relative md:mt-0 -mt-12">
          {/* Background blobs */}
          <motion.div
            animate={{
              y: [200, -200, 200],
              x: [20, -20, 20],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: easeInOut,
            }}
            className="bg-indigo-300 w-80 h-64 rounded-full absolute blur-3xl opacity-30 md:opacity-50 lg:block hidden"
          />
          <motion.div className="bg-gradient-to-tr from-gray-800 to-white w-80 h-64 rounded-full absolute blur-3xl opacity-6 md:opacity-50" />

          <div className="h-screen flex md:flex-row flex-col-reverse items-center justify-center gap-12 w-full">
            {/* Left section - Personal info */}
            <div className="left md:w-1/2 flex justify-center p-4 items-center">
              <div className="w-full">
                <div>
                  <motion.h2
                    variants={textVariant}
                    initial="initial"
                    animate="animate"
                    className="md:text-4xl text-3xl font-bold poetsen md:text-left text-center drop-shadow-xl"
                  >
                    <span className="text-gray-200">
                      const
                    </span>{" "}
                    me = 
                  </motion.h2>

                  <motion.div
                    animate={{
                      y: [80, -80, 80],
                      x: [4, -4, 4],
                      rotate: 360,
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 32,
                      repeat: Infinity,
                      ease: easeInOut,
                    }}
                    className="w-40 h-40 bg-indigo-300 opacity-40 absolute z-2 rounded-full blur-3xl md:block hidden"
                  />

                  <div className="md:text-3xl text-sm font-extrabold md:text-left text-center text-gray-200">
                    <TypeAnimation
                      sequence={[
                        '"Software Engineer";',
                        2000,
                        '"Undergraduate";',
                        2000,
                        '"Fullstack Developer";',
                        2000,
                        '"UI Designer";',
                        2000,
                      ]}
                      wrapper="span"
                      speed={30}
                      style={{ fontSize: "2em", display: "inline-block" }}
                      repeat={Infinity}
                    />
                  </div>

                  <div className="divider md:w-1/3"></div>

                  <div className="text-center md:text-left md:w-1/2">
                    <motion.div
                      animate={{
                        ...floatingAnimation,
                        rotate: 360,
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 32,
                        repeat: Infinity,
                        ease: easeInOut,
                      }}
                      className="w-24 h-32 bg-violet-400 opacity-80 absolute -z-10 rounded-full blur-3xl md:block hidden"
                    />

                    <div>
                      <motion.div
                        variants={textVariant}
                        initial="initial"
                        animate="animate"
                        className="card card-xs p-2"
                      >
                        <div className="card-body">
                          <h2 className="card-title">
                            {" "}
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
                          </svg>{" "} */}
                            <PlusIcon className="h-6 w-6 text-gray-500" />
                            Connect With Me
                          </h2>
                          <p className="text-left">
                            Message: You can contact me true below my social
                            media account:
                          </p>

                          <div className="text-center md:text-left mt-4 lg:mt-0">
                            <a href="https://www.linkedin.com/in/prashan-kulathunga-673421294/" target="_blank">
                            <button className="btn shadow-none mt-4 bg-blue-400/5 py-4 border-none rounded-full dark:bg-gray-900/10 text-blue-400 border-white/5 dark:text-white font-medium">
                              <svg
                              className="rounded-full"
                                aria-label="LinkedIn logo"
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                              >
                                <path
                                  fill="white"
                                  d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
                                  fillRule="evenodd"
                                ></path>
                              </svg>
                              Prashan Kulathunga
                            </button>
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{
                  y: [18, -18, 18],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 4,
                  ease: easeInOut,
                  repeat: Infinity,
                }}
                className="bottom-28 left-12 absolute"
              >
                <DevicePhoneMobileIcon class="h-6 w-6 dark:text-gray-200" />
              </motion.div>
            </div>

            {/* Right section - Chat bubbles */}
            <div className="right w-1/2 p-4 md:block hidden">
              <motion.div
                animate={{
                  scale: [1, 1.04, 1],
                  x: [8, -8, 8],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                }}
                className="chat chat-start"
              >
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <div className="chat-header">
                  Obi-Wan Kenobi
                  <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble text-sm bg-white/10 drop-shadow-xl rounded-2xl m-1">
                  What's Your Name ? <br />
                  Are you Available for Hire?
                </div>
                <div className="chat-footer opacity-50">Delivered</div>
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.04, 1],
                  x: [8, -8, 8],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                }}
                className="chat chat-end"
              >
                <div className="chat-image avatar">
                  <div className="avatar avatar-online avatar-placeholder">
                    <div className="bg-neutral text-neutral-content w-10 rounded-full">
                      <span className="text-md font-bold">PK</span>
                    </div>
                  </div>
                </div>
                <motion.div
                  animate={{
                    ...floatingAnimation,
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 32,
                    repeat: Infinity,
                    ease: easeInOut,
                  }}
                  className="w-24 h-32 bg-indigo-400 opacity-40 absolute -z-10 rounded-full blur-3xl"
                />
                <div className="chat-header">
                  Prashan Kulathunga
                  <time className="text-xs opacity-50">12:46</time>
                </div>
                <div className="chat-bubble text-sm font-medium bg-white/10 drop-shadow-xl rounded-2xl m-1">
                  <p className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent ">
                    I'm Prashan Kulathunga, <br /> Yes, How Can I assist you?
                  </p>
                </div>
                <div className="chat-footer opacity-50">Seen at 12:46</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
