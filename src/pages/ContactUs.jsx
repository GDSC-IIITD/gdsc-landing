import React from 'react';
import '../css/contactUs.css';
import telegram from '../images/contactUs/telegram.svg';
import twitter from '../images/contactUs/twitter.svg';
import linkedIn from '../images/contactUs/linkedIn.svg';
import instagram from '../images/contactUs/instagram.svg';
import gdsc from '../images/contactUs/gdsc.svg';

function ContactUs() {
  return (
    <>
      {/* Background */}
      <div className="flex justify-center large:justify-end w-full h-full absolute top-10 -z-10">
        <img src={gdsc} alt="background" className="absolute right-10 w-4/5 large:w-2/5 small:invisible springish" />
      </div>

      {/* Contact us */}
      <div className="flex flex-col w-full justify-start items-center large:items-start large:px-60 text-textSecondary font-google space-y-12 mt-16">
        <h1 className="text-5xl text-contactHeading font-bold">Find us on</h1>
        <ul className="flex flex-col w-75 font-semibold space-y-4 large:pl-4">
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
