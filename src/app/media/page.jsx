import Extras2 from '@/components/Extras2/Extras2'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/header/Header'
import React from 'react'
import "./page.css"

function page() {
  return (
    <div className="media__container">
      <div className="media__container-header">
        <Header />
      </div>
      <div className="media__container-body">
        <div className="media__container-body_section1">
          <h1>Media</h1>
        </div>
        <div className="media__container-body_section2">
          <div className="media__container-body_section2-left">
            <div className="media__container-body_section2-topic">
              <h3>Commercial media & partnerships</h3>
              <p>Our Press office manages requests from journalists, news photographers and crews, and our Film Offices help filmakers and photographers film commercially on our transport networks</p>
            </div>
            <div className="media__container-column_container">
              <div className="media__container-column">
                <div className="media__container-extras_container">
                  <img src="/media2.png" alt="" />
                  <Extras2 extrasHead="Photos" extrasBody="Licence our photography for use and access our image gallery"/>
                </div>
                <Extras2 extrasHead="Press releases" extrasBody="See our latest press releases and browse the archive"/>
                <Extras2 extrasHead="Design standards" extrasBody="License our fonts and logos and apply our design guidelines"/>
              </div>
              <div className="media__container-column">
                <div className="media__container-extras_container">
                  <img src="/media1.png" alt="" />
                  <Extras2 extrasHead="Filming & Photography" extrasBody="Get permission before commercial filming on our networks."/>
                </div>
                <Extras2 extrasHead="Map Licencing" extrasBody="Did you know the world famous Underground map is copyrighted?"/>
              </div>
            </div>
          </div>
          <div className="media__container-body_section2-right">
            <div className="media__container-right_section1">
              <h3>Media</h3>
            </div>
            <div className="media__container-right_section2">
              <div className="media__container-span">
                <span>Press Release</span>
                <span>Photos</span>
                <span>Contact the Press Office</span>
                <span>Filming & Photography</span>
              </div>
            </div>
            <div className="media__container-right_section3">
              <div className="media__container-right_section3-contact">
                <h2>Contact us at</h2>
                <p>We’re open 24 hours a day, 7 days a week.</p>
              </div>
              <div className="media__container-right_section3-call">
                <h2>Call</h2>
                <p>
                  <span className="green-link">Charges apply</span> +234 802
                  369 9037
                </p>
                <p>+234 906 417 3170</p>
                <p>+234 815 233 9568</p>
              </div>

              <div className="media__container-right_section3-call">
                <h2>Email</h2>
                <p>info@armt.ng</p>
                <p>support@armt.ng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="media__container-footer">
        <Footer />
      </div>
    </div>
  )
}

export default page