import { useState, useEffect } from 'react';
import PokemonDataView from './DataView';
import PokemonErrorView from './ErrorView';
import PokemonPendingView from './PendingView';
import pokemonAPI from '../../services/pokemon-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function  PokemonInfo({pokemonName}) {
const [pokemon, setPokemon] = useState(null)
const [error, setError] = useState(null)
const [status, setStatus] = useState(Status.IDLE)

 
  


  useEffect(() => {
    console.log('Эт опервый рендер')
    if(!pokemonName){
      console.log('pokemonName это пустая строка')
      return
    }
      setStatus(Status.PENDING)
      
      pokemonAPI
      .fetchPokemon(pokemonName)
      .then(pokemon => {  
        setPokemon(pokemon)
        setStatus(Status.RESOLVED)
      })
      .catch(error => {
        setError(error)
        setStatus(Status.REJECTED)
      });
    }, [pokemonName])

 

    if (status === 'idle') {
      return <div>Введите имя покемона.</div>;
    }

    if (status === 'pending') {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }

    if (status === 'rejected') {
      return <PokemonErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
 



// useEffect(() => {
//   setStatus(Status.PENDING)
//   pokemonAPI
//   .fetchPokemon(pokemonName)
//   .then(pokemon => { console.log(pokemon)
//     setPokemon(pokemon)
//     setStatus(Status.RESOLVED)
//   })
//   .catch(error => {
//     setError(error)
//     setStatus(Status.REJECTED)
//   });
// }, [pokemonName])
