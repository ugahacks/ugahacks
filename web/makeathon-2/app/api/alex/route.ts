type Data = {
    name: string;
    role: string;
    age: number;
    funFact: string;
};

export async function GET(request: Request) {
    const user = {
        name: "Alex",
        role: "Keyboard Jockey",
        age: 21,
        funFact: "i pay for gpt4",
    };

    const jsonResponse = new Response(JSON.stringify(user));

    return jsonResponse;
}
