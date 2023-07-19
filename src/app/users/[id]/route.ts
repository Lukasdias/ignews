import { NextResponse } from "next/server";

export async function GET(
        request: Request,
        { params }: { params: { slug: string } }
) {
        const users = [
                { name: "a", age: 1 },
                { name: "b", age: 2 },
                { name: "c", age: 3 },
        ];

        const slug = params.slug; // 'a', 'b', or 'c'

        const user = users.find((user) => user.name === slug);

        const response = user ? NextResponse.json(user) : null;

        return NextResponse.json(users);
}
