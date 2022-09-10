import React from 'react'

import './Video.css'

function Video(props) {
  return (
    <video src={props.src} id={props.id} className='videos-styling'></video>
  )
}

export default Video