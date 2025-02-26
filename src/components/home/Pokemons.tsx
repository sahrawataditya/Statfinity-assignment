"use client";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const Pokemons = ({ data }: { data: apiData.Pokemon[] }) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredData, setFilteredData] = useState<apiData.Pokemon[]>(
    data || []
  );

  //Filtering pokemons by name
  useEffect(() => {
    if (searchInput) {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [searchInput, data]);

  return (
    <div className="p-2">
      {/* Search input */}
      <input
        type="text"
        id="search"
        placeholder="Search Pokemon..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded-lg outline-none block sm:ml-auto mx-auto sm:mx-0 placeholder:text-sm"
      />
      {/* Looping through pokemons */}
      <div className="flex flex-wrap sm:justify-between justify-center gap-y-12">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <PokemonCard pokemonData={item} key={index} index={index + 1} /> //Passing index to pokemon card for routing to pokemon detail page
          ))
        ) : (
          <p className="text-red-500">No Pokemons Found...</p>
        )}
      </div>
    </div>
  );
};

export default Pokemons;
