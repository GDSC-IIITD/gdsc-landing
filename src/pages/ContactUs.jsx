import React from 'react';
import '../css/animations.css';
import telegram from '../images/contactUs/telegram.svg';
import twitter from '../images/contactUs/twitter.svg';
import linkedIn from '../images/contactUs/linkedIn.svg';
import instagram from '../images/contactUs/instagram.svg';
import G from '../images/contactUs/G.svg';
import D from '../images/contactUs/D.svg';
import S from '../images/contactUs/S.svg';
import C from '../images/contactUs/C.svg';

function ContactUs() {
  return (
    <>
      {/* Background */}
      <div className="flex px-[6vmax] justify-end w-full h-full absolute -top-[9rem] -z-10 small:w-5/12 small:-top-[39vmax] small:-right-[1vmax]">
        <img src={G} alt="background" className="mr-5 w-[6.5vmax] springish-G" />
        <img src={D} alt="background" className="mr-5 w-[5.6vmax]  springish-D" />
        <img src={S} alt="background" className="mr-5 w-[5.7vmax]  springish-S" />
        <img src={C} alt="background" className="mr-5 w-[9vmax]  springish-C" />
      </div>

      {/* Contact us */}
      <div className="flex flex-col w-full h-full justify-center items-start px-[15vmax] py-[4vmax] small:py-[15vmax] text-textSecondary font-google space-y-12 mt-16">
        <h1 className="text-5xl text-textSecondary font-bold text-center">Find us on</h1>
        <ul className="flex flex-col w-75  font-semibold space-y-4 pl-4">
          <li><a className="flex items-center space-x-4 cursor-pointer"><img src={telegram} alt="telegram-icon" className="w-12"/><span className="hover:text-googleBlue hover:scale-105">Telegram</span></a></li>
          <li><a className="flex items-center space-x-4 cursor-pointer"><img src={twitter} alt="twitter-icon" className="w-12"/><span className="hover:text-googleYellow hover:scale-105">Twitter</span></a></li>
          <li><a className="flex items-center space-x-4 cursor-pointer"><img src={linkedIn} alt="linkedIn-icon" className="w-12"/><span className="hover:text-googleGreen hover:scale-105">LinkedIn</span></a></li>
          <li><a className="flex items-center space-x-4 cursor-pointer"><img src={instagram} alt="instagram-icon" className="w-12"/><span className="hover:text-googleRed hover:scale-105">Instagram</span></a></li>
        </ul>
      </div>
    </>
  )
}

export default ContactUs
