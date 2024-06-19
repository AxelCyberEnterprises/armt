import React from 'react'
import "./Extras2.css"

function Extras2(props) {
  return (
    <div className="extras2__container">
      <div className="extras2__container-left">
        <h2>{props.extrasHead}</h2>
        <p>{props.extrasBody}</p>
      </div>
      <div className="extras2__container-right">
        <img src="/arrow.png" alt="" width={24} height={24} />
      </div>
    </div>
  )
}

export default Extras2