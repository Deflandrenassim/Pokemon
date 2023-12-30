import { useParams } from "react-router-dom";
import './PokemonStatById.css';
import { Card } from "../../components/Card/Card";
import { useGetAllPokemons } from "../../hooks/useGetAllPokemons";
import { Stat } from "../../components/Chart/Stat";
import { Picture } from '../../components/Picture/Picture';
import { VariantPokemon } from "../pokemons/VariantPokemon";
import { useGetDescriptionPokemon } from "../../hooks/useGetDescriptionPokemon";

export function PokemonStatById() {
    const { id } = useParams();
    const pokemons = useGetAllPokemons();
    const parseId = parseInt(id, 10);
    const filterpokemonbyId = pokemons.filter(e => e.id === parseId);
    const description = useGetDescriptionPokemon(id);

    console.log("description", description);

    return (
        <div>
            {filterpokemonbyId.map((stat) => (
                <>
                    <div className="pokemon_stat_name"> {stat.name}</div>
                    <Card>
                        <div key={stat.id}>
                            <Picture src={stat.sprites.other.dream_world.front_default} size="xl" />
                            <VariantPokemon variants={stat}></VariantPokemon>
                        </div>
                        <div className="pokemon_stat">
                            <Stat stats={stat} />
                        </div>
                    </Card>
                </>
            ))}
            <div>

            </div>
        </div>
    )
}