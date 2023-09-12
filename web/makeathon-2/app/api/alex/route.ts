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
        funFact: "i'm stuck in a borked commit",
    };

    const jsonResponse = new Response(JSON.stringify(user));

    return jsonResponse;
}
