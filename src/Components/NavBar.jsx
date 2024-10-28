/** @format */
import React from "react";

import { FaLinkedin, FaGithub } from "react-icons/fa";

function NavBar() {
  return (
    <>
      <nav className="mb-5 lg:mb-20 flex items-center justify-end py-6">
        <div className="m-8 flex items-center justify-center gap-4 text-4xl">
          <a
            href="https://github.com/Ejenfjard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/madeleine-ejenfj%C3%A4rd-146a4a149/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
