type Data = {
  name: string;
  role: string;
  age: number;
  funFact: string;
};

export async function GET(request: Request) {
  const user = {
    name: "Justin",
    role: "Tech Organizer",
    age: 21,
    funFact: "I'm disgusting",
  };

  const jsonResponse = new Response(JSON.stringify(user));

  return jsonResponse;
}
