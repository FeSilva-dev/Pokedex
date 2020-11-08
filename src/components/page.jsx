import React, { useState } from 'react'
import axios from 'axios'
import { FaSearch } from 'react-icons/fa'
import { BiMaleSign, BiFemaleSign } from 'react-icons/bi'
import './page.css'

const Pokedex = () => {

    const [pokemon, setPokemon] = useState({})
    const [id, setId] = useState('')
    const [error, setError] = useState('')

    function handleSearch() {
        if(id){
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(({data}) => {
                setPokemon(data)
                setError('')
            }).catch((err) => {
                setError(`Não foi possivel encontrar um pokemon com o nome: ${id}`)
                setPokemon({})
            })
        }
    }

    if(error){
        return(
            <div id="pokedex">
            <div className="container">
                <div className="search">
                    <div className="input-block">
                        <input
                            placeholder="Digite um nome ou um id"
                            value={id.toLowerCase()}
                            onChange={({ target }) => setId(target.value)}
                            type="text"
                        />
                    </div>
                    <div className="button">
                        <FaSearch className="fa" size={30} onClick={handleSearch} />
                    </div>
                </div>

                <div className="error">
                    <p>{error}</p>
                </div>
            </div>
        </div>  
        )
    }

    return(
        <div id="pokedex">
            <div className="container">
                <div className="search">
                    <div className="input-block">
                        <input
                            placeholder="Digite um nome ou um id"
                            value={id.toLowerCase()}
                            onChange={({ target }) => setId(target.value)}
                            type="text"
                        />
                    </div>
                    <div className="button">
                        <FaSearch className="fa" size={30} onClick={handleSearch} />
                    </div>
                </div>


                <div className="infos">
                    <div className="name">
                        <h1>{pokemon.name}</h1>
                    </div>
                    <div className="picture">
                        {
                            pokemon?.sprites?.other?.dream_world?.front_default == null &&
                            <img src={pokemon?.sprites?.front_default} />
                        }
                        <img src={pokemon?.sprites?.other?.dream_world?.front_default} />
                    </div>
                    <div className="gender">
                        <h1>Genero</h1>
                        <div className="generos">
                            
                            { 
                                 pokemon?.sprites?.front_female == null ? (
                                    <div className="male">
                                        <BiMaleSign size={25}/>
                                        <span>Masculino</span>
                                    </div> 
                                ) : (
                                    <React.Fragment>
                                        <div className="male 1">
                                            <BiMaleSign size={25}/>
                                            <span>Masculino</span>
                                        </div> 
                                        <div className="female">
                                            <BiFemaleSign size={25}/>
                                            <span>Feminino</span>
                                        </div>
                                    </React.Fragment>
                                )
                            }
                        </div>
                    </div>
                    <div className="adittional">
                        <h1>Informações adicionais</h1>
                        <div className="box">
                            <div className="column">
                                <ul>
                                    <li>
                                        <span>Altura</span>
                                        <span>{pokemon.height}</span>
                                    </li>
                                    <li>
                                        <span>Peso</span>
                                        <span>{pokemon.weight}</span>
                                    </li>
                                    <li>
                                        <span>Habilidades</span>
                                        {pokemon?.abilities?.map( ({ ability }) => (
                                            <p className="ability" key={ability.url}>{ability.name}</p>
                                        ))}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="type">
                        <h1>Tipo</h1>
                        <div className="all">
                            {pokemon?.types?.map( ({ type }) => (
                                <div className={"single " + type.name}>
                                    <p key={type.url}>{type.name}</p>
                                </div>
                            )) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pokedex