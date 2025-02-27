import Image from "next/image";
import Link from "next/link";
import React from "react";

const PokemonCard = ({ pokemonData }: { pokemonData: apiData.Pokemon }) => {
  return (
    <div className="max-w-[300px] w-full rounded-[30px] hover:shadow-2xl min-h-[230px] bg-gray-800 relative group cursor-pointer">
      <div className="m-5 flex flex-col justify-center items-center gap-2">
        <h2 className="text-2xl text-white capitalize">
          {pokemonData.uniqueKey}. {pokemonData.name}
        </h2>
        <div className="aspect-[1/1] w-[100px] relative">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonData.uniqueKey}.png`} //Pokemon Image for Card
            alt={pokemonData.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <Link
          href={`/pokemon/${pokemonData.uniqueKey}`}
          className="bg-gray-700 rounded-full w-fit px-3 py-2 text-xs text-white hover:ring-2  ring-gray-400 hover:transition duration-700 ease-in-out"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default PokemonCard;
