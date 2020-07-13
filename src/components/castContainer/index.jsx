import React from 'react';

import './styles.css';

export default function CastContainer({
  name = "",
  age = 0,
  gender = "male"
}) {

  return (
    <div className="cast__container">
      <h6> {name} </h6>
      <div className="cast__info">
        <p> {gender !== 'NA' ? gender : ""} </p>
        <p> {Number(age) ? age + " years" : ""} </p>
      </div>
    </div>
  )
}