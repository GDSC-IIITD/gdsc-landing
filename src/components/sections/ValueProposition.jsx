import React, { useEffect } from "react";
import circleShape from "../../images/backgrounds/value_Proposition_svgs/proposition_circle_shape.svg";
import waveShape from "../../images/backgrounds/value_Proposition_svgs/proposition_wave_shape.svg";
import compShape1 from "../../images/backgrounds/value_Proposition_svgs/comp_f.svg";
import compShapeDet1 from "../../images/backgrounds/value_Proposition_svgs/comp_f_det.svg";
import compShape2 from "../../images/backgrounds/value_Proposition_svgs/comp_s.svg";
import compShapeDet2 from "../../images/backgrounds/value_Proposition_svgs/comp_s_det.svg";
import compShape3 from "../../images/backgrounds/value_Proposition_svgs/comp_t.svg";
import compShapeDet3 from "../../images/backgrounds/value_Proposition_svgs/comp_t_det.svg";
import compShape4 from "../../images/backgrounds/value_Proposition_svgs/comp_fo.svg";
import compShapeDet4 from "../../images/backgrounds/value_Proposition_svgs/comp_fo_det.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ValueProposition() {
  useEffect(() => {
    Aos.init({
      offset: 300,
      duration: 400,
    });
  }, []);
  return (
    <>
      <div className="flex w-[7vmax] absolute top-[122vh] left-0 z-0 small:top-[92vh] small:w-[2.5vmax]">
        <img src={circleShape} width={"100%"} alt="circle shape" />
      </div>
      <div className="flex w-[8vmax] absolute top-[100vh] right-0 z-0 small:top-[80vh]">
      <img src={waveShape} width={"100%"} alt="wave shape" />
      </div>
      
      <div className="z-1 w-full grid grid-cols-1 gap-10 mt-[31px]">
        <div className="flex flex-wrap justify-evenly items-center">
          <div className="flex items-center w-[35%] justify-center shrink small:w-[55%]"
            data-aos="slide-right"
          >
            <img src={compShape1} width={"100%"} alt="component 1" />
          </div>
          <div className="flex items-center w-[25%] justify-start shrink small:w-[35%]"
            data-aos="slide-left"
          >
            <img src={compShapeDet1} width={"100%"} alt="component 2" />
          </div>
        </div>

        <div className="flex flex-wrap justify-evenly items-center">
          <div className="flex items-center w-[35%] justify-center shrink small:w-[55%]"
            data-aos="fade-right"
          >
            <img src={compShape2} width={"100%"} alt="component 1" />
          </div>
          <div
            className="flex items-center w-[25%] justify-start shrink small:w-[35%]"
            data-aos="fade-left"
          >
            <img src={compShapeDet2} width={"100%"} alt="component 2" />
          </div>
        </div>

        <div className="flex flex-wrap justify-evenly items-center">
          <div
            className="flex items-center w-[35%] justify-center shrink small:w-[55%]"
            data-aos="slide-right"
          >
            <img src={compShape3} width={"100%"} alt="component 1" />
          </div>
          <div
            className="flex items-center w-[25%] justify-start shrink small:w-[35%]"
            data-aos="slide-left"
          >
            <img src={compShapeDet3} width={"100%"} alt="component 2" />
          </div>
        </div>

        <div className="flex flex-wrap justify-evenly items-center">
          <div
            className="flex items-center w-[35%] justify-center shrink small:w-[55%]"
            data-aos="slide-right"
          >
            <img src={compShape4} width={"100%"} alt="component 1" />
          </div>
          <div
            className="flex items-center w-[25%] justify-start shrink small:w-[35%]"
            data-aos="slide-left"
          >
            <img src={compShapeDet4} width={"100%"} alt="component 2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ValueProposition;
