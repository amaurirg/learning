import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { MeusCSS } from './style.js';
import ImgPKM from '../../images/ImgPKM.svg';



export default function MeusPKMN() {
  const [projects, setProjects] = useState(['Pikachu', 'Magneton', 'Charmander']);

  // useEffect(() => {
  //   api.get('ability/?limit=100&offset=20').then(response => {
  //     // console.log(response.data.results);
  //     setProjects(response.data.results);
  //   })
  // }, []);

  function capturar() {
    // setProjects([...projects, `Novo projeto ${Date.now()}`]);
  }

  return (
    <MeusCSS>
      {projects.map(project => (
        <div className="box">
          <div className="dados-pkmn">
            <img src={ImgPKM} alt="" />
            <ul>
              <li><h3># NÚMERO POKEMON</h3></li>
              <li><h4>{project}</h4></li>
              <li><h5>TIPO (TIPOS)</h5></li>
            </ul>
          </div>
          <button type="submit">Soltar</button>
        </div>
      ))}
    </MeusCSS>
  )
}