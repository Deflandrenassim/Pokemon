import { useParams } from "react-router-dom";
import './PokemonStatById.css';
import { Button } from "../../components/Button/Button";
import { Card } from "../../components/Card/Card";
import { useGetAllPokemons } from "../../hooks/useGetAllPokemons";
import { Stat } from "../../components/Chart/Stat";
import { Picture } from '../../components/Picture/Picture';
import { VariantPokemon } from "../pokemons/VariantPokemon";
import { useGetDescriptionPokemon } from "../../hooks/useGetDescriptionPokemon";
import { GetDescription } from "../../utils/GetDescription";
import { useNavigate } from "react-router-dom";
export function PokemonStatById() {
    const { id } = useParams();
    const pokemons = useGetAllPokemons();
    const parseId = parseInt(id, 10);
    const filterpokemonbyId = pokemons.filter(e => e.id === parseId);
    const descriptionbyId = useGetDescriptionPokemon(id);
    const copyDescriptionBydId = descriptionbyId;
    const getDescriptionPokemon = GetDescription(copyDescriptionBydId, "fr");
    const navigate = useNavigate();

    return (
        <>
        <div className="position-btn-back">
        <Button size="M" onClick={() => navigate('/')}> Back</Button>
        </div>
            {filterpokemonbyId.map((stat) => (
                <div key={stat.id}>
                    <div className="pokemon_stat_name"> {stat.name}</div>
                    <div className="pokemon_container">
                        <Picture src={stat.sprites.other.dream_world.front_default} size="xl" />
                        <Card size="M" variant="allPok">
                            <div className="type_by_id">
                                TYPE : <VariantPokemon variants={stat} />
                            </div>
                            <span> DESCRIPTION : {getDescriptionPokemon} </span>
                            <div className="pokemon_stat">
                                <Stat stats={stat} />
                            </div>
                        </Card>
                    </div>
                </div >
            ))
            }
        </>
    )
}