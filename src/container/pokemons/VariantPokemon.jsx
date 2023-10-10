import { Variant } from '../../components/Variant/Variant'

export function VariantPokemon({ variants }) {
    return (
        <>
            {variants.types.map((variant) => (
                <Variant type={variant.type.name}>
                    {variant.type.name}
                </Variant>
            ))}
        </>
    )
}