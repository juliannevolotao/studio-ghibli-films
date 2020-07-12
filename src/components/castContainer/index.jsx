import React from 'react';

import './styles.css';

export default function CastContainer({
  name = "",
  age = 0,
  gender = "male"
}) {

  return (
    <div className="castContainer">
      <h6> {name} </h6>
      <div className="personInfo">
        <p> {gender !== 'NA' ? gender : ""} </p>
        <p> {Number(age) ? age + " years" : ""} </p>
      </div>
    </div>
  )
}