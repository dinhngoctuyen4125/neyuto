import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SnakeXenzia from '../../assets/images/snakexenzia.jpg'
import Hangman from '../../assets/images/hangman.jpg'

const KetQua = () => {
  const [state, setState] = useState(10)

  const projectLeft = [
    {
      'img': Hangman,
      'name': 'Hangman',
      'date': '21/03/2022',
      'url': 'hangman',
    },
  ]
  const projectRight = [
    {
      'img': SnakeXenzia,
      'name': 'Snake Xenzia',
      'date': '17/03/2022',
      'url': 'snakexenzia',
    },
  ]
  return (
    <div className='tab-pane fade show' id='Projects'>
      <h3 className='text-center pb-3'>Giải trí nha!</h3>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6'>
            {
              projectLeft.map((item, index) => {
                const url = '/' + item.url
                return (
                  <div className='project-box' key={index}>
                    <img src={item.img} alt={item.name} className='project-img' onMouseOver={() => setState(index)}/>
                    {
                      state === index && <div className='project-transparent'>
                        <Link to={url}><b>{item.name}</b></Link>
                        <p className='text-success'><small>Created: {item.date}</small></p>
                      </div>
                    }
                  </div>
                )
              })
            }
          </div>
          <div className='col-lg-6'>
            {
              projectRight.map((item, index) => {
                const url = '/' + item.url
                return (
                  <div className='project-box' key={index}>
                    <img src={item.img} alt={item.name} className='project-img' onMouseOver={() => setState(index + 3)}/>
                    {
                      state === (index + 3) && <div className='project-transparent'>
                        <Link to={url}><b>{item.name}</b></Link>
                        <p className='text-success'><small>Created: {item.date}</small></p>
                      </div>
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default KetQua