import { writable } from 'svelte/store';

const pokemonToSearch = writable('');
export default pokemonToSearch;
