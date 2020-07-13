import React, { useEffect, useState } from "react";

import "./styles.css";
import { FaThList, FaTh } from "react-icons/fa";

import { useHistory } from "react-router-dom";

import FilmContainer from "../../components/FilmContainer";

import api from "../../services/api";

export default function Details() {
  const [films, setFilms] = useState([]);
  const [isGrid, setIsGrid] = useState(true);

  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("listDisplayGrid")) {
      localStorage.getItem("listDisplayGrid") === "true"
        ? setIsGrid(true)
        : setIsGrid(false);
    } else {
      localStorage.setItem("listDisplayGrid", isGrid);
    }

    const fetchFilms = async () => {
      try {
        let response = await api.get("/films");
        setFilms(response.data);
      } catch (err) {
        history.push("/error");
      }
    };

    fetchFilms();
  }, [isGrid]);

  const handleSeeDetails = (id) => {
    history.push(`/details/${id}`);
  };

  const handleButtonList = (grid) => {
    setIsGrid(grid);
    localStorage.setItem("listDisplayGrid", grid);
  };

  return (
    <main>
      <section className="container__index">
        <div className="index__head">
          <h1 className="index__head__title"> All films </h1>
          <div className="index__head__display">
            <button onClick={() => handleButtonList(true)}>
              <FaTh
                size={18}
                className={`display__type ${
                  isGrid ? "display__type--active" : ""
                }`}
              />
            </button>
            <button onClick={() => handleButtonList(false)}>
              <FaThList
                size={18}
                className={`display__type ${
                  isGrid ? "" : "display__type--active"
                }`}
              />
            </button>
          </div>
        </div>

        <article className="films">
          <ul className={`${isGrid ? "films__grid" : "films__list"}`}>
            {films.map((film) => (
              <li
                key={film.id}
                className={`${isGrid ? "grid__film__box" : "list__film__box"}`}
                onClick={() => handleSeeDetails(film.id)}
              >
                <FilmContainer
                  isGrid={isGrid}
                  title={film.title}
                  description={film.description}
                  director={film.director}
                />
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
