const BASE_URL = process.env.NEXT_PUBLIC_APP_API as string;
export const getAllPokemons = async () => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: Promise<Pokemons> = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
