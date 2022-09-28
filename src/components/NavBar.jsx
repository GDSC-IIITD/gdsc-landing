import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.svg'
function NavBar() {
  return (
    <div className=" bg-[white] flex w-screen justify-between p-5 items-center sticky top-0 z-20">
      <img src={logo}/>
      <div className="flex w-2/6 justify-between small:hidden">
        <Link className="font-google hover:text-googleBlue" to={'/'}>Home</Link>
        <Link className="font-google hover:text-googleRed" to={'/blogs'}>Blogs</Link>
        <Link className="font-google hover:text-googleGreen" to={'/team'}>Team</Link>
        <Link className="font-google hover:text-googleYellow" to={'/contactUs'}>ContactUs</Link>
      </div>
    </div>
  )
}

export default NavBar