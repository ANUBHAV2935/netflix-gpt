import React from 'react'

const VideoTittle = ({title,overview}) => {
   
  return (
    <div className='my-60 w-[38%] mx-28 absolute bg-gradient-to-r from-black'>
      <h1 className='text-3xl font-bold text-white'>{title}</h1>
      <p className='text-xl text-white'>{overview}</p>
      <div className='my-8'>
        <button className='bg-white px-10 py-3 rounded-sm text-black hover:opacity-70'> ▶ Play</button>
        <button className='bg-gray-500 px-8 py-3 rounded-sm text-white mx-6 opacity-60 hover:opacity-40'> ℹ More info</button>
      </div>
    </div>
  )
}

export default VideoTittle
