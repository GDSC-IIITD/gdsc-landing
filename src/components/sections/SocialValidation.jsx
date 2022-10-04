import React from 'react';
import EventCard from "../EventCard";
import Event1 from '../../images/home/events_svgs/Event1.svg'
import { motion, useScroll } from "framer-motion";

const SocialValidation = () => {


  return (
    <>
      <motion.div className="bg-[url('./images/home/events_svgs/Bg.png')] w-[80%] h-[80vh] rounded-[5rem] " style={{scaleX: scrollYProgress}}/>
      <div className="text-6xl text-center small:text-[#9FA3AB] mt-12 mb-8 small:h-[270px] ">Upcoming Events</div>


      <div className=" h-screen m-4 items-center">
        <div className="flex small:flex-col justify-center small:items-center  ">
          <EventCard EventImage={Event1} EventDate={'TBA'} EventName={'30 Days of Google Cloud'} borderCol={'googleYellow'} alt={'Google Cloud'} />
        </div>
      </div>
    </>
  );
}

export default SocialValidation