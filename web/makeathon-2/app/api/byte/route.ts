type Data = {
  name: string;
  role: string;
  age: number;
  funFact: string;
};

export async function GET(request: Request) {
  const user = {
    name: "Byte",
    role: "Mascot",
    age: 63,
    funFact: "He's a dog",
  };

  const jsonResponse = new Response(JSON.stringify(user));

  return jsonResponse;
}
