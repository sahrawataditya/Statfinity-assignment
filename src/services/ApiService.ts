const BASE_URL = process.env.APP_API_URL as string;
//Get All Pokemons
export const getAllPokemons = async () => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon`, {
      //Fetching from Next API
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: Promise<{
      data: apiData.Pokemons;
      success: boolean;
      error?: string;
    }> = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
//Get Single Pokemon
export const getSinglePokemon = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon/${id}`, {
      //Fetching from Next API
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: Promise<{
      data: apiData.PokemonDetail;
      success: boolean;
      error?: string;
    }> = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
