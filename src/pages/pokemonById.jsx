import { useParams } from "react-router-dom";
import { useGetAllPokemons } from "../hooks/useGetAllPokemons";
function PokemonById() {
    const { id } = useParams();
    const pokemons = useGetAllPokemons();
    console.log(pokemons)

    const parseId = parseInt(id, 10);
    const filterpokemonbyId = pokemons.filter(e => e.id === parseId);
    console.log("filter", filterpokemonbyId)
    console.log("by id", id);
    return (
        <div>
            je suis {id}
        </div>
    )
}
export default PokemonById;