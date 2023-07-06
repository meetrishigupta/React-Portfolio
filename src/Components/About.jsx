import React from "react";


export default class About extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 id="heading-one" className="title-font sm:text-4xl text-3xl mb-2 font-medium text-white">
              Hi, I'm <span style={{ color: "#22c55e" }}>Rishi.</span>
            </h1>
            <h1 className="title-font sm:text-4xl text-3xl mb-6 font-medium text-white">
              Creating incredible applications is my passion.
            </h1>
            <p className="mb-8 leading-relaxed">
              Passionate Frontend Developer Crafting Immersive Web Experiences
              with Innovation and Flawless Execution. Let's Elevate Your Online
              Presence.
            </p>
            <div className="flex justify-center">
              <a
                href="https://github.com/meetrishigupta/"
                target="_blank"
                className="ml-0 inline-flex text-white bg-violet-600		 border-0 py-2 px-6 focus:outline-none hover:bg-violet-900	 hover:text-white rounded text-lg"
              >
                <img
                  src="/images/github.svg"
                  style={{width: "27px", marginRight: "7px" }}
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
