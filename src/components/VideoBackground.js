import React from 'react'

const VideoBackground = ({trailer_url}) => {

  return (
    <div className='-z-10 w-full h-screen overflow-x-hidden'>
      <iframe className='w-screen h-full' src={trailer_url+"?&autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1"} title="YouTube video player" allow="autoplay; fullscreen;"  loop></iframe>
    </div>
  )
}

export default VideoBackground

