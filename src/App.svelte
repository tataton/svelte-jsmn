<script>
  import Entry from "./Components/Entry.svelte";
  import Finder from "./Components/Finder.svelte";
  let name = "JSMN Pokémon Fans";
</script>

<style>
  div {
    width: 100%;
    height: 100%;
    background-color: #111111;
  }
  h1 {
    margin: 0;
    text-align: center;
    padding: 1rem;
    color: #ffff00;
  }
</style>

<div>
  <h1>Hello {name}!</h1>
  <div class="poke-flex">
    <Entry defaultPokemon="Chansey" />
    <Finder />
  </div>
</div>
