const btnConfirm = document.getElementById("btnConfirm");
const inputPoke = document.getElementById("request");

btnConfirm.addEventListener("click", function () {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url + inputPoke.value.trim())
    .then(response => {
        if (!response.ok) {
          throw new Error(`Não foi possível encontrar o Pokémon: ${pokemonNameOrNumber}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
    });
});