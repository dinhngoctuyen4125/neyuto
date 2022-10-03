import React from 'react'
import SlideShow from './SlideShow'

const Header = () => {
  const info1 = [
    {
      title: 'Email:',
      value: 'tuyenotk4125@gmail.com',
    },
    {
      title: 'Birthday:',
      value: '04/01/2005',
    }
  ]
  const info2 = [
    {
      title: 'Phone:',
      value: '**6969****',
    },
    {
      title: 'Address:',
      value: 'Hà Nội',
    }
  ]
  return (
    <div>
      <div className='header-container mb-5'>
        <div className='container-box container-fluid p-4'>
          <div className='row'>
            <div className='col-lg-6 devided-line'>
              <div className='row'>
                <div className='col-md-6 d-flex justify-content-center'>
                  <SlideShow />
                </div>
                <div className='col-md-6'>
                  <div className='cachdong'></div>
                  <p className='text-center'><b>Đinh Ngọc Tuyển</b></p>
                  <p className='text-center'><small>@dinhngoctuyen4125</small></p>
                  <br/>
                  <div className='d-flex justify-content-center'>
                    <span style={{'margin': '12px'}}><a target='_blank' rel="noreferrer" href='https://www.facebook.com/dinhngoctuyen4125/'><i className="fa-brands fa-facebook fa-2xl"></i></a></span>
                    <span style={{'margin': '12px'}}><a target='_blank' rel="noreferrer" href='https://github.com/dinhngoctuyen4125'><i className="fa-brands fa-github fa-2xl"></i></a></span>
                    <span style={{'margin': '12px'}}><a target='_blank' rel="noreferrer" href='https://stackoverflow.com/users/20146753/neyuto'><i className="fa-brands fa-stack-overflow fa-2xl"></i></a></span>
                  </div>
                  <br/>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='cachdong'></div>
              <div className='row'>
                <div className='col-md-6'>
                  {
                    info1.map((item, index) => {
                      return (
                        <div key={index} className='underline'>
                          <p className='text-center'><b>{item.title}</b></p>
                          <p className='text-center'><small>{item.value}</small></p>
                        </div>
                      )
                    })
                  }
                </div>
                <div className='col-md-6'>
                  {
                    info2.map((item, index) => {
                      return (
                        <div key={index} className='underline'>
                          <p className='text-center'><b>{item.title}</b></p>
                          <p className='text-center'><small>{item.value}</small></p>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container-transparent'></div>
      </div>
    </div>
  )
}

export default Header