import { Button } from '../../components/Button/Button';
import { TypePokemon } from '../../data/typePokemon'
import { VariantBtn } from '../../components/Variant/Variant';

export function ButtonsTypes() {


    return (
        <div>
            {TypePokemon.map((type) => (
                <VariantBtn type={type.name}> {type.name}</VariantBtn>
            ))}
        </div>
    )
}