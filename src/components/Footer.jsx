import React,{useState} from 'react'
import circle from '../images/home/circle.svg';
import rectangle from '../images/home/rectangle.svg';
import triangle from '../images/home/triangle.svg';
import logo from '../images/logo.svg';
import gif from '../images/gif.gif';
import axios from 'axios';


function Footer() {

  const [email, setEmail] = useState('');
  const submit = () => {
    console.log('clicked')
  };

  return (
    <>
      <div className="w-full flex justify-between h-[100vh] mt-[-1rem] relative z-10 overflow-clip">
        <div className="w-1/3 flex flex-col p-10  justify-between items-center relative z-10 ">
          <img src={circle} className="w-[3rem]"/>
          <img src={rectangle} className="w-[5rem] mt-10"/>
          <img src={logo} className="h-[10%] mt-[-10rem]"/>
        </div>

        <div className="w-1/3 flex flex-col font-google text-center items-center justify-center mt-[-10rem] relative z-10">
          <h2 className="font-[700] text-googleBlue text-[4rem] mb-10">Stay Updated</h2>
          <p className="text-textSecondary mb-5 font-[600]">Stay connected to stay updated about the upcoming events and the latest news.</p>
          <form onSubmit={submit}>
            <input type="text" value={email} 
                  onChange={(e)=>setEmail(e.target.value)}
                  className="rounded-full bg-[lightgrey] px-5 p-2 text-center" 
                  placeholder="Enter email"/>
          </form>
        </div>
      
        <div className="w-1/3 flex flex-col justify-between items-center p-10 pb-0">
          <img src={triangle} className="w-[4rem] mt-10"/>
          <img src={gif} className="z-0 w-[40%] scale-150 absolute bottom-[-4rem]"/>
        </div>
      </div>
    </>
  )
}

export default Footer