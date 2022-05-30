const URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150";

export function getPokemons() {
    return fetch(URL)
        .then(response => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        }).catch(error => {
            console.log(error);
        });;
}