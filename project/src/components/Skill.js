import React from "react";

const Skill = () => {
  return (
    <section className="px-5 my-28">
      <header className="pt-10 text-2xl font-bold" id="skill">
        <h2>Skills & Tools</h2>
      </header>
      <div className="grid grid-cols-3 gap-5 my-7 md:grid-cols-6">
        <div
          className="flex flex-col items-center"
          tabIndex="0"
          role="img"
          aria-label="Java"
        >
          <img
            src="./images/icons/free-icon-java-3291669.png"
            alt=""
            loading="lazy"
            className="w-16 mb-1"
            width="64px"
            height="64px"
          />
          JAVA
        </div>
        <div
          className="flex flex-col items-center"
          tabIndex="0"
          role="img"
          aria-label="Python"
        >
          <img
            src="./images/icons/free-icon-python-5968350.png"
            alt=""
            loading="lazy"
            className="w-16 mb-1"
            width="64px"
            height="64px"
          />
          Python
        </div>
        <div
          className="flex flex-col items-center"
          tabIndex="0"
          role="img"
          aria-label="React"
        >
          <img
            src="./images/icons/react-original.svg"
            alt=""
            loading="lazy"
            className="w-16 mb-1"
            width="64px"
            height="64px"
          />
          React
        </div>

        <div
          className="flex flex-col items-center"
          tabIndex="0"
          role="img"
          aria-label="Spring FW & Boot"
        >
          <img
            src="./images/icons/icons8-봄-로고-480.png"
            alt=""
            loading="lazy"
            className="w-16 mb-1"
            width="64px"
            height="64px"
          />
          Spring FW & Boot
        </div>
        <div
          className="flex flex-col items-center"
          tabIndex="0"
          role="img"
          aria-label="MySQL"
        >
          <img
            src="./images/icons/free-icon-programing-15484291.png"
            alt=""
            loading="lazy"
            className="w-16 mb-1"
            width="64px"
            height="64px"
          />
          MySQL
        </div>
        <div
          className="flex flex-col items-center"
          tabIndex="0"
          role="img"
          aria-label="Arduino"
        >
          <img
            src="./images/icons/icons8-아두-이노-240.png"
            alt=""
            loading="lazy"
            className="w-16 mb-1"
            width="64px"
            height="64px"
          />
          Arduino
        </div>
      </div>
    </section>
  );
};

export default Skill;
