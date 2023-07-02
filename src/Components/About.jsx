import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitAlt } from "@fortawesome/free-regular-svg-icons";

export default class About extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb -4 font-medium text-white">
              Hi, I'm Rishi.
              <br className="hidden lg:inline-block" />
              Creating incredible applications is my passion.
            </h1>
            <p className="mb-8 leading-relaxed">
              Passionate Frontend Developer Crafting Immersive Web Experiences
              with Innovation and Flawless Execution. Let's Elevate Your Online
              Presence.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                Work With Me
              </a>
              <a
                href="https://github.com/meetrishigupta/"
                target="_blank"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >
                <img
                  src="/images/github.svg"
                  style={{ fill: "#74aeaf", width: "27px", marginRight: "7px" }}
                />
                GitHub Profile
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              src="/images/heroimage.png"
              className="object-cover object-center rounded"
              alt="hero"
            />
          </div>
        </div>{" "}
      </section>
    );
  }
}
