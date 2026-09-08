type Data = {
    name: string;
    role: string;
    age: number;
    funFact: string;
};

export async function GET(request: Request) {
    const user = {
        name: "Dhruv",
        role: "Tech Team",
        age: 20,
        funFact: "Lebron is the GOAT"
    };

    const jsonResponse = new Response(JSON.stringify(user));
    return jsonResponse;
}