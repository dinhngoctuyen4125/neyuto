import React from 'react'
import Introduction from './tabs/Introduction'
import Projects from './tabs/Projects'

const Content = () => {
  const tabs = ['Introduction', 'Projects']
  return (
    <div>
      <div className='content-container mb-5'>
        <div className='container-box container-fluid p-4'>
          <div style={{borderBottom: '1px solid rgb(0, 174, 255)'}} className='mb-3 pb-3'>
            <ul className='nav nav-pills justify-content-center'>
              {
                tabs.map((tab, index) => <li className='nav-item' key={index}><a className={`nav-link ${index === 0 ? 'active' : ''}`} data-bs-toggle="pill" href={`#${tab}`}>{tab}</a></li>)
              }
            </ul>
          </div>
          <div className='tab-content'>
            <Introduction />
            <Projects />
          </div>
        </div>
        <div className='container-transparent'></div>
      </div>
    </div>
  )
}

export default Content