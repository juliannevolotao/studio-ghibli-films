import React from 'react';

import LogoImage from '../../assets/logoSGFilms.png';
import './styles.css';

export default function Header(){

  return (
    <nav>
      <ul>
        <img src={LogoImage} alt="Logo SG Films" />

      </ul>
    </nav>
  )
}