import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { TodosCSS } from './style.js';
import ImgPKM from '../../images/ImgPKM.svg';



export default function TodosPKM() {
  const [pokemons, setPokemons] = useState([]);

  // ['Pikachu', 'Magneton', 'Charmander']

  useEffect(() => {
    api.get('ability/?limit=5&offset=20').then(response => {
      // console.log(response.data.results);
      setPokemons(response.data.results);
    })
  }, []);

  useEffect(() => {
    localStorage.setItem('@PokeAPI:TodosPKMN', JSON.stringify(pokemons));
  })

  function capturar() {
    
    // setPokemons([...pokemons, `Novo projeto ${Date.now()}`]);
  }

  return (
    <TodosCSS>
      {pokemons.map(pokemon => (
        <div key={pokemon} className="box">
          <div className="dados-pkmn">
            <img src={ImgPKM} alt="" />
            <ul>
              <li><h3># NÚMERO POKEMON</h3></li>
              <li><h4>{pokemon.name}</h4></li>
              <li><h5>TIPO (TIPOS)</h5></li>
            </ul>
          </div>
          <button type="submit">Capturar</button>
        </div>
      ))}
    </TodosCSS>
  )
}