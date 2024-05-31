import Extras from '@/components/Extras/Extras'
import Header from '@/components/header/Header'
import React from 'react'
import "./page.css"

function page() {
  return (
    <div className="maps-container">
      <div className="maps__container-header">
        <Header activeLink={"/maps"} />
      </div>
      <div className="maps__container-topic">
        <h2>Maps</h2>
      </div>
      <div className="maps__container-section1">
        <div className="maps__container-section1_train">
          <img src="/train-img.png" alt="" />
          <Extras 
            extrasHead="Train maps"
            extrasBody="Maps and guides available to help you get around, 
            available to view."
          />
        </div>

        <div className="maps__container-section1_train">
          <img src="/bus-img.png" alt="" />
          <Extras
            extrasHead="Bus maps"
            extrasBody="Bus maps available for you to view"
          />
        </div>
      </div>

      <div className="maps__container-section2">
        <h2>Train maps</h2>
        <div className="maps__container-section2_img">
          <img src="/train-map.png" alt="" />
          <img src="/depot-map.png" alt="" />
        </div>
      </div>

      <div className="maps__container-section2">
        <h2>Bus maps</h2>
        <div className="maps__container-section3_img">
          <img src="/fct-map.png" alt="" />
        </div>
      </div>

      <div className="maps__container-footer">
        <Footer />
      </div>
    </div>
  )
}

export default page