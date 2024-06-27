"use client"
import {React, useState, useEffect} from 'react'
import { idData } from "./idData"
import "./page.css"
import { useParams, useRouter } from 'next/navigation'
import Header from '@/components/header/Header'
import Bullet from '@/components/Bullet/Bullet'
import Footer from '@/components/Footer/Footer'
 
export default function Page() {
  const router = useRouter()
  const {id } = useParams();
  const [newIdData, setNewIdData] = useState()

  useEffect(() => {
    const newIdData = idData.filter((item) => item.id == id);
    setNewIdData(newIdData);
  }, [id, idData]);

  console.log(idData)
  console.log(newIdData)
  return (
    <div className="job__container">
      <div className="job__container-header">
        <Header />
      </div>
      <div className="job__container-body">
        <div className="job__container-body_section1">
          <h1>Civil Engineer</h1>
          <p>View all Jobs</p>
        </div>
        <div className="job__container-body_section2">
          <div className="job__container-body_section2-column">
            <p>Employment type</p>
            <h3>Full time</h3>
          </div>
          <div className="job__container-body_section2-column">
            <p>Location</p>
            <h3>Abuja Metro Station</h3>
          </div>
          <div className="job__container-body_section2-button">
            <button>Apply Now</button>
          </div>
        </div>
        <div className="job__container-body_section3">
          <h1>Overview</h1>
          <p>The Civil Engineer will be responsible for planning, designing, and overseeing construction and maintenance of rail mass transit systems. This includes working on projects that involve track alignment, station design, tunnels, bridges, and other related structures. The ideal candidate will have a strong background in civil engineering, excellent problem-solving skills, and the ability to work collaboratively in a team environment.</p>
        </div>
        <div className="job__container-body_section4">
          <h1>Key Responsibilities</h1>
          <div className="job__container-body_section4-bullet">
            <div className="job__container-body_section4-bullet_point">
              <h4>Design and Planning:</h4>
              <Bullet bulletText="Develop detailed designs for rail infrastructure, including tracks, stations, tunnels, and bridges."/>
              <Bullet bulletText="Conduct feasibility studies, site investigations, and environmental impact assessments."/>
              <Bullet bulletText="Prepare technical drawings, specifications, and cost estimates."/>
            </div>
            <div className="job__container-body_section4-bullet_point">
              <h4>Project Management:</h4>
              <Bullet bulletText="Coordinate with project managers, architects, and other engineering disciplines to ensure project objectives are met."/>
              <Bullet bulletText="Monitor project progress, ensuring that design specifications and safety standards are adhered to."/>
              <Bullet bulletText="Manage budgets, schedules, and resources effectively."/>
            </div>
            <div className="job__container-body_section4-bullet_point">
              <h4>Construction Oversight:</h4>
              <Bullet bulletText="Supervise construction activities to ensure compliance with design specifications and safety standards."/>
              <Bullet bulletText="Conduct site inspections and provide technical support during construction."/>
              <Bullet bulletText="Resolve any engineering issues that arise during the construction phase."/>
            </div>
            <div className="job__container-body_section4-bullet_point">
              <h4>Maintenance and Upgrades:</h4>
              <Bullet bulletText="Develop maintenance schedules and procedures for rail infrastructure."/>
              <Bullet bulletText="Assess the condition of existing infrastructure and recommend necessary upgrades or repairs."/>
              <Bullet bulletText="Implement new technologies and innovative solutions to improve infrastructure efficiency and safety."/>
            </div>
            <div className="job__container-body_section4-bullet_point">
              <h4>Regulatory Compliance:</h4>
              <Bullet bulletText="Ensure all engineering activities comply with relevant industry standards, regulations, and codes."/>
              <Bullet bulletText="Prepare and submit required documentation to regulatory bodies."/>
            </div>
            <div className="job__container-body_section4-bullet_point">
              <h4>Collaboration and Communication:</h4>
              <Bullet bulletText="Work closely with multidisciplinary teams, including electrical and mechanical engineers, urban planners, and environmental specialists."/>
              <Bullet bulletText="Communicate project updates and technical information to stakeholders, including management, contractors, and government officials."/>
            </div>
          </div>
        </div>
        <div className="job__container-body_section5">
          <h1>Preffered Qualification</h1>
          <div className="job__container-body_section5-paragraph">
            <p>Master’s degree in Civil Engineering or a related field.</p>
            <p>Experience with rail mass transit systems.</p>
            <p>Knowledge of sustainability practices and green building standards. </p>
            <p>Familiarity with local and international rail standards and regulations.</p>
          </div>
        </div>
        <div className="job__container-body_section5">
          <h1>Working Conditions</h1>
          <div className="job__container-body_section5-paragraph">
            <p>Office-based role with regular site visits.</p>
            <p>May require occasional evening or weekend work to meet project deadlines or address urgent issues.</p>
            <p>Travel may be required for site inspections, meetings, and project coordination.</p>
          </div>
        </div>

        <div className="job__container-body_section5">
          <h1>Benefits</h1>
          <div className="job__container-body_section4-bullet_point marg">
            <Bullet bulletText="Competitive salary and benefits package."/>
            <Bullet bulletText="Opportunities for professional development and career advancement."/>
            <Bullet bulletText="Collaborative and innovative work environment."/>
            <Bullet bulletText="Commitment to work-life balance and employee well-being."/>
              
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}