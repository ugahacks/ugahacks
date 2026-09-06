type Data = {
  name: string;
  role: string;
  age: number;
  funFact: string;
};

export async function GET(request: Request) {
  const user = {
    name: "Vansh",
    role: "IDEK",
    age: 20,
    funFact: "I'm you.",
  };

  const jsonResponse = new Response(JSON.stringify(user));

  return jsonResponse;
}
