/** @format */

import React from "react";
import aboutImg from "../assets/About.png";
import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../constants";
import Attachments from "./Attachments";

function About() {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">
          Om <span className="text-neutral-500">mig</span>
        </h1>
        <div className="flex flex-wrap">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 lg:p-8"
          >
            <div className="flex items-center justify-center">
              <img className="rounded-2xl" src={aboutImg} alt="About" />
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex flex-col justify-around lg:justify-start">
              <div>
                <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
              </div>
              <div>
                <Attachments />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default About;
