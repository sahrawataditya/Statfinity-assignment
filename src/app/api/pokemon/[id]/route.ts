import { NextApiRequest } from "next";

export async function GET(
  req: NextApiRequest,
  { params }: { params: { id: string } }
) {
  const baseURL = process.env.API_BASE_URL as string;
  const { id } = params;
  try {
    const response = await fetch(`${baseURL}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      return Response.json({ data, success: true }, { status: 200 });
    }
  } catch (error) {
    return Response.json({ error, success: false }, { status: 500 });
  }
}
