import React from "react";
import { motion, easeInOut } from "framer-motion";
import { useState } from "react";

function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "68eb3c31-7193-4f7e-b804-361a6a1b7d95");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };


  return (
    <div>
      <div id="contact" className="min-h-[80vh] bg-gray-900 hero py-12">
        <div className="container mx-auto">
          <div className="p-4">
            <div className="flex flex-col items-center">
              <motion.h2 viewport={{ once: true }}
                  initial={{ opacity: 0, y:150}}
                  whileInView={{ opacity: 1, y:0}}
                  transition={{ type: "spring", stiffness: 100 }} className="poetsen text-3xl md:text-5xl lg:mb-8 mb-2">
                Reach out to me
              </motion.h2>
              <div className="mt-12 px-8 w-full lg:w-1/2">
                <form onSubmit={onSubmit} className=" w-full">
                  <div className="grid grid-cols-12 gap-4">
                    <motion.fieldset viewport={{ once: true }}
                  initial={{ opacity: 0, y:150}}
                  whileInView={{ opacity: 1, y:0}}
                  transition={{ type: "spring", stiffness: 100, delay:0.1}} className="fieldset col-span-12 lg:col-span-6">
                      <legend className="fieldset-legend">
                        Your name
                      </legend>
                      <input name="name"
                      required
                        type="text"
                        className="input lg:input-lg w-full bg-gray-900 border-gray-800"
                        placeholder="type here name"
                      />
                    </motion.fieldset>
                    <motion.fieldset viewport={{ once: true }}
                  initial={{ opacity: 0, y:150}}
                  whileInView={{ opacity: 1, y:0}}
                  transition={{ type: "spring", stiffness: 100, delay:0.3 }} className="fieldset col-span-12 lg:col-span-6">
                      <legend className="fieldset-legend">Your email</legend>
                      <input name='email'
                      required
                        type="text"
                        className="input lg:input-lg w-full bg-gray-900 border-gray-800"
                        placeholder="type here email"
                      />
                    </motion.fieldset>
                    <motion.fieldset viewport={{ once: true }}
                  initial={{ opacity: 0, y:150}}
                  whileInView={{ opacity: 1, y:0}}
                  transition={{ type: "spring", stiffness: 60, delay:0.5 }} className="fieldset col-span-full">
                      <legend className="fieldset-legend">Your message</legend>
                      <textarea name='message'
                      required
                        className="textarea h-32 bg-gray-900 border-gray-800 w-full lg:input-lg"
                        placeholder="type here message"
                      ></textarea>
                    </motion.fieldset>
                    <div className="col-span-6 hidden lg:block"></div>
                    <motion.button type="submit" viewport={{ once: true }}
                  initial={{ opacity: 0, y:150}}
                  whileInView={{ opacity: 1, y:0}}
                  transition={{ type: "spring", stiffness: 60, delay:0.6}} className="btn bg-white text-black border-[#e5e5e5] lg:col-span-6 col-span-12 mt-4">
                      <svg
                        aria-label="Google logo"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <g>
                          <path d="m0 0H512V512H0" fill="#fff"></path>
                          <path
                            fill="#34a853"
                            d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                          ></path>
                          <path
                            fill="#4285f4"
                            d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                          ></path>
                          <path
                            fill="#fbbc02"
                            d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                          ></path>
                          <path
                            fill="#ea4335"
                            d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                          ></path>
                        </g>
                      </svg>
                      Submit Message
                    </motion.button>

                    <div className="text-sm w-56 mt-2"><p className="w-56">{result}</p></div>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-800" />
    </div>
  );
}

export default Contact;
