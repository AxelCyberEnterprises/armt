import Footer from '@/components/Footer/Footer'
import Header from '@/components/header/Header'
import React from 'react'
import "./page.css"

function page() {
  return (
    <div className="nearby__container">
      <div className="nearby__container-header">
        <Header  activeLink={"/nearby"}/>
      </div>
      <div className="nearby__container-topic" >
        <p>Nearby</p>
      </div>
      <div className="nearby__container-body">
        <div className="nearby__container-body_left">
          <div className="nearby__container-input_location">
            <div className="nearby__container-input">
              <input placeholder="Enter location" />
              <img src="/cancle.png" alt="" />
            </div>
            <div className="nearby__container-location">
              <img src="/location.png" alt="" />
              <button>Use my location</button>
            </div>
          </div>
          <button>Go</button>
        </div>
        <div className="nearby__container-body_right">
          <button>Landmarks</button>
          <div className="nearby__container-body_right-text">
            <p>Exit of Domestic Airport to Airport Train station = Less than 700 steps</p>
            <p>Exit of International Airport to Airport Train station = 210 steps</p>
            <p>Exit of International Airport to Kubwa station = 150 steps</p>
            <p>Exit of International Airport to DeiDei station = 50 steps</p>
            <p>Exit of International Airport to Gwagwalada station = 350 steps</p>
            <p>Exit of International Airport to Kagini station = 900 steps</p>
            <p>Exit of International Airport to Wupa station = 300 steps</p>
            <p>Exit of International Airport to Bassanjiwa station = 100 steps</p>
            <p>Exit of International Airport to Gbazango station = 250 steps</p>
          </div>
        </div>
      </div>

      <div className="nearby__container-footer">
        <Footer />
      </div>
    </div>
  )
}

export default page