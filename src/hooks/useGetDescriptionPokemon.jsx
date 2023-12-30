import { useEffect, useState } from 'react';
import axios from 'axios';

export function useGetDescriptionPokemon(id) {
    const [description, setDescription] = useState();
    console.log("id", id);

    useEffect(() => {
        const callApiDescription = async () => {
            try {
                await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
                    .then((res) => {
                        console.log('call data', res.data)
                        setDescription(res);
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
