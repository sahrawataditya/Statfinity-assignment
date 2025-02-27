/* eslint-disable */
namespace apiData {
  type Pokemons = {
    count: number;
    next: string;
    previous: string | null;
    results: {
      name: string;
      url: string;
    }[];
  };

  type Pokemon = {
    name: string;
    url: string;
    uniqueKey?: number;
  };

  type PokemonDetail = {
    name: string;
    abilities: { ability: { name: string; url: string } }[];
    moves: { move: { name: string; url: string } }[];
    stats: { base_stat: number; stat: { name: string; url: string } }[];
    types: { type: { name: string; url: string } }[];
    sprites: { front_default: string };
  };
}
