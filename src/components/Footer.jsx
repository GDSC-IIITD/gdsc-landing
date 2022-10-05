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
        <div className='absolute top-[7rem] left-[10vmax] z-10 w-[3vmax] small:top-[20vmax] bounce'>
          <img src={circle} width={"100%"} alt='circle' />
        </div>
        <div className='absolute top-[27rem] left-[8vmax] z-10 w-[4vmax] small:top-[45vmax] bounce2'>
          <img src={rectangle} width={"100%"} alt='rectangle' />
        </div>
        <div className='absolute bottom-[3vh] left-[4vw] z-10 w-[30vmax] small:hidden'>
          <img src={logo} width={"100%"} alt='gdsc logo' />
        </div>
          {/* <img src={circle} className="w-[3rem] small:w-[2.5rem]"/>
          <img src={rectangle} className="w-[5rem] top-[50vmax] small:w-[3rem]"/>
          <img src={logo} width={"100%"} className="p-0 top-[50vmax] ml-[3vmax]"/> */}

        <div className="w-full flex flex-col font-google text-center items-center justify-center mt-[-4rem] relative z-10">
          <h2 className="font-[700] text-googleBlue text-[4.5vmax]  pb-[1vmax]">Stay Updated</h2>
          <p className="text-textSecondary mb-5 font-[600] text-[1.5vmax] w-5/12">Stay connected to stay updated about the upcoming events and the latest news.</p>
          <form onSubmit={submit}>
            <input type="text" value={email} 
                  onChange={(e)=>setEmail(e.target.value)}
                  className="rounded-full bg-[lightgrey] px-[5vw] p-2 text-center" 
                  placeholder="Enter email"/>
          </form>
        </div>
        <img src={triangle} className="absolute top-[4rem] z-10 w-[4vmax] right-[10vmax] bounce"/>
        <img src={gif} className="absolute z-0 w-[30%] -right-[3vmax] scale-150 bottom-[-3.5vmax] small:-bottom-[3vmax] small:right-[10%] small:w-[80%]"/>
      </div>
    </>
  )
}

export default Footer