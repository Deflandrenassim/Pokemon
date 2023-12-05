export function getBaseXp(pokeOne, pokeTwo) {
    const pokeOneBase = pokeOne.base_experience;
    const pokeTwoBase = pokeTwo.base_experience;

    if (pokeOneBase > pokeTwoBase) {
        return pokeOneBase
    } else if (pokeOneBase < pokeTwoBase) {
        return pokeTwoBase;
    } else {
        return null;
    }
}




