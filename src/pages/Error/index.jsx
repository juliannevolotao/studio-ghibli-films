import React from 'react';

import { useHistory } from 'react-router-dom';

import './styles.css';
import { FaArrowLeft } from 'react-icons/fa';

export default function Error(){
  const history = useHistory();

  return (
    <main>
      <section className="container__error">
        <article className="error">
         <div className="error__content">
          <h2> Ops! </h2>
          <h1> Some error occurred, try again. </h1>
          <button className="error__button" onClick={() => history.goBack()}> <FaArrowLeft /> Back </button>
         </div>
        </article>
      </section>
    </main>
  )
}