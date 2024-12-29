import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
	const cookieStore = cookies();
	const accessToken = cookieStore.get("access_token");

	if (!accessToken) {
		return NextResponse.json(
			{ error: "Unauthorized" },
			{ status: 401 },
		);
	}

	try {
		return NextResponse.json({});
	} catch (error) {
		console.error("Error fetching user data:", error);
		return NextResponse.json(
			{ error: "Failed to verify" },
			{ status: 500 },
		);
	}
}
