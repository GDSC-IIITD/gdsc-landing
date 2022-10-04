import Hackathons from '../../images/home/events_svgs/Hackathons.svg'
import StudyJam from '../../images/home/events_svgs/StudyJam.svg'
import Workshops from '../../images/home/events_svgs/Workshops.svg'
import Events from "./EventCard";
import Event1 from '../../images/home/events_svgs/Event1.svg'
import Event2 from '../../images/home/events_svgs/Event2.svg'
import Event3 from '../../images/home/events_svgs/Event3.svg'


const Cards = () => {
  return (
    <>
    {/* image to be contained in div later */}
    <img className='w-full h-screen object-cover small:h-[90%] small:scale-x-75 small:mb-8 'src={Hackathons} alt='Hackathon'/>
    <img className='w-full h-screen object-cover small:h-[90%] small:scale-x-75 small:mb-8 ' src={StudyJam} alt='StudyJam' />
    <img className='w-full h-screen object-cover small:h-[90%] small:scale-x-75 small:mb-8' src={Workshops} alt='Flutter Festival' />
    <div className="text-6xl text-center small:text-[#9FA3AB] mt-12 mb-8 small:h-[270px] ">Upcoming Events</div>

    <div className=" h-screen m-4 items-center">
     <div className="flex small:flex-col justify-center small:items-center  ">
     <Events EventImage={Event1} EventDate={'TBA'} EventName={'30 Days of Google Cloud'} borderCol={'googleYellow'} alt={'Google Cloud'} />
      <Events EventImage={Event2} EventDate={'TBA'} EventName={'Android Study Jam'} borderCol={'googleRed'} alt={'Android Study Jam'} />
      <Events EventImage={Event3} EventDate={'TBA'} EventName={'Flutter Festival 2022'} borderCol={'googleGreen'} alt={'Flutter Festival'} />

</div>
          </div>
    
    </>
  );
}

export default Cards