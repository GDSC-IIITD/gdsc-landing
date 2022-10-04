import React from 'react'

const Events = ({EventImage,EventName,EventDate, borderCol , alt}) => {
  console.log(borderCol)
  return (
    <div className={`rounded-[20px] border-5xl w-[300px] h-[460px] border-[${borderCol}] border-[2px] m-10 overflow-hidden`}>
        <img className="w-[100%] " src={EventImage} alt={alt} />
      <div className='p-2'>
        <h5 className="text-google font-medium text-[32px] ">{EventName}</h5>
        <p className="text-google text-base mb-4">
          {EventDate}
        </p>
      </div>
    </div>
  )
}

export default Events