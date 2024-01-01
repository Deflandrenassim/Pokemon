import { useEffect, useState } from 'react';
import axios from 'axios';

export function useGetDescriptionPokemon(id) {
    const [description, setDescription] = useState();

    useEffect(() => {
        const callApiDescription = async () => {
            try {
                await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
                    .then((res) => {
                        setDescription(res.data);
                    })
            }
            catch (error) {
                console.log("err description ", error);
            }
        }
        callApiDescription();
    }, [])
    return description;
}