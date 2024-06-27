import Extras from '@/components/Extras/Extras';
import Header from '@/components/header/Header'
import Footer from '@/components/Footer/Footer'
import Position from '@/components/position/Position'
import React from 'react'
import "./page.css"

function page(props) {


  const jobs = [
    {
      id: 1,
      jobDescription: "Civil Engineer",
      jobDuration: "Full time",
      location: "Abuja Metro Station"
    },
    {
      id: 2,
      jobDescription: "Line Controller",
      jobDuration: "Full time",
      location: "Gwagwa Station"
    },
    {
      id: 3,
      jobDescription: "Train Driver",
      jobDuration: "Full time",
      location: "Bassanjiwa Station"
    },
    {
      id: 4,
      jobDescription: "Station Operations Maintenance Engineer",
      jobDuration: "Full time",
      location: "Airport Station"
    },
    {
      id: 5,
      jobDescription: "Track Vehicle Operators",
      jobDuration: "Part-time",
      location: "Gwagwa Station"
    },
    {
      id: 6,
      jobDescription: "Station Control Room Attendant",
      jobDuration: "Full time",
      location: "Idu Station"
    },
    {
      id: 7,
      jobDescription: "Telephone Customer Service",
      jobDuration: "Full time",
      location: "Idu Station"
    },
    {
      id: 8,
      jobDescription: "Track Engineer",
      jobDuration: "Full time",
      location: "Idu Station"
    },
    {
      id: 9,
      jobDescription: "Duty Station Manager",
      jobDuration: "Full time",
      location: "Airport Station"
    },
    {
      id: 10,
      jobDescription: "Mechanical Engineer",
      jobDuration: "Full time",
      location: "Gwagwa Station"
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
          {jobs.map((job) => (
            <Position job={job} key={job.id}/>
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