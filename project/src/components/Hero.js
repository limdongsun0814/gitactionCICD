import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animate from "lottie-web";

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./astronaout.json"),
    });
    animate.setSpeed(0.5);
  }, []);

  return (
    <section className="flex flex-col flex-wrap px-5 my-16 space-y-16 md:my-32 md:space-y-0 patterns">
      {/* <div className="ml-auto w-72 md:w-96 lg:w-2/5">
        <div className="container" ref={container}></div>
      </div> */}
      <div className="max-w-md mb-auto space-y-1">
        <h1 className="mb-3 text-5xl font-bold md:text-5xl">
          안녕하세요.
          <br></br>
          임동선입니다.
        </h1>
        <span className="font-bold text-orange-200 ">“배움에 대한 욕심”</span>
        {/* 한컴독스 내용 */}
        <p className="leading-relaxed tracking-wide">
          논어의 첫머리에 나오는 말처럼 배움과 성장에 욕심이 있는 개발자입니다.{" "}
        </p>
        <span className="font-bold text-orange-200 ">“협력의 중요성”</span>
        {/* css와 디자인 부분 */}
        <p className="leading-relaxed tracking-wide">
          혼자만의 성장하는 방식이 아닌 상호간에 소통, 협력을 통한 성장을
          중요시하는 개발자입니다.{" "}
        </p>
      </div>
    </section>
  );
};

export default Hero;
