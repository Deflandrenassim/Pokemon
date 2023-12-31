import { useState } from 'react';
import { VariantBtn } from '../../components/Variant/Variant';
import { TypePokemon } from '../../data/typePokemon';

export function ButtonsTypes({ type }) {
    const [selectType] = useState(TypePokemon);
    const [handleClick, setHandleClick] = useState();

    function handleClickbtn(valueType) {
        setHandleClick(valueType);
        if (type === valueType) {
            console.log("types", type)
        }
    }

    return (
        <>
            {selectType.map((type) => (
                <VariantBtn type={type.name} onClick={() => handleClickbtn(type.name)} key={type.name}>
                    {type.name}
                </VariantBtn>
            ))}
        </>
    )
}