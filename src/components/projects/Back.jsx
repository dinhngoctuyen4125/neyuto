import React from 'react'
import { Link } from 'react-router-dom'

const Back = () => {
  return (
    <div>
      <p><Link to='/neyuto/' className='position-fixed start-0 top-0 ms-2'><b>&laquo; Homepage</b></Link></p>
    </div>
  )
}

export default Back