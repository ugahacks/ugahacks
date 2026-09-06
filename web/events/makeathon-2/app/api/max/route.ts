type Data = {
    name: string;
    role: string;
    age: number;
    funFact: string;
  };
  
  export async function GET(request: Request) {
    const user = {
      name: "Max",
      role: "Tech Team Member",
      age: 20,
      funFact: "I just got a bananna from snelling",
    };
  
    const jsonResponse = new Response(JSON.stringify(user));
  
    return jsonResponse;
  }
  