import React from 'react';

import { useHistory } from 'react-router-dom';

import './styles.css';
import { FaArrowLeft } from 'react-icons/fa';

export default function NotFound(){
  const history = useHistory();


  return (
    <main>
      <section className="container__notfound">
        <article className="notfound">
         <div className="notfound__content">
          <h2> 404 </h2>
          <h1> Page not found! </h1>
          <button className="notfound__button" onClick={() => history.goBack()}> <FaArrowLeft /> Back </button>
         </div>
        </article>
      </section>
    </main>
  )
}