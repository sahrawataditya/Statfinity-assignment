import { NextRequest } from "next/server";

//Get Single Pokemon from PokeApi by passing id
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const baseURL = process.env.API_BASE_URL as string;
  const { id } = await params;
  try {
    const response = await fetch(`${baseURL}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 404) {
      return Response.json(
        { error: "Pokemon not found", success: false },
        { status: 404 }
      );
    }
    const data = await response.json();
    return Response.json({ data, success: true }, { status: 200 });
  } catch (error) {
    return Response.json({ error, success: false }, { status: 500 });
  }
}
