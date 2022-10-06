import React, { useEffect } from "react";
import compShape1 from "../../images/home/value_Proposition_svgs/comp_f.svg";
import compShapeDet1 from "../../images/home/value_Proposition_svgs/comp_f_det.svg";
import compShape2 from "../../images/home/value_Proposition_svgs/comp_s.svg";
import compShapeDet2 from "../../images/home/value_Proposition_svgs/comp_s_det.svg";
import compShape3 from "../../images/home/value_Proposition_svgs/comp_t.svg";
import compShapeDet3 from "../../images/home/value_Proposition_svgs/comp_t_det.svg";
import compShape4 from "../../images/home/value_Proposition_svgs/comp_fo.svg";
import compShapeDet4 from "../../images/home/value_Proposition_svgs/comp_fo_det.svg";
import Aos from "aos";
import "aos/dist/aos.css";

function ValueProposition() {
  useEffect(() => {
    Aos.init({
      offset: 150,
      duration: 400,
    });
  }, []);
  return (
    <>
      
      <div className="z-1 w-full grid grid-cols-1 gap-10 mt-[31px] pb-[10vmax]">
        <div className="flex flex-wrap justify-evenly items-center">
          <div className="flex items-center w-[35%] justify-center shrink small:w-[55%]"
            data-aos="slide-right"
          >
            <img src={compShape1} width={"100%"} alt="component 1" />
          </div>
          <div className="flex items-center w-[25%] justify-start shrink small:w-[35%] h-full"
            data-aos="fade-left"
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
            data-aos="fade-left"
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
            data-aos="fade-left"
          >
            <img src={compShapeDet4} width={"100%"} alt="component 2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ValueProposition;
