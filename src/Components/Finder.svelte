<script>
  import pokemonToSearch from "../pokemon-store.js";
  import capitalize from "../capitalize.js";
  let search;
  const API_ROOT = "https://pokeapi.co/api/v2/pokemon/";
  pokemonToSearch.subscribe(searchTerm => {
    if (searchTerm) {
      search = fetch(API_ROOT + searchTerm.toLowerCase()).then(response =>
        response.json()
      );
    }
  });
</script>

<div class="finder">
  {#await search}
    <p>Fetching pokemon data...</p>
  {:then searchData}
    {#if searchData}
      <img src={searchData.sprites.front_default} alt="sprite" />
      <table>
        <tr>
          <td>Name:</td>
          <td>{capitalize(searchData.species.name)}</td>
        </tr>
        <tr>
          <td>Height:</td>
          <td>{searchData.height}</td>
        </tr>
        <tr>
          <td>Weight:</td>
          <td>{searchData.weight}</td>
        </tr>
        <tr>
          <td>Abilities:</td>
          <td>
            <ul>
              {#each searchData.abilities as ability}
                <li>{ability.ability.name}</li>
              {/each}
            </ul>
          </td>
        </tr>
      </table>
    {:else}
      <p>Enter a Pokémon to search</p>
    {/if}
  {:catch err}
    <p>No Pokémon with that name!</p>
  {/await}
</div>
