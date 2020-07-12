import React, {useState, useEffect} from 'react';

import './styles.css';

import {useParams, useHistory} from 'react-router-dom';

import api from '../../services/api';

export default function Details() {
  const [filmData, setFilmData] = useState({})

  const filmID = useParams().id;

  useEffect(() => {
    const fetchFilm = async () => {

      try {
        let response = await api.get(`/films/${filmID}`);
        setFilmData(response.data);
      }
      catch (err) {
        console.log("*** Film.Details", err)
      }
      
    };

    fetchFilm();
  }, []);
  
  return (
    <main>
      <section className="marginContainer">

      </section>
    </main>
  )
}