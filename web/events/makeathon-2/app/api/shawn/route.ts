type Data = {
  name: string;
  role: string;
  age: number;
  funFact: string;
};

export async function GET(request: Request) {
  const user = {
    name: "Shawn",
    role: "Tech Director",
    age: 20,
    funFact: "I'm sexy",
  };

  const jsonResponse = new Response(JSON.stringify(user));

  return jsonResponse;
}
