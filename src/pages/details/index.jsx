import React, { useState, useEffect } from "react";

import "./styles.css";
import CastContainer from "../../components/CastContainer";

import { useParams, useHistory } from "react-router-dom";

import api from "../../services/api";

export default function Details() {
  const [filmData, setFilmData] = useState({});
  const [castData, setCastData] = useState([]);

  const filmID = useParams().id;
  const history = useHistory();

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        let response = await api.get(`/films/${filmID}`);
        setFilmData(response.data);
        window.scrollTo(0, 0);
      } catch (err) {
        history.push("/error");
      }
    };

    const fetchCast = async () => {
      try {
        let { data } = await api.get("/people");
        let id;

        let castInFilm = data.filter((person) => {
          person.films.filter((film) => {
            let splittedUrl = film.split("/");
            id = splittedUrl[splittedUrl.length - 1];
            return film;
          
          });

          return id === filmID;
        });

        setCastData(castInFilm);
      } catch (err) {

      }
    };

    fetchFilm();
    fetchCast();
  }, [ history, filmID]);

  return (
    <main>
      <section className="container__details">
        <div className="details__head">
          <h2 className="details__head__title" onClick={() => history.goBack()}> All films &gt; </h2>
          <span className="details__head__subtitle"> {filmData.title} </span>
        </div>

        <h1 className="details__film__title"> {filmData.title} </h1>
        <ul className="details__film__info">
          <li>
            <h3> Director: </h3>
            <p> {filmData.director} </p>
          </li>
          <li>
            <h3> Producer: </h3>
            <p> {filmData.producer} </p>
          </li>
          <li>
            <h3> Release date: </h3>
            <p> {filmData.release_date} </p>
          </li>
        </ul>

        <article className="details__film">
          <div className="details__film__descrip">
            <h3>Description</h3>
            <p> {filmData.description} </p>
          </div>

          <div className="details__film__score">
            <div className="film__score__content">
              <h4> {filmData.rt_score} </h4>
              <p> Rotten Tomatoes score </p>
            </div>
          </div>
        </article>

        <article className="details__film__cast">
          <h5> Cast </h5>
          <ul>
            {castData.map((person) => (
              <li>
                <CastContainer
                  name={person.name}
                  age={person.age}
                  gender={person.gender}
                />
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
