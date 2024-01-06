// get language
export function GetDescription(arr, language) {
    let result;
    if (arr && arr.flavor_text_entries) {
        for (let i = 0; i < arr.flavor_text_entries.length; i++) {
            let res = arr.flavor_text_entries[i];
            if (res.language.name === language) {
                result = Object.values(res)[0];
            }
        }
    } else {
        return "La propriété flavor_text_entries n'est pas définie dans l'objet.";
    }
    return result;
}