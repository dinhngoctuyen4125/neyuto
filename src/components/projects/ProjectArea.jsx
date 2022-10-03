import React from 'react'

const ProjectArea = ({ width, height, children }) => {
  return (
    <div className='p-4' style={{'position': 'relative', 'margin': 'auto', 'width': width, 'height': height}}>
      <div className='container-box d-flex flex-column justify-content-center align-items-center'>
        {children}
      </div>
      <div className='container-transparent'></div>
    </div>
  )
}

export default ProjectArea