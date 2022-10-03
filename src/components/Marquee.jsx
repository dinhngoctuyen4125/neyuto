/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react'

const Marquee = () => {
  return (
    <div className='marquee-container mb-5'>
      {/* <div className='container-box'>
        <marquee><small>Welcome to my website! | Created: <small>30/04/2022</small> | Completed: <small>02/05/2022</small></small></marquee>
      </div>
      <div className='container-transparent' style={{borderRadius: 0}}></div> */}
      <marquee><i>Welcome to my website! | Created: <small>30/04/2022</small> | Completed: <small>02/05/2022</small></i></marquee>
    </div>
  )
}

export default Marquee