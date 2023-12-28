import { useParams } from "react-router-dom";
import { useGetAllPokemons } from "../../hooks/useGetAllPokemons";

export function PokemonStatById() {
    const { id } = useParams();
    const pokemons = useGetAllPokemons();

    const parseId = parseInt(id, 10);
    const filterpokemonbyId = pokemons.filter(e => e.id === parseId);
    console.log(filterpokemonbyId)
    return (
        <div>
            {filterpokemonbyId.map((stat) => (
                <div key={stat.id}> {stat.name}</div>
            ))}
        </div>
    )
}