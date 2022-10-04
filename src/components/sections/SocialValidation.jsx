import React from 'react';
import EventCard from "../EventCard";
import EventCarousel from "../EventCarousel";
import Event1 from '../../images/home/events_svgs/Event1.svg'


const SocialValidation = () => {
  return (
    <>
      <EventCarousel/>
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