import React from 'react'

const Header = ({ children }) => {
  return (
    <div style={{'maxWidth': '800px', 'minWidth': '500px', 'margin': 'auto', 'position': 'relative'}}>
      <div className='container-box d-flex flex-column align-items-center pt-3'>
        {children}
      </div>
      <div className='container-transparent'></div>
    </div>
  )
}

export default Header