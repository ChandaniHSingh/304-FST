import React from 'react'
import IHome from '../../src/images/home.jpg'

function Home() {
  return (
    <>
      <div className="container-fluid">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <img src={IHome} height="90%" width="100%"/>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    </>
  )
}

export default Home