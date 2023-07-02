import React from "react";
import { TerminalIcon, AcademicCapIcon } from "@heroicons/react/solid";
import { certificate } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <AcademicCapIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Certifications
        </h1>
        <div className="flex justify-center flex-wrap -m-4">
          {certificate.map((certificate) => (
            <div className="w-1/2 sm:w-1/3 lg:w-1/4 p-4" key={certificate.id}>
              <div className="flex flex-col h-full relative">
                <img
                  alt="gallery"
                  className="w-full h-50 object-cover object-center shadow-[5px_20px_20px_1px_#f7fafc24]"
                  src={certificate.img}
                />
                <div className="hover-div">
                  <h1 className="title-font mt-5 text-lg font-noraml text-[#ffffff]	 mb-3">
                    {certificate.title}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
