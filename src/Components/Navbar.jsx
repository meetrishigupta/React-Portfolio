import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { TerminalIcon, DocumentDownloadIcon } from "@heroicons/react/solid";
import "./style.css"
class Nav extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <header className="bg-gray-800 md:sticky top-0 z-10">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="#about" className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl">
  Rishi Gupta
</a>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
              <a href="#projects" className="mr-5 hover:text-white">
                Past Work
              </a>
              <a href="#skills" className="mr-5 hover:text-white">
                Skills
              </a>
              <a href="#testimonials" className="mr-5 hover:text-white">
                Certifications
              </a>
            </nav>
            <div className="downbutton">
              <a
                href="/doc/Resume Rishi Gupta.pdf" download="Rishi Gupta Resume"
              >                       
               <DocumentDownloadIcon className="w-5 inline-block mb-1 fill-neutral-500	" />
                Resume
              </a>
            </div>
          </div>

        </header>
      </>
    );
  }
}

export default Nav;
