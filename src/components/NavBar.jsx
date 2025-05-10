import React, { useState } from "react";
import { QueueListIcon, CheckBadgeIcon, InformationCircleIcon, FolderIcon, ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header>
      <div className="fixed top-0 left-0 right-0 md:p-2 p-4 backdrop:blur-3xl z-3829823">
      <div className="container mx-auto">
        <div className="backdrop:blur-3xl ">
          <motion.div animate={{
                scale: [1, 1.02, 1],
                x: [8, -8, 8],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
              }} className="mt-4 flex justify-between items-center p-2 md:p-4 rounded-full bg-gray-950/90 dark:bg-gray-700/30 backdrop:blur-3xl md:px-12 px-6 relative z-2172983">
            <div className="left">
              <h2 className="lg:text-base text-sm font-bold drop-shadow-lg opacity-90 text-gray-50 dark:text-gray-300 flex items-center gap-2">Prashan Kulathunga <CheckBadgeIcon className="h-4 w-4 dark:text-gray-500 text-gray-300 dark:fill-sky-50 fill-blue-400" />
              </h2>
            </div>
            <div className="right hidden lg:block ">
              <ul className="flex gap-4 md:text-base text-sm font-light">
                <li><a href="#about">About</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div
              className="block lg:hidden"
              onClick={() => {
                setMenu(!menu);
              }}
            >
              <QueueListIcon className="h-6 w-6 text-gray-50 dark:text-gray-300 drop-shadow-2xl relative z-23 " />
            </div>
          </motion.div>
        </div>
        <AnimatePresence>
          {menu && (
            <div className="absolute right-8">
              <motion.div 
                drag 
                dragConstraints={{right: 8, top: 0, bottom: 0, left: 0}} 
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                exit={{opacity: 0, y: -12}} 
                className="md:hidden menu bg-base-100/50 rounded-box w-46 float-end mt-2 drop-shadow-2xl border border-white/1 backdrop-blur-3xl" 
                onClick={() => {setMenu(!menu)}}
              >
                <ul className="menu rounded-box w-36">
                  <li>
                    <a href="#about">
                    <InformationCircleIcon className="h-6 w-6 text-gray-300/90" />
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#project">
                    <FolderIcon className="h-6 w-6 text-gray-300/90" />
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#contact">
                    <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-gray-300/90" />
                      Contact
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
    </header>
  );
};

export default NavBar;