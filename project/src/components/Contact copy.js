import React from "react";

const Contact11 = () => {
  return (
    <section className="my-28" id="contact">
      <hr></hr>
      <header className="px-5 pt-10 text-2xl font-bold">
        <h2>Contact Me</h2>
        <p className="text-base font-thin">I'd love to hear your thoughts!</p>
      </header>
      <div className="flex flex-col flex-wrap justify-between md:mx-6 md:flex-row">
        <div className="p-5 my-5 md:w-6/12 md:px-0">
          <div>
            <p className="font-bold">Theelipan Prabakar</p>
            <p className="font-thin">Middletown, Connecticut</p>
            <a
              href="mailto: Theelipan@gmail.com"
              className="inline-block mt-3 border-b-2 border-gray-500"
            >
              Theelipan@gmail.com
            </a>
          </div>
          <a
            className="inline-block mt-3 border-b-2 border-gray-500"
            href="./Resume - Theelipan Prabakar.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <div className="flex flex-row flex-wrap mt-7">
            <div className="mr-4">
              <a
                href="https://www.linkedin.com/in/theelipan"
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex flex-row items-end p-2 mb-2 text-sm border border-gray-500 rounded-lg">
                  <img
                    src="./images/icons/linkedin.svg"
                    alt=""
                    width="24px"
                    height="24px"
                    className="mr-1"
                  />
                  LinkedIn
                </span>
              </a>
            </div>

            <div className="mr-4">
              <a
                href="https://github.com/Deelip7"
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex flex-row items-end p-2 mb-2 text-sm border border-gray-500 rounded-lg">
                  <img
                    src="./images/icons/github.svg"
                    alt=""
                    width="24px"
                    height="24px"
                    className="mr-1"
                  />
                  GitHub
                </span>
              </a>
            </div>

            <a
              href="https://codepen.io/Theelipan"
              target="_blank"
              rel="noreferrer"
            >
              <span className="flex flex-row items-end p-2 mb-2 text-sm border border-gray-500 rounded-lg">
                <img
                  src="./images/icons/codepen.svg"
                  alt=""
                  width="24px"
                  height="24px"
                  className="mr-1"
                />
                CodePen
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact11;
