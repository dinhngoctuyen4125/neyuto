import React from 'react'

const Food = ({ food }) => {
  const style = {
    left: `${food[0]}%`,
    top: `${food[1]}%`
  }
  return (
    <div className='snakexenzia-food' style={style}></div>
  )
}

export default Food