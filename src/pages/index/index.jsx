import React from 'react';

import './styles.css';
import { FaThList, FaTh } from 'react-icons/fa';

export default function Details() {

  return (
    <main>
      <section className="marginContainer">
        <div className="containerHead">
          <h1> All films </h1>
          <div className="headButtons">
            <button> <FaTh size={18} className="listType" /> </button>
            <button> <FaThList size={18} className="listType" /> </button>
          </div>
        </div>

        <article className="filmsList">

        </article>
      </section>
    </main>
  )
}