import { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'


const Index = () => {
    const [pokemon, setPokemon] = useState({})
    const [id, setId] = useState('')
    const [error, setError] = useState('')

    function handleSearch() {
        if(id){
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(({data}) => {
                setPokemon(data)
                setError('')
            }).catch((err) => {
                setError(`Não foi possivel encontrar o pokemon: ${id}`)
                setPokemon({})
            })
        }
    }

    return(
        <div className="content">
            <input
                placeholder="Digite um ID"
                value={id}
                onChange={({ target }) => setId(target.value)}
            />
            <button onClick={handleSearch}>Pesquisar</button>
            <h1 className="warning">{error}</h1>
            <h1>Pokemon name</h1>
            <p>{pokemon.name}</p>
            <ul>
                {pokemon?.abilities?.map( ({ ability }) => (
                    <li key={ability.url}>{ability.name}</li>
                ))}
            </ul>
            <hr/>
            <h1>Types</h1>
            {pokemon?.types?.map( ({ type }) => (
                <p key={type.url}>Tipo: {type.name}</p>
            )) }

            <h1>Imagem</h1>
            {
                pokemon?.sprites?.other?.dream_world?.front_default == null &&
                <img src={pokemon?.sprites?.front_default} width={150} />

            }
            
            <img src={pokemon?.sprites?.other?.dream_world?.front_default} width={150} />
        </div>
    )
}

export default Index