import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Building dynamic applications with React and JavaScript, constantly
            learning and evolving to create seamless user experiences. Let's
            bring your ideas to life.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              target="_blank"
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-full p-4"
              style={{ display: "flex" }} // Added flex display
            >
              <div style={{ height: "280px" }} className="flex relative w-full">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}     
                />
                <div
                  style={{ height: "100%" }}
                  className="px-8 py-10 relative h-full z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 transition-opacity duration-500"
                >
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>

              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
