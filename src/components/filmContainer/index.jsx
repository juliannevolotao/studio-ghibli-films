import React, {useEffect, useState} from 'react';

import './styles.css';

export default function FilmContainer({
  isGrid = true,
  title = "",
  description = "",
  director = ""
}) {
  const [shortDescrip, setShortDescrip] = useState("");

  useEffect(() => {
    let splittedDescrip = description.split(" ");
    let joinedDescrip = [];
    for(let i = 0; i < 20; i++) {
      joinedDescrip.push(splittedDescrip[i]);
    }
    let newDescrip = joinedDescrip.join(" ") + "...";
    setShortDescrip(newDescrip);
  }, [description])


  return (
    <div className={`film__container ${isGrid ? "" : "film__display__row" }`}>
      <h3> {title} </h3>
      <p className="film__description"> {shortDescrip} </p>
      <div className="film__director">
        <p > Director </p>
        <h5> {director} </h5>
      </div>
    </div>
  )
}