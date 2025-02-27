//Get All Pokemons from PokeApi
export async function GET() {
  const baseURL = process.env.API_BASE_URL as string;
  const limit = (process.env.API_LIMIT as string) || 20;
  try {
    const response = await fetch(`${baseURL}?limit=${limit}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 404) {
      return Response.json(
        { error: "Url not Found", success: false },
        { status: 200 }
      );
    }
    const data = await response.json();
    return Response.json({ data, success: true }, { status: 200 });
  } catch (error) {
    return Response.json({ error, success: false }, { status: 500 });
  }
}
