import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name, email, cellphone } = await request.json();

  const fakeApiEndpoint = "https://jsonplaceholder.typicode.com/posts";

  const response = await fetch(fakeApiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, cellphone }),
  });

  const fakeApiResponse = await response.json();

  console.log("fakeApiResponse", fakeApiResponse);

  return NextResponse.json({ success: true });
}
