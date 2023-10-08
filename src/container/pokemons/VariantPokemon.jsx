export function VariantPokemon({ type }) {
    return (
        <div>
            {type.abilities.map((variant) => (
                <div>
                    {variant.ability.name}
                </div>
            ))}
        </div>
    )
}