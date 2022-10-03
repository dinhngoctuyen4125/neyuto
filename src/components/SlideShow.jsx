import React, { useEffect, useState } from 'react'
import Avatar1 from '../assets/images/avatar1.jpg'
import Avatar2 from '../assets/images/avatar2.jpg'
import Avatar3 from '../assets/images/avatar3.jpg'

const SlideShow = () => {
  const [loops, setLoops] = useState(0)
  const slides = [Avatar1, Avatar2, Avatar3]

  const handleLoops = () => {
    setLoops(coin => (coin + 1)%(slides.length))
  }
  
  useEffect(() => {
    setInterval(handleLoops, 3000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='header-slideshow-slides'>
      {
        slides.map((slide, index) => {
          const style = {
            marginLeft: `${index === 0 ? (0 - loops*100) : 0}%`
          }
          return <img src={slide} key={index} alt='dinhngoctuyen' title='Hello mng nhé <3' style={style} />
        })
      }
    </div>
  )
}

export default SlideShow