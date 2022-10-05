import React from 'react'
import shapeSquare from '../../images/sponsors/shapeSquare.svg';
import shapeCircle from '../../images/sponsors/shapeCircle.svg';
import sponsors from '../../data/sponsors.json';

function Sponsors() {
  return (
    <div className="w-full text-center font-google">
      {/* Background */}
      <div className="flex w-full absolute z-0 justify-between small:justify-center small:overflow-clip">
        <img className="w-2/12 small:hidden" src={shapeSquare} />
        <img className="w-1/12 small:hidden" src={shapeCircle} />
      </div>
      <h2 className="text-4xl small:text-3xl text-[#4d4d4d] font-semibold">Sponsors and Partners</h2>
      <div className="flex w-full flex-wrap justify-center items-center px-10">
        {sponsors.map((sponsor, i) => {
          return (
            <div key={i} className="flex flex-col h-[13rem] justify-between mx-10 my-10 shadow-xl px-10 py-5 rounded-xl bg-white">
              <div></div>
              <img src={require('../../images/sponsors/' + sponsor.img)} 
              className="w-[8rem]"/>
              <p className="text-[#898989] font-[600]"><a href={sponsor.url}>{sponsor.name}</a></p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sponsors
