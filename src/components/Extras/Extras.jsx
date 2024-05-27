import React from "react";
import Image from "next/image";
import "./Extras.css";

function Extras(props) {
  return (
    <div className="extras__container">
      <div className="extras__container-left">
        <h2>{props.extrasHead}</h2>
        <p>{props.extrasBody}</p>
      </div>
      <div className="extras__container-right">
        <img src="/arrow.png" alt="" width={24} height={24} />
      </div>
    </div>
  );
}

export default Extras;
