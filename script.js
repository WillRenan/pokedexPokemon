 fetch('https://pokeapi.co/api/v2/pokemon?limit=26')
      .then(response => response.json())
      .then(allPokemon => console.log(allPokemon));