const BASE_URL = process.env.NEXT_PUBLIC_APP_API as string;
export const getAllPokemons = async () => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon`, {  //Fetching from Next API
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: Promise<apiData.Pokemons> = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
