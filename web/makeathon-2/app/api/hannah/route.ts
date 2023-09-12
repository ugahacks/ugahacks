type Data = {
  name: string;
  role: string;
  age: number;
  funFact: string;
};

export async function GET(request: Request) {
  const user = {
    name: "Hannah",
    role: "Tech Organizer",
    age: 20,
    funFact: "I organize the UGA Valorant teams.",
  };

  const jsonResponse = new Response(JSON.stringify(user));

  return jsonResponse;
}
