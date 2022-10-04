import React from 'react'
import temp_animation from '../../images/temp_animation.svg'
import upper_left from '../../images/home/hero_svgs/upper_left.svg'
import left_middle_square from '../../images/home/hero_svgs/left_middle_square.svg'
import lower_yellow_square from '../../images/home/hero_svgs/lower_yellow_square.svg'
import upper_right_wave from '../../images/home/hero_svgs/upper_right_wave.svg'
import right_middle_circle from '../../images/home/hero_svgs/right_middle_circle.svg'
import right_lower_semicircle from '../../images/home/hero_svgs/right_lower_semicircle.svg'
function Hero() {
  return (
    <div>
      <div id='container' className='py-[15vh] flex flex-col align-middle small:py-[20vh]'>
        <div className='absolute top-0 z-0 w-[16vmax]'>
          <img src={upper_left}  width={"100%"} alt='upper left' />
        </div>
        <div className='absolute top-[17vmax] left-[2vmax] z-10 w-[3vmax] small:top-[20vmax]'>
          <img src={left_middle_square} width={"100%"} alt='left_middle_square' />
        </div>
        <div className='absolute top-[28vmax] z-10 w-[7vmax] small:top-[45vmax]'>
          <img src={lower_yellow_square} width={"100%"} alt='lower_yellow_square' />
        </div>
        <div className='absolute top-[0] right-0 z-5 w-[19vmax] small:'>
          <img src={upper_right_wave} width={"100%"} alt='upper_right_wave' />
        </div>
        <div className='absolute top-[8vmax] right-[26vw] z-10 w-[4vmax] small:top-[15vmax] small:right-[15vw]'>
          <img src={right_middle_circle} width={"100%"} alt='right_middle_circle' />
        </div>
        <div className='absolute top-[30vmax] right-[0] z-10 w-[4vmax] small:top-[50vmax]'>
          <img src={right_lower_semicircle} width={"100%"} alt='right_lower_semicircle' />
        </div>
        <div id='upper-half-container' className='flex w-full justify-center z-30'>
          <div id='gdsc' className='font-google font-bold text-[3.5vmax] pr-[10vmax] text-[#BBBBBB] leading-tight tracking-wider small:pl-[2vmax] small:pr-[0] small:text-[3.5vmax]'>
            <div><span className='text-googleRed'>G</span>oogle</div>
            <div><span className='text-googleGreen'>D</span>eveloper</div>
            <div><span className='text-googleBlue'>S</span>tudent</div>
            <div><span className='text-googleYellow'>C</span>lubs</div>
            <div className='text-[1.5vmax] p-[1vmax] tracking-normal'><span className='text-[#00D3C7]'>IIIT</span> Delhi</div> 
          </div>
          <div id='animation-gif' className='w-[25%] small:w-[50%]'>
            <img src={temp_animation} alt='animation-gif'></img>
          </div>
        </div>
        <div id='lower-half-container' className='w-full flex justify-center text-center pt-[3vmax] z-30'>
          <div className='w-[35%] font-google text-[#797979] text-[1.2vmax] small:w-[70%] small:text-[1.8vmax]'>
            Through GSDC - IIITD we, Developers and Designers want to foster a healthy development culture. Developer Student Clubs is a program that will help students to learn mobile and web development, design thinking and leadership skills.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero