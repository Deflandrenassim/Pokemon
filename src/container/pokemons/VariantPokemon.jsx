import { Variant } from '../../components/Variant/Variant'

export function VariantPokemon({ type }) {
    return (
        <>
            {type.abilities.map((variant) => (
                <Variant type={variant.ability.name}>
                    {variant.ability.name}
                </Variant>
            ))}
        </>
    )
}