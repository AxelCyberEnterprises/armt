import Extras2 from '@/components/Extras2/Extras2'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/header/Header'
import React from 'react'
import "./page.css"

function page() {
  return (
    <div className="business__container">
      <div className="business__container-header">
        <Header />
      </div>
      <div className="business__container-body">
        <div className="business__container-body_section1">
          <h1>Business & Advertisers</h1>
        </div>
        <div className="business__container-body_section2">
          <div className="business__container-body_column">
            <div className="business_container-extras">
              <img src="/business1.png" alt="" />
              <Extras2 extrasHead="Property" extrasBody="Information about property development and partnerships, and residential properties"/>
            </div>
            <div className="business_container-extras">
              <img src="/call.png" alt="" />
              <Extras2 extrasHead="Consulting" extrasBody="Make use of our transport knowledge and expertise to plan your project"/>
            </div>
          </div>
          <div className="business__container-body_column">
            <div className="business_container-extras">
              <img src="/business2.png" alt="" />
              <Extras2 extrasHead="Commercial media & partnerships" extrasBody="Access the Abuja audience through advertising or partnership with us"/>
            </div>
            <div className="business_container-extras">
              <img src="/business3.png" alt="" />
              <Extras2 extrasHead="Travel guidance for business" extrasBody="Help your employees make more informed and sustainable decisions about their commute."/>
            </div>
            <Extras2 extrasHead="Open Innovation" extrasBody="We want to make it easy for market innovators to work with us"/>
          </div>
          <div className="business__container-body_advert">
            <div className="advert-container">
              <h3>Advertise with us</h3>
              <p>We offer 12 stations big enough to accomodate enough people to advertise to.</p>
              <div className="advert-container-button">
                <p>Advertising on the network</p>
                <img src="/arrow.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default page