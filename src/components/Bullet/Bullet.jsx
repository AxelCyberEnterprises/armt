import React from 'react'
import './Bullet.css'

function Bullet(props) {
  return (
    <div className="bullet__container">
      <img src="/bullet.png" alt="" />
      <p>{props.bulletText}</p>
    </div>
  )
}

export default Bullet