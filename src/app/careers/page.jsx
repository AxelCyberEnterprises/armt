import Extras from '@/components/Extras/Extras';
import Header from '@/components/header/Header'
import Footer from '@/components/Footer/Footer'
import Position from '@/components/position/Position'
import React from 'react'
import "./page.css"

function page(props) {


  const data = [
    {
      id: 1,
      jobDescription: "Train Conductor",
      jobDuration: "Full time",
      location: "Abuja Metro"
    },
    {
      id: 2,
      jobDescription: "Station Superintendent",
      jobDuration: "Full time",
      location: "Gwagwa"
    },
    {
      id: 3,
      jobDescription: "Train Driver",
      jobDuration: "Full time",
      location: "Bassanjiwa"
    },
    {
      id: 4,
      jobDescription: "Dispatcher",
      jobDuration: "Full time",
      location: "Airport"
    },
    {
      id: 5,
      jobDescription: "Freight Conductor",
      jobDuration: "Part-time",
      location: "GwaGwa"
    },
    {
      id: 6,
      jobDescription: "Ticket Controller",
      jobDuration: "Full time",
      location: "Idu"
    },
    {
      id: 7,
      jobDescription: "Porter",
      jobDuration: "Full time",
      location: "Idu"
    },
    {
      id: 8,
      jobDescription: "Station Superintendent",
      jobDuration: "Full time",
      location: "Idu"
    },
    {
      id: 9,
      jobDescription: "General Station Superintendent",
      jobDuration: "Full time",
      location: "All station"
    },
    {
      id: 10,
      jobDescription: "Mechanical Engineerr",
      jobDuration: "Full time",
      location: "Gwagwa"
    },
  ];





  return (
    <div className="careers__container">
      <div className="careers__container-header">
        <Header />
      </div>
      <div className="careers__container-hero">
        <div className="careers__container-hero_text">
          <p>Career</p>
        </div>
      </div>

      <div className="careers__container-section2">
        <h4>OPEN POSITIONS</h4>
        <h2>Opportunities Await</h2>
        <p>Join us in transforming the Abuja rail experience</p>
      </div>

      <div className="careers__container-section3">
        <p>Open position</p>
        <div className="careers__container-section3_list">
          {data.map((data) => (
            <Position
              key={data.id} 
              jobDescription={data.jobDescription} 
              jobDuration={data.jobDuration} 
              location={data.location} 
            />
          ))}
        </div>
      
      </div>

      <div className="careers__container-section4">
        <div className="careers__container-section4_extras">
          <img src="/career-help.png" alt="" />
          <Extras extrasHead="Need help applying?" extrasBody="Access our detailed preparation guides for smooth and successful application instructions"/>
        </div>
        <div className="careers__container-section4_extras">
          <img src="/career-graduate.png" alt="" />
          <Extras extrasHead="Graduates & placements" extrasBody="Apply now for our graduate schemes and internships" />
        </div>
      </div>


      <div className="careers__container-footer">
        <Footer />
      </div>
    </div>
  )
}

export default page