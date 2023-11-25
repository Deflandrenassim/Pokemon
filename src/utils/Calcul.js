export function getBaseXp(pokeOne, pokeTwo) {
    const pokeOneBase = pokeOne.base_experience;
    const pokeTwoBase = pokeTwo.base_experience;

    if (pokeOneBase > pokeTwoBase) {
        console.log("poke One", pokeOneBase)
        return pokeOneBase
    }
    else if (pokeOneBase < pokeTwoBase) {
        console.log("poke Two", pokeTwoBase)
        return pokeTwoBase;
    }
}




