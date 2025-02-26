import { NextResponse } from "next/server";

const GITHUB_URL = `https://api.github.com/users/arthPRAJAPATI/repos`;

export async function GET() {
    try {
        const response = await fetch(GITHUB_URL);
        if (!response.ok) {
            throw new Error("Failed to fetch repositories");
        }

        const repos = await response.json();
        return NextResponse.json(repos);
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}