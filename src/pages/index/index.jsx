import React, { useEffect, useState } from "react";

import "./styles.css";
import { FaThList, FaTh } from "react-icons/fa";

import { useHistory } from 'react-router-dom';

import FilmContainer from "../../components/filmContainer";

import api from "../../services/api";

export default function Details() {
  const [films, setFilms] = useState([]);
  const [isGrid, setIsGrid] = useState(true);

  const history = useHistory();

  useEffect(() => {
    if(localStorage.getItem("listDisplayGrid")) {
      localStorage.getItem("listDisplayGrid") === 'true' ? setIsGrid(true) : setIsGrid(false);
    } else {
      localStorage.setItem("listDisplayGrid", isGrid);
    }

    const fetchFilms = async () => {
     

      try {
        let response = await api.get("films");
        setFilms(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchFilms();
  }, [isGrid]);

  const handleSeeDetails = (id) => {
    history.push(`/details/${id}`);
  }

  const handleButtonList = (grid) => {
    setIsGrid(grid);
    localStorage.setItem("listDisplayGrid", grid);
  }

  return (
    <main>
      <section className="marginContainer">
        <div className="containerHead">
          <h1> All films </h1>
          <div className="headButtons">
            <button onClick={() => handleButtonList(true)}>
              <FaTh
                size={18}
                className={`listType ${isGrid ? "activeButtonColor" : "disabledButtonColor"}`}
              />
            </button>
            <button onClick={() => handleButtonList(false)}>
              <FaThList
                size={18}
                className={`listType ${isGrid ? "disabledButtonColor" : "activeButtonColor"}`}
              />
            </button>
          </div>
        </div>

        <article className="films">
          <ul className={`${isGrid ? "filmsGrid" : "filmsList"}`}>
            {films.map((film) => (
              <li
                key={film.id}
                className={`${isGrid ? "gridFilmBox" : "listFilmBox"}`}
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
