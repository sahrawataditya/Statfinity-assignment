import { NextApiRequest } from "next";

export async function GET(req: NextApiRequest) {
  const baseURL = process.env.API_BASE_URL as string;
  try {
    const response = await fetch(baseURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return Response.json({ data, success: true }, { status: 200 });
  } catch (error) {
    return Response.json({ error, success: false }, { status: 500 });
  }
}
