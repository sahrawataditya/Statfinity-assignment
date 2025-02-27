import PokemonDetail from "@/components/PokemonDetail/PokemonDetail";
import { getSinglePokemon } from "@/services/ApiService";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pokemon Detail Page",
  description: "Pokemon Detail Page Description",
};
const PokemonDetailPage = async (params: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params.params;
  const response = await getSinglePokemon(id);
  //If Pokemon id is incorrect
  if (!response.success) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="flex flex-col gap-2 items-center">
          <h3 className="text-xl text-red-500">{response.error}</h3>
          <Link
            href="/"
            className="text-white bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-fit"
          >
            Go Homepage
          </Link>
        </div>
      </div>
    );
  }
  //If Pokemon id is correct
  return <PokemonDetail data={response.data} />;
};

export default PokemonDetailPage;
