import React from 'react'

const VideoBackground = ({trailer_url}) => {

  return (
    <div className='-z-10 w-full h-full'>
      <iframe className='w-screen h-full' src={trailer_url+"?&autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackground
