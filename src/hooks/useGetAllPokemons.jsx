import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetAllPokemons = () => {
    const [pokemons, setPokemons] = useState(null);
    const AllPokemons = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then((response) => {
                console.log(response);
                setPokemons(response.data);
            });
    };
    useEffect(() => {
        AllPokemons();
    }, [])

    return { pokemons };

}