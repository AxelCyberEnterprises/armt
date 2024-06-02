import React from 'react'
import "./Position.css"

function Position(props) {
  return (
    <div className="position__container">
      <div className="position__container-left">
        <h2>{props.jobDescription}</h2>
        <small>{props.jobDuration}</small>
      </div>
      <div className="position__container-right">
        <p>{props.location}</p>
      <div className="position__container-right_link">
        <p className="position-green">View Details</p>
        <img src="/arrow2.png" alt=""/>
      </div>
      </div>
    </div>
  )
}

export default Position