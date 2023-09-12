type Data = {
    name: string;
    role: string;
    age: number;
    funFact: string;
  };
  
  export async function GET(request: Request) {
    const user = {
      name: "Nikita",
      role: "Tech Team Member",
      age: 19,
      funFact: "I love rock climbing!",
    };
  
    const jsonResponse = new Response(JSON.stringify(user));
  
    return jsonResponse;
  }
  