import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { motion, easeInOut, spring, delay } from "framer-motion";

const listVariant = {
  initial: {
    opacity: 0,
    y: 300,
  },
  animate: {
    opacity: 0,
    y: 0,

    transition: {
      type: "spring",
      stiffness: 100,
      delay: 0.6,
    },
  },
};

function Card({ title, desc }) {
  return (
    <div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 60 }}
        className="card bg-indigo-100/5 lg:bg-gray-400/5 card-xs p-4 backdrop-blur-3xl lg:backdrop-blur-3xl rounded-2xl"
      >
        <div className="card-body">
          <div className="flex gap-2 items-center">
            <CodeBracketIcon className="h-7 w-7 text-gray-500" />
            <h2 className="card-title poetsen text-base">{title}</h2>
          </div>
          <p>{desc}</p>

          <div>
            <motion.ul viewport={{ once: true }} initial={{ opacity: 0, y: 300 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 50, delay : 0.1, }} className="list rounded-box">
              <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                Most played technologies
              </li>

              <motion.li viewport={{ once: true }} initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 50, delay : 0.2, }}
                className="list-row "
              >
                <div className="flex gap-4">
                  <div className="text-4xl font-thin opacity-30 tabular-nums">
                    01
                  </div>
                  <svg
                    className="size-10"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#80deea"
                      d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
                    ></path>
                    <path
                      fill="#80deea"
                      d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
                    ></path>
                    <path
                      fill="#80deea"
                      d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
                    ></path>
                    <circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                  </svg>
                </div>
                <div>
                  <div>React</div>
                  <div className="text-xs uppercase font-semibold opacity-60">
                    Library
                  </div>
                </div>
              </motion.li>

              <motion.li viewport={{ once: true }} initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 50, delay : 0.2, }} className="list-row">
                <div className="flex gap-4">
                  <div className="text-4xl font-thin opacity-30 tabular-nums">
                    02
                  </div>
                  <svg
                    className="size-10"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                  >
                    <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                    <path
                      fill="#000001"
                      d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div>JavaScript</div>
                  <div className="text-xs uppercase font-semibold opacity-60">
                    Language
                  </div>
                </div>
              </motion.li>

              <motion.li viewport={{ once: true }} initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 50, delay : 0.3, }} className="list-row">
                <div className="flex gap-4">
                  <div className="text-4xl font-thin opacity-30 tabular-nums">
                    03
                  </div>
                  <svg
                    className="size-10"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#0277BD"
                      d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
                    ></path>
                    <path
                      fill="#FFC107"
                      d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div>Python</div>
                  <div className="text-xs uppercase font-semibold opacity-60">
                    Language
                  </div>
                </div>
              </motion.li>

              <motion.li viewport={{ once: true }} initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 50, delay : 0.4, }} className="list-row">
                <div className="flex gap-4">
                  <div className="text-4xl font-thin opacity-30 tabular-nums">
                    04
                  </div>
                  <svg
                    className="size-10"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#00acc1"
                      d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div>TailwindCSS</div>
                  <div className="text-xs uppercase font-semibold opacity-60">
                    Framework
                  </div>
                </div>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
