import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	const url = new URL(req.url);
	const code = url.searchParams.get("code");

	if (!code) {
		return NextResponse.json(
			{ error: "Authorization code is missing." },
			{ status: 400 },
		);
	}

	const data = new URLSearchParams({
		client_id: process.env.DISCORD_CLIENT_ID || "",
		client_secret: process.env.DISCORD_CLIENT_SECRET || "",
		grant_type: "authorization_code",
		code: code,
		redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/callback` || "",
	});

	const headers = {
		"Content-Type": "application/x-www-form-urlencoded",
	};

	const response = await fetch("https://discord.com/api/v10/oauth2/token", {
		method: "POST",
		headers,
		body: data.toString(),
	});

	if (!response.ok) {
		const error = await response.text();
		return NextResponse.json(
			{ error: `Failed to validate authorization: ${error}` },
			{ status: 400 },
		);
	}

	const result = await response.json();
	const redir_url = req.nextUrl.clone();
	redir_url.pathname = "/";
	const res = NextResponse.redirect(redir_url);
	cookies().set("access_token", result.access_token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		path: "/",
		maxAge: result.expires_in,
	});

	return res;
}
