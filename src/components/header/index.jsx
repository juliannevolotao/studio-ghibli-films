import React from 'react';

import LogoImage from '../../assets/logoSGFilms.png';

export default function Header(){

  return (
    <nav>
      <img src={LogoImage} alt="Logo SG Films" />
    </nav>
  )
}