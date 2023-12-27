import { Variant } from '../../components/Variant/Variant';

export function VariantPokemon({ variants }) {
    return (
        <>
            {variants.types.map((variant) => (
                <>
                    <Variant >
                        <div className="types">
                            {variant.type.name}
                        </div>
                    </Variant>
                </>
            ))}
        </>
    )
}