import { NextResponse } from "next/server";


export async function GET() {
    return NextResponse.json({ name: "John Doe" });
}

export async function POST(request) {
    let { name, age } = await request.json();
    return NextResponse.json({ name, age });
}