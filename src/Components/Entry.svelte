<script>
  import pokemonToSearch from "../pokemon-store.js";
  export let defaultPokemon;
  let favorite = defaultPokemon;

  function searchFor() {
    pokemonToSearch.set(favorite);
  }

  function changeFavorite(event) {
    favorite = event.target.value;
  }
</script>

<div class="entry">
  <label>What is your favorite Pokémon?</label>
  <input on:input={changeFavorite} type="text" value={favorite} />
  {#if favorite}
    <button on:click={searchFor}>Find data on {favorite}</button>
  {:else}
    <p>Enter a Pokémon name above.</p>
  {/if}
</div>
