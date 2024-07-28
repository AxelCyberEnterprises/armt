import React from 'react'
import Header from '@/components/header/Header'
import "./page.css"
import Footer from '@/components/Footer/Footer'

function Page() {
  return (
    <div className="blog__container">
      <div className="blog__container-header">
        <Header />
      </div>
      <div className="blog__container-body">
        <div className="blog__container-body_section1">
          <h2>Film & Photography</h2>
        </div>
        <div className="blog__container-body_section2">
          <h3>Filming & Photography</h3>
          <p>
            Filming and photography are core...
          </p>
        </div>
        <div className="blog__container-body_section3">
          <img src="/media1.png" alt="filming" />
        </div>
        <div className="blog__container-body_section2">
          <h3>Learn more about filming</h3>
          <p>Filming and photography are core...</p>
        </div>
      </div>
      <div className="blog__container-footer">
        <Footer />
      </div>
    </div>
  )
}

export default Page