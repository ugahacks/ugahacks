type Data = {
  name: string;
  role: string;
  age: number;
  funFact: string;
};

export async function GET(request: Request) {
  const user = {
    name: "Kasra",
    role: "Tech Organizer",
    age: 21,
    funFact: "I eat food regularly",
  };

  const jsonResponse = new Response(JSON.stringify(user));

  return jsonResponse;
}
