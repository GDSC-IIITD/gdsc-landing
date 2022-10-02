import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.svg'
function NavBar() {
  return (
    <div className="flex w-full justify-between items-center top-0 z-20 p-[1.4vmax] small:sticky small:pt-[3vmax]">
      <img className='w-1/3 ml-[2vmax] small:w-10/12 small:ml-[4vmax]' src={logo}/>
      <div className="flex w-2/6 justify-between small:hidden mr-[2.5vmax] text-[1.3vmax] font-google font-semibold">
        <Link className="hover:text-googleBlue" to={'/'}>Home</Link>
        <Link className="hover:text-googleRed" to={'/blogs'}>Blogs</Link>
        <Link className="hover:text-googleGreen" to={'/team'}>Team</Link>
        <Link className="hover:text-googleYellow" to={'/contactUs'}>ContactUs</Link>
      </div>
    </div>
  )
}

export default NavBar