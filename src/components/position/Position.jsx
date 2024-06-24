"use client"

import React from 'react'
import Link from 'next/link'
import "./Position.css"

function Position({ job }) {
  return (
    <div className="position__container">
      <div className="position__container-left">
        <h2>{job.jobDescription}</h2>
        <small>{job.jobDuration}</small>
      </div>
      <div className="position__container-right">
        <p>{job.location}</p>
      <div className="position__container-right_link">
        <Link href={`/careers/${(job.jobDescription)}`} className="position-green">View Details</Link>
        <img src="/arrow2.png" alt=""/>
      </div>
      </div>
    </div>
  )
}

export default Position