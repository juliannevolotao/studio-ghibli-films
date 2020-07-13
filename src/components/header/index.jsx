import React from 'react';

import LogoImage from '../../assets/logoSGFilms.png';
import './styles.css';

import { useHistory } from 'react-router-dom';

export default function Header(){
  let history = useHistory();

  return (
    <nav className="header__container">
      <ul>
        <img onClick={() => history.push("/")} src={LogoImage} alt="Logo SG Films" />
      </ul>
    </nav>
  )
}