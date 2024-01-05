export async function getBaseXp(pokeOne, pokeTwo) {
    console.log("get", pokeOne, pokeTwo)
    const pokeOneBase = await pokeOne.base_experience;
    const pokeTwoBase = await pokeTwo.base_experience;

    if (pokeOneBase > pokeTwoBase) {
        return pokeOneBase
    } else if (pokeOneBase < pokeTwoBase) {
        return pokeTwoBase;
    } else {
        return null;
    }
}




