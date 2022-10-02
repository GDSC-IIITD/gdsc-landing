import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.svg'
function NavBar() {
  return (
    <div className=" bg-[white] flex w-full justify-between items-center sticky top-0 z-20" style={{
      padding:"1.4vmax",
    }}>
      <img className='w-1/3' style={{
        marginLeft:"1.25vmax",
      }} src={logo}/>
      <div className="flex w-2/6 justify-between small:hidden mr-9" style={{
        fontSize:"1.3vmax",
        marginRight:"2.5vmax",
      }}>
        <Link className="font-google hover:text-googleBlue" to={'/'}>Home</Link>
        <Link className="font-google hover:text-googleRed" to={'/blogs'}>Blogs</Link>
        <Link className="font-google hover:text-googleGreen" to={'/team'}>Team</Link>
        <Link className="font-google hover:text-googleYellow" to={'/contactUs'}>ContactUs</Link>
      </div>
    </div>
  )
}

export default NavBar